export enum CellType{
    "WALL"="Wall",
    "EMPTY"="Empty",
    "START"="Start",
    "END"="End",

}
 interface Cell{
    id:string;
    type:CellType,
    row:number,
    col:number
}
export enum AlgorithmType{
    "BFS"="BFS",
    "DFS"="DFS",
    "DIJKSTRA"="Dijkstra",
    "AStar"="A*"
}
 interface GridData {
    gridData:Cell[][],
    startCell:Cell,
    endCell:Cell,
    visitedCells:Cell[],
    shortestPath:Cell[],
    algorithm:AlgorithmType
}
export type {
    Cell,
    GridData
}
