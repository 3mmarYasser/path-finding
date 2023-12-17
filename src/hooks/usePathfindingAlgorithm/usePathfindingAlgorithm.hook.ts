
import {useCallback, useState} from "react";
import {Cell, CellType} from "../../pages/Sketch/components/Grid/Grid.interface.ts";

interface PathfindingResult {
    visitedCells: Cell[];
    shortestPath: Cell[];
    executionTime: number;
}

type PathfindingAlgorithm = () => void;

interface ReturnInterface extends Array<PathfindingResult | PathfindingAlgorithm> {
    length: 2;
    0: PathfindingAlgorithm;
    1: PathfindingResult;
}
const diagonal:boolean =true;
const usePathfindingAlgorithm = (grid:Cell[][] , startCell:Cell ,endCell:Cell):ReturnInterface=>{
    const [visitedCells, setVisitedCells] = useState<Cell[]>([]);
    const [shortestPath, setShortestPath] = useState<Cell[]>([]);
    const [executionTime, setExecutionTime] = useState<number>(0);


    const getNeighbors = useCallback(
        (cell: Cell) => {
            const neighbors: Cell[] = [];
            const { row, col } = cell;
            if (row > 0) neighbors.push(grid[row - 1][col]);
            if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
            if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
            if (col > 0) neighbors.push(grid[row][col - 1]);
            if(diagonal){
                if (row > 0 && col > 0) neighbors.push(grid[row - 1][col - 1]);
                if (row < grid.length - 1 && col < grid[0].length - 1) neighbors.push(grid[row + 1][col + 1]);
                if (row > 0 && col < grid[0].length - 1) neighbors.push(grid[row - 1][col + 1]);
                if (row < grid.length - 1 && col > 0) neighbors.push(grid[row + 1][col - 1]);
            }
            return neighbors.filter((neighbor) => !visitedCells.includes(neighbor));
        },
        [visitedCells ,grid]
    );


    const GetPath = useCallback(
        () => {
            setVisitedCells([]);
            setShortestPath([]);
            setExecutionTime(0);

            const distance = {};
            const previousCells = {};
            const startTime = performance.now();
            const unvisitedCells = [...grid.flat()];
            const visitCell = (cell: Cell) => {
                setVisitedCells(prev=>[...prev , cell])
            }
            const updatePath = (cell: Cell) => {
                setShortestPath(prev=>[cell,...prev])
            }
            grid.forEach((row) => {
                row.forEach((cell) => {
                    distance[cell.id] = Infinity;
                    previousCells[cell.id] = null;

                });
            });
            distance[startCell.id] = 0;

            const priorityQueue = [...grid.flat()];
            priorityQueue.sort((a, b) => distance[a.id] - distance[b.id])

            while (unvisitedCells.length > 0) {
                const currentCell = priorityQueue.shift();
                if(distance[currentCell.id] === Infinity) break;
                if(currentCell.type === CellType.WALL) continue;
                visitCell(currentCell);

                if (currentCell === endCell) {
                    let current = endCell;
                    while (current !== null) {
                        updatePath(current)
                        current = previousCells[current.id];
                    }
                    break;
                }

                const neighbors = getNeighbors(currentCell);
                neighbors.forEach((neighbor) => {
                    if(neighbor.type !== CellType.WALL){
                        const newDistance = distance[currentCell.id] + 1;
                        if (newDistance < distance[neighbor.id]) {
                            distance[neighbor.id] = newDistance;
                            previousCells[neighbor.id] = currentCell;


                            priorityQueue.sort((a, b) => distance[a.id] - distance[b.id]);
                        }
                    }
                });

            }

            const endTime = performance.now();
            setExecutionTime(endTime - startTime);

        },
        [grid, startCell, endCell, getNeighbors],
    );



    return [GetPath ,{visitedCells ,shortestPath ,executionTime}]
}
export default usePathfindingAlgorithm