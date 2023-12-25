import {useCallback, useState} from "react";
import {AlgorithmType, Cell, CellType} from "../../reducers/Grid/Grid.interface.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {resetGrid, setShortestPath, setVisitedCells} from "../../reducers/Grid/Grid.reducer.ts";
import { setRealTimeExecution } from "../../reducers/gridAnimation/gridAnimation.reducer.ts";
import dijkstraAlgorithm from "../../algorithms/pathfinding/dijkstra.algorithm.ts";
import aStarAlgorithm from "../../algorithms/pathfinding/aStar.algorithm.ts";
import bfsAlgorithm from "../../algorithms/pathfinding/bfs.algorithm.ts";
import dfsAlgorithm from "../../algorithms/pathfinding/dfs.algorithm.ts";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;



type GetPathType =() => Promise<void>
interface ReturnInterface extends Array<GetPathType> {
    length: 1;
    0: GetPathType;
}
const algorithmFunctions = {
    [AlgorithmType.DFS]: dfsAlgorithm,
    [AlgorithmType.BFS]: bfsAlgorithm,
    [AlgorithmType.DIJKSTRA]: dijkstraAlgorithm,
    [AlgorithmType.AStar]: aStarAlgorithm,
};
const usePathfindingAlgorithm = (): ReturnInterface => {
    const { gridData, startCell, endCell, algorithm,shortestPath } = useSelector(
        (state: RootState) => state.grid
    );
    const { enableAnimation,animationSpeed,animationRunning } = useSelector((state: RootState) => state.gridAnimation);
    const { enableDiagonals } = useSelector((state: RootState) => state.gridSettings);
    const dispatch: AppDispatch = useDispatch();

    const getNeighbors = useCallback(
        (cell: Cell, memoizedVisitedCells: Cell[]) => {
            const neighbors: Cell[] = [];
            const { row, col } = cell;
            if (row > 0) neighbors.push(gridData[row - 1][col]);
            if (col < gridData[0].length - 1) neighbors.push(gridData[row][col + 1]);
            if (row < gridData.length - 1) neighbors.push(gridData[row + 1][col]);
            if (col > 0) neighbors.push(gridData[row][col - 1]);
            if (enableDiagonals) {
                if (row > 0 && col > 0) neighbors.push(gridData[row - 1][col - 1]);
                if (row < gridData.length - 1 && col < gridData[0].length - 1)
                    neighbors.push(gridData[row + 1][col + 1]);
                if (row > 0 && col < gridData[0].length - 1)
                    neighbors.push(gridData[row - 1][col + 1]);
                if (row < gridData.length - 1 && col > 0) neighbors.push(gridData[row + 1][col - 1]);
            }
            return neighbors.filter((neighbor) => !memoizedVisitedCells.includes(neighbor));
        },
        [gridData, enableDiagonals]
    );

    const getPath = useCallback(
        async () => {
            dispatch(resetGrid())
            const distance = {};
            const previousCells = {};
            const startTime = performance.now();
            const unvisitedCells = [...gridData.flat()];
            const memoizedVisitedCells: Cell[] = [];
            const memoizedShortestPath: Cell[] = [];
            const memoizedVisitCell = (cell: Cell) => {
                memoizedVisitedCells.push(cell);
            };
            const memoizedUpdatePath = (cell: Cell) => {
                memoizedShortestPath.push(cell);
            };
            gridData.forEach((row) => {
                row.forEach((cell) => {
                    distance[cell.id] = Infinity;
                    previousCells[cell.id] = null;
                });
            });
            distance[startCell.id] = 0;

            const priorityQueue = [...gridData.flat()];
            priorityQueue.sort((a, b) => distance[a.id] - distance[b.id]);

            while (unvisitedCells.length > 0) {
                const currentCell = priorityQueue.shift();
                if (distance[currentCell.id] === Infinity) break;
                if (currentCell.type === CellType.WALL) continue;
                memoizedVisitCell(currentCell);

                if (currentCell === endCell) {
                    let current = endCell;
                    while (current !== null) {
                        memoizedUpdatePath(current);
                        current = previousCells[current.id];
                    }
                    break;
                }

                const neighbors = getNeighbors(currentCell, memoizedVisitedCells);
                const algorithmFunction = algorithmFunctions[algorithm];
                algorithmFunction(
                    currentCell,
                    neighbors,
                    distance,
                    previousCells,
                    priorityQueue,
                    memoizedVisitedCells,
                    memoizedShortestPath,
                    endCell
                );


            }

            const endTime = performance.now();
            dispatch(setRealTimeExecution((endTime - startTime) / 1000));

            if (enableAnimation) {
                // Animate visited cells
                await animateVisitedCells(memoizedVisitedCells, animationSpeed*5);

                // Animate shortest path
                await animateShortestPath(memoizedShortestPath, animationSpeed*5);

            } else {
                // Update Redux state one last time if animation is disabled
                dispatch(setVisitedCells(memoizedVisitedCells));
                dispatch(setShortestPath(memoizedShortestPath));
            }

        },
        [gridData, startCell, endCell, getNeighbors, enableAnimation, algorithm ,animationSpeed]
    );
    const animateVisitedCells = async (visitedCells: Cell[], speed: number) => {
        // Implement your animation logic for visited cells
        for (let i = 0; i < visitedCells.length; i++) {
            // Simulate delay for animation speed
            await sleep(120 / speed);

            // Dispatch action to update visited cells
            dispatch(setVisitedCells(visitedCells.slice(0, i + 1)));
        }
    };

    const animateShortestPath = async (shortestPath: Cell[], speed: number) => {
        // Implement your animation logic for the shortest path
        for (let i = 0; i < shortestPath.length; i++) {

            await sleep(120 / speed);

            dispatch(setShortestPath(shortestPath.slice(0, i + 1)));
        }
    };

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    return [getPath];
};

export default usePathfindingAlgorithm;
