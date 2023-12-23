import {Cell, CellType} from "../../reducers/Grid/Grid.interface.ts";
import {PathfindingAlgorithm} from "./algorithms.interface.ts";

const calculateHeuristic = (cell: Cell, endCell: Cell) => {
    // A* heuristic function (Euclidean distance)
    const dx = Math.abs(cell.row - endCell.row);
    const dy = Math.abs(cell.col - endCell.col);
    return Math.sqrt(dx * dx + dy * dy);
};
const aStar: PathfindingAlgorithm = (
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
        if (neighbor.type !== CellType.WALL) {
            const newDistance = distance[currentCell.id] + 1;
            if (newDistance < distance[neighbor.id]) {
                distance[neighbor.id] = newDistance;
                previousCells[neighbor.id] = currentCell;

                // A* specific: update distance with heuristic
                const heuristic = calculateHeuristic(neighbor, endCell);
                const totalDistance = newDistance + heuristic;
                priorityQueue.push(neighbor); // Use push instead of sort

                // Sort the priority queue based on totalDistance
                priorityQueue.sort((a, b) => distance[a.id] + calculateHeuristic(a, endCell) - (distance[b.id] + calculateHeuristic(b, endCell)));

                // Track visited cells for A*
                memoizedVisitedCells.push(neighbor);
            }
        }
    });
};
export default aStar;