// Grid.tsx
import React, {useCallback, useEffect, useState} from 'react';
import CellGrid from './components/Cell/Cell.grid.sketch.tsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Cell, CellType } from '../../../../reducers/Grid/Grid.interface.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store';
import { setEndCell, setGrid, setStartCell } from '../../../../reducers/Grid/Grid.reducer.ts';
import classNames from "classnames";

const generateGrid = (rows: number, cols: number): Cell[][] => {
    return Array.from({ length: rows }, (_, rowIndex) =>
        Array.from({ length: cols }, (_, colIndex) => ({
            id: `cell-r_${rowIndex}-c_${colIndex}`,
            row: rowIndex,
            col: colIndex,
            type:
                rowIndex === 0 && colIndex === 0
                    ? CellType.START
                    : rowIndex === rows - 6 && colIndex === cols - 5
                        ? CellType.END
                        : CellType.EMPTY,
        }))
    );
};

const Grid: React.FC = () => {
    const { gridData, visitedCells, shortestPath } = useSelector(
        (state: RootState) => state.grid
    );
    const {cellSize ,gridHeight ,gridWidth,enableBorders} = useSelector((state: RootState) => state.gridSettings);
    const dispatch: AppDispatch = useDispatch();
    const [isDrawing, setIsDrawing] = useState(false);

    const setGridDataFC = useCallback(() => {
        const grid = generateGrid(Math.ceil(gridHeight/cellSize), Math.ceil(gridWidth/cellSize));
        const startCell = grid[0][0];
        const endCell = grid[grid.length - 6][grid[0].length - 5];
        dispatch(setGrid(grid));
        dispatch(setStartCell(startCell));
        dispatch(setEndCell(endCell));

    },[cellSize, gridHeight, gridWidth, dispatch]);

    useEffect(() => {
        setGridDataFC();
    }, [cellSize, gridHeight, gridWidth]);

    const handleMouseDown = () => {
        setIsDrawing(true);
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
    };

    const UpdateGridCell = (rowIndex: number, colIndex: number, newCell: Cell) => {
        dispatch(
            setGrid(
                gridData.map((row, i) =>
                    i === rowIndex
                        ? row.map((cell, j) => (j === colIndex ? { ...cell, ...newCell } : cell))
                        : row
                )
            )
        );
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="w-full h-full shadow-2xl ">
                <table
                    className={classNames("w-full h-full grid-container ",{"enabled-borders":enableBorders})}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    <tbody>
                    {gridData.map((row, rowIndex) => (
                        <tr key={`R_${rowIndex}`}>
                            {row.map((cell, colIndex) => (
                                <CellGrid
                                    updateCell={UpdateGridCell}
                                    cell={cell}
                                    rowIndex={rowIndex}
                                    colIndex={colIndex}
                                    isVisited={visitedCells.includes(cell)}
                                    isPath={shortestPath.includes(cell)}
                                    isDrawing={isDrawing}
                                    onMouseMove={() => { }}
                                    key={`cell-${rowIndex}-${colIndex}-${cell.type}`}
                                />
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
