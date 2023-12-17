import React from 'react';
import Grid from "./components/Grid/Grid.Sketch.tsx";
import {HiMiniPlay} from "react-icons/hi2";

const Sketch:React.FC = () => {
    return (
        <div>
            <div className={"w-full bg-base-200 p-5 flex items-center rounded-b-3xl mb-5"}>
                <button className="btn hover:btn-success hover:btn-outline">
                    <HiMiniPlay className={"text-success text-xl"} />
                    Visualize
                </button>
            </div>
            <Grid/>
        </div>
    );
};

export default Sketch;
