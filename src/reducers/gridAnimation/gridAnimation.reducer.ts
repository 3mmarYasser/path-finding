import {createSlice} from "@reduxjs/toolkit";
import {GridAnimation} from "./gridAnimation.interface.ts";

const gridAnimationReducer = createSlice({
    name: 'gridAnimation',
    initialState:<GridAnimation> {
        realTimeExecution: 0.00,
        animationTime: 0.00,
        animationSpeed: 2,
        animationRunning: false,
        enableAnimation: false,
    },
    reducers: {
        setRealTimeExecution: (state, action) => {
            state.realTimeExecution = action.payload;
        },
        setAnimationTime: (state, action) => {
            state.animationTime = action.payload;
        },
        setAnimationSpeed: (state, action) => {
            state.animationSpeed = action.payload;
        },
        setAnimationRunning: (state, action) => {
            state.animationRunning = action.payload;
        },
        setEnableAnimation: (state, action) => {
            state.enableAnimation = action.payload;
        },
    }
});
export const {setRealTimeExecution, setAnimationTime, setAnimationSpeed, setAnimationRunning, setEnableAnimation} = gridAnimationReducer.actions;
export default gridAnimationReducer.reducer;