import {CellType} from "../../reducers/Grid/Grid.interface.ts";
import {PathfindingAlgorithm} from "./algorithms.interface.ts";

const dijkstra: PathfindingAlgorithm = (
    currentCell,
    neighbors,
    distance,
    previousCells,
    priorityQueue,
    memoizedVisitedCells,
    memoizedShortestPath
) => {
    neighbors.forEach((neighbor) => {
        if (neighbor.type !== CellType.WALL) {
            const newDistance = distance[currentCell.id] + 1;
            if (newDistance < distance[neighbor.id]) {
                distance[neighbor.id] = newDistance;
                previousCells[neighbor.id] = currentCell;

                priorityQueue.sort((a, b) => distance[a.id] - distance[b.id]);
            }
        }
    });
};
export default dijkstra;