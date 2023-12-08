import {createSlice} from "@reduxjs/toolkit";
import {Pops, PopsType} from "./pops.interface.ts";

const popsReducer = createSlice({
    name :"pops",
    initialState:<Pops>{
        type: PopsType.Undefined,
        data:null
    },
    reducers:{
        openPop: (state ,action)=>{
            state.type = action.payload.type;
            state.data = action.payload.data;
        },
        closePop :(state )=>{
            state.type = PopsType.Undefined;
            state.data = null;
        }
    }
})
export const  {openPop,closePop} = popsReducer.actions;
export default popsReducer.reducer;