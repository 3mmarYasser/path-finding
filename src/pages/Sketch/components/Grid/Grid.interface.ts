export enum CellType{
    "WALL"="Wall",
    "EMPTY"="Empty",
    "START"="Start",
    "END"="End",

}
interface Cell{
    id:string;
    type:CellType
}
export type {
    Cell
}