
import React, {useState} from 'react';
import {Cell, CellType} from "../../Grid.interface.ts";
import classNames from "classnames";
import {useDrag} from "react-dnd";

interface Props {
    cell :Cell,
    rowIndex:number,
    colIndex:number,
    updateCell :(rowIndex:number ,colIndex:number,newCell:Cell)=>void
}
const CellGrid:React.FC<Props> = ({cell ,colIndex ,rowIndex,updateCell}) => {

    const handleMouseMove = () => {
        if (cell.type === CellType.EMPTY ||cell.type === CellType.WALL) {
            updateCell(rowIndex , colIndex ,{...cell ,type:(cell.type === CellType.WALL ? CellType.EMPTY :CellType.WALL)})
        }
    };



    return (
        <td id={`cell-${rowIndex}-${colIndex}`}
            onClick={handleMouseMove}
            className={classNames("cell ",cell.type)}></td>
    );
};
export default CellGrid
