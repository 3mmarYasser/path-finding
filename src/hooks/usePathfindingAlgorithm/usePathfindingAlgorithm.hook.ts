import { useCallback } from "react";
import {AlgorithmType, Cell, CellType} from "../../reducers/Grid/Grid.interface.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setShortestPath, setVisitedCells } from "../../reducers/Grid/Grid.reducer.ts";
import { setRealTimeExecution } from "../../reducers/gridAnimation/gridAnimation.reducer.ts";
import dijkstraAlgorithm from "../../algorithms/pathfinding/dijkstra.algorithm.ts";
import aStarAlgorithm from "../../algorithms/pathfinding/aStar.algorithm.ts";
import bfsAlgorithm from "../../algorithms/pathfinding/bfs.algorithm.ts";
import dfsAlgorithm from "../../algorithms/pathfinding/dfs.algorithm.ts";




interface ReturnInterface extends Array<()=>void> {
    length: 1;
    0: ()=>void;
}
const algorithmFunctions = {
    [AlgorithmType.DFS]: dfsAlgorithm,
    [AlgorithmType.BFS]: bfsAlgorithm,
    [AlgorithmType.DIJKSTRA]: dijkstraAlgorithm,
    [AlgorithmType.AStar]: aStarAlgorithm,
};
const usePathfindingAlgorithm = (): ReturnInterface => {
    const { gridData, startCell, endCell, algorithm } = useSelector(
        (state: RootState) => state.grid
    );
    const { enableAnimation } = useSelector((state: RootState) => state.gridAnimation);
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
        () => {
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

            if (enableAnimation) {
                // Add animation logic here
            } else {
                dispatch(setVisitedCells(memoizedVisitedCells));
                dispatch(setShortestPath(memoizedShortestPath));
            }
            const endTime = performance.now();
            dispatch(setRealTimeExecution((endTime - startTime) / 1000));
        },
        [gridData, startCell, endCell, getNeighbors, enableAnimation, algorithm]
    );

    return [getPath];
};

export default usePathfindingAlgorithm;
