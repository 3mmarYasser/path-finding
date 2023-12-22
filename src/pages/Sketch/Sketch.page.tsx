import React from 'react';
import Grid from "./components/Grid/Grid.Sketch.tsx";
import ActionsSketch from "./components/Actions/Actions.Sketch.tsx";
import AlgorithmsSketch from "./components/Algorithms/Algorithms.sketch.tsx";
import GridSettingSketch from "./components/GridSetting/GridSetting.sketch.tsx";


const Sketch:React.FC = () => {

    return (
        <div className="bg-base-300">
            <ActionsSketch/>
            <div className="grid grid-cols-5  px-2 gap-3">
                <div className="bg-base-100 rounded-box col-span-4 row-span-1 p-2 text-center text-xl font-bold">
                    Pathfinding Visualizer
                </div>
                <div className="col-span-1 row-span-4"><AlgorithmsSketch/></div>
                <div className="col-span-4 row-span-5 bg-base-100 p-3 rounded-box"> <Grid/></div>
                <div className="col-span-1 row-span-2"><GridSettingSketch/></div>
            </div>
        </div>
    );
};

export default Sketch;
