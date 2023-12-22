import React, {useEffect, useState} from 'react';
import {Cell, CellType} from "./Grid.interface.ts";
import CellGrid from "./components/Cell/Cell.grid.sketch.tsx";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import usePathfindingAlgorithm from "../../../../hooks/usePathfindingAlgorithm/usePathfindingAlgorithm.hook.ts";
const generateGrid = (rows:number , cols:number):Cell[][]=>{

    return Array.from({ length: rows }, (_, rowIndex) =>
        Array.from({ length: cols }, (_, colIndex) => {
            return ({
                id: `cell-r_${rowIndex}-c_${colIndex}`,
                row:rowIndex,
                col:colIndex,
                type: (rowIndex === 0 && colIndex === 0 ? CellType.START
                    : rowIndex === rows-6 && colIndex === cols-5 ? CellType.END
                        : CellType.EMPTY),

            })
        })
    ) ;
}

const Grid:React.FC = () => {
    const [gridData , setGridData] = useState<Cell[][]>(generateGrid(Math.round(window.innerHeight /30),Math.round(window.innerWidth/30)))
    const [GetPath ,{shortestPath ,visitedCells,executionTime} ] = usePathfindingAlgorithm(gridData , gridData[0][0],gridData[gridData.length-6][gridData[gridData.length-1].length-5])

    useEffect(()=>{
        const setGridDataFC = ()=>{
            setGridData(generateGrid(Math.round(window.innerHeight /30),Math.round(window.innerWidth/30)));
            console.log(gridData.length * gridData[0].length)

        }
        window.addEventListener("resize" , setGridDataFC)
    },[])

    useEffect(() => {
        console.log(["Visited Cells"] ,[...visitedCells])
        console.log(["Shortest Path"],[...shortestPath])
        console.log(["Execution Time"],executionTime)
    }, [shortestPath , visitedCells ,executionTime]);
    const UpdateGridCell = (rowIndex:number ,colIndex:number,newCell:Cell)=>{
        setGridData((prevGrid) =>
            prevGrid.map((row, i) =>
                i === rowIndex
                    ? row.map((cell, j) => (j === colIndex ? { ...cell, ...newCell } : cell))
                    : row
            ))
    }
    return (
        <DndProvider backend={HTML5Backend} >
            <div className="w-full h-full">
                <table className="w-full h-full grid-container ">
                    <tbody>
                    {gridData.map((row ,rowIndex)=>(
                        <tr key={`R_${rowIndex}`}>
                            {row.map((cell,colIndex)=>(
                                <CellGrid
                                    updateCell={UpdateGridCell}
                                    cell={cell}
                                    rowIndex={rowIndex}
                                    colIndex={colIndex}
                                    isVisited={visitedCells.includes(cell)}
                                    isPath={shortestPath.includes(cell)}
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
