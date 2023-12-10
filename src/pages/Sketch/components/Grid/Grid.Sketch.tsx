import React, {useEffect, useState} from 'react';
import {Cell, CellType} from "./Grid.interface.ts";
import classNames from "classnames";
import CellGrid from "./components/Cell/Cell.grid.sketch.tsx";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const generateGrid = (rows:number , cols:number):Cell[][]=>{
    return Array.from({ length: rows }, (_, rowIndex) =>
        Array.from({ length: cols }, (_, colIndex) => ({
            id: `cell-r_${rowIndex}-c_${colIndex}`,
            type: (rowIndex === 0 && colIndex === 0 ? CellType.START
                    : rowIndex === rows-1 && colIndex === cols-1 ? CellType.END
                        :(Math.random() < 0.2 ? CellType.WALL : CellType.EMPTY))

        }))
    ) ;
}

const Grid:React.FC = () => {

    const [gridData , setGridData] = useState<Cell[][]>(generateGrid(Math.round(window.innerHeight /20),Math.round(window.innerWidth/20)))
    useEffect(()=>{
        const setGridDataFC = ()=>{
            setGridData(generateGrid(Math.round(window.innerHeight /20),Math.round(window.innerWidth/20)));
            console.log("Done")

        }
        window.addEventListener("resize" , setGridDataFC)
    },[])
    const UpdateGridCell = (rowIndex:number ,colIndex:number,newCell:Cell)=>{
        setGridData((prevGrid) =>
            prevGrid.map((row, i) =>
                i === rowIndex
                    ? row.map((cell, j) => (j === colIndex ? { ...cell, ...newCell } : cell))
                    : row
            ))
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="w-screen h-screen">
                <table className="w-full h-full grid-container">
                    <tbody>
                    {gridData.map((row ,rowIndex)=>(
                        <tr key={`R_${rowIndex}`}>
                            {row.map((cell,colIndex)=>(
                                <CellGrid
                                    updateCell={UpdateGridCell}
                                    cell={cell}
                                    rowIndex={rowIndex}
                                    colIndex={colIndex}
                                    key={`cell-${rowIndex}-${colIndex}-${cell.type}`} />
                            ))}
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        </DndProvider>

    );
};

export default Grid;
