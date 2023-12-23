import {createSlice} from "@reduxjs/toolkit";
import { AlgorithmType, GridData} from "./Grid.interface.ts";

const gridReducer = createSlice({
    name: 'grid',
    initialState:<GridData> {
        gridData:[[]],
        startCell:null,
        endCell:null,
        visitedCells:[],
        shortestPath:[],
        algorithm:AlgorithmType.AStar
        },
    reducers: {
        setGrid: (state, action) => {
            state.gridData = action.payload;
        },
        setStartCell: (state, action) => {
            state.startCell = action.payload;
        },
        setEndCell: (state, action) => {
            state.endCell = action.payload;
        },
        setVisitedCells: (state, action) => {
            state.visitedCells = action.payload;
        },
        setShortestPath: (state, action) => {
            state.shortestPath = action.payload;
        },
        setAlgorithm: (state, action) => {
            state.algorithm = action.payload;
        },
        resetGrid: (state) => {
            state.visitedCells = [];
            state.shortestPath = [];
        }
    }
});
export const {setGrid, setStartCell, setEndCell, setVisitedCells, setShortestPath,setAlgorithm, resetGrid} = gridReducer.actions;
export default gridReducer.reducer;