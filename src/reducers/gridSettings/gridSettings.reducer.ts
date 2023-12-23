import {createSlice} from "@reduxjs/toolkit";
import {GridSettings} from "./gridSettings.interface.ts";

const gridSettingsReducer = createSlice({
    name: 'gridSettings',
    initialState:<GridSettings> {
        gridWidth:1000,
        gridHeight:600,
        cellSize:20,
        enableBorders:true,
        enableDiagonals:true,
        enableSounds:false
    },
    reducers:{
        setGridWidth:(state,action)=>{
            state.gridWidth = action.payload;
        },
        setGridHeight:(state,action)=>{
            state.gridHeight = action.payload;
        },
        setCellSize:(state,action)=>{
            state.cellSize = action.payload;
        },
        setEnableBorders:(state,action)=>{
            state.enableBorders = action.payload;
        },
        setEnableDiagonals:(state,action)=>{
            state.enableDiagonals = action.payload;
        },
        setEnableSounds:(state,action)=>{
            state.enableSounds = action.payload;
        }
    }
})
export const {setGridWidth, setGridHeight, setCellSize, setEnableBorders, setEnableDiagonals,setEnableSounds} = gridSettingsReducer.actions;
export default gridSettingsReducer.reducer;