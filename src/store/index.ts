import {configureStore} from "@reduxjs/toolkit";
import popsReducer from "../reducers/pops/pops.reducer.ts";

const store = configureStore({
    reducer:{
        pops:popsReducer
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;