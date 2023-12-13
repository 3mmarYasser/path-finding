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
export type {
    Cell
}