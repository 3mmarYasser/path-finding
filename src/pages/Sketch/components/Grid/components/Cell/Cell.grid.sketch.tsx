// CellGrid.tsx
import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import { Cell, CellType } from "../../../../../../reducers/Grid/Grid.interface.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../../store";
import sound from "../../../../../../assets/sounds/the-notification-email-143029.mp3";

interface Props {
    cell: Cell;
    rowIndex: number;
    colIndex: number;
    updateCell: (rowIndex: number, colIndex: number, newCell: Cell) => void;
    isVisited?: boolean;
    isPath?: boolean;
    isDrawing: boolean;
    onMouseMove: () => void;
}

const CellGrid: React.FC<Props> = ({ cell, colIndex, rowIndex, updateCell, isVisited = false, isPath = false, isDrawing, onMouseMove }) => {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const {enableSounds} = useSelector((state: RootState) => state.gridSettings);
    const {animationRunning} = useSelector((state: RootState) => state.gridAnimation);
    useEffect(()=>{
        if (enableSounds && isPath && animationRunning) {
            const audio = new Audio(sound);
            audio.play();
        }
    },[enableSounds ,isPath ,animationRunning])
    const handleCellClick = () => {
        if (!isMouseDown && !animationRunning) {
            updateCell(rowIndex, colIndex, {
                ...cell,
                type: cell.type === CellType.WALL ? CellType.EMPTY : CellType.WALL,
            });
        }
    };

    const handleMouseDown = () => {
        setIsMouseDown(true);
    };

    const handleMouseEnter = () => {
        if ((isMouseDown || isDrawing) && cell.type === CellType.EMPTY && !animationRunning) {
            updateCell(rowIndex, colIndex, {
                ...cell,
                type: CellType.WALL,
            });
        }
        onMouseMove();
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    return (
        <td
            id={`cell-${rowIndex}-${colIndex}`}
            onClick={handleCellClick}
            onMouseDown={handleMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseUp={handleMouseUp}
            className={classNames('cell', cell.type,
                { visited: isVisited },
                { path: isPath },
                {"!cursor-auto":animationRunning}
            )}
        ></td>
    );
};

export default React.memo(CellGrid);
