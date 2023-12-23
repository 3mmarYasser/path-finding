import {Cell} from "../../reducers/Grid/Grid.interface.ts";

export type PathfindingAlgorithm = (
    currentCell: Cell,
    neighbors: Cell[],
    distance: Record<string, number>,
    previousCells: Record<string, Cell | null>,
    priorityQueue: Cell[],
    memoizedVisitedCells: Cell[],
    memoizedShortestPath: Cell[],
    endCell: Cell
) => void;
