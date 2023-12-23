import {configureStore} from "@reduxjs/toolkit";
import popsReducer from "../reducers/pops/pops.reducer.ts";
import gridReducer from "../reducers/Grid/Grid.reducer.ts";
import gridAnimationReducer from "../reducers/gridAnimation/gridAnimation.reducer.ts";
import gridSettingsReducer from "../reducers/gridSettings/gridSettings.reducer.ts";

const store = configureStore({
    reducer:{
        pops:popsReducer,
        grid:gridReducer,
        gridAnimation:gridAnimationReducer,
        gridSettings:gridSettingsReducer,
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;