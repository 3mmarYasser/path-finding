import {CellType} from "../../reducers/Grid/Grid.interface.ts";
import {PathfindingAlgorithm} from "./algorithms.interface.ts";

const dfs: PathfindingAlgorithm = (
    currentCell,
    neighbors,
    distance,
    previousCells,
    priorityQueue,
    memoizedVisitedCells,
    memoizedShortestPath,
    endCell
) => {
    neighbors.forEach((neighbor) => {
        if (neighbor.type !== CellType.WALL && !memoizedVisitedCells.includes(neighbor)) {
            const newDistance = distance[currentCell.id] + 1;
            if (newDistance < distance[neighbor.id]) {
                distance[neighbor.id] = newDistance;
                previousCells[neighbor.id] = currentCell;

                priorityQueue.unshift(neighbor); // DFS uses a stack (unshift for LIFO behavior)
                memoizedVisitedCells.push(neighbor);
            }
        }
    });
};
export default dfs;