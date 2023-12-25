import React from 'react';
import MobilMap from "./../../../../assets/images/mobile-map.png"
import {Link} from "react-router-dom";
const Info:React.FC = () => {
    return (
        <div className="h-screen snap-center flex flex-col items-center justify-center">
            <div className="h-full flex  flex-col xl:flex-row w-full justify-center items-center xl:max-w-7xl xl:justify-between gap-y-5 xl:gap-7">
                <div className="flex-1 xl:flex-[2] relative  w-full h-full p-10 xl:p-0">
                    <img
                        src={MobilMap}
                        alt=""
                        draggable={false}
                        onContextMenu={(e)=>e.preventDefault()}
                        className="xl:absolute top-0 left-0 right-0 bottom-0 m-auto  w-full h-full object-contain xl:w-auto xl:h-auto "
                    />
                </div>
                <div className="flex-1 xl:flex-[3] items-center xl:items-start xl:flex-2 flex flex-col justify-center gap-6">
                    <h1 className="text-4xl xl:text-7xl text-center xl:text-start text-base-content font-bold"> Pathfinding Playground</h1>
                    <div className="flex items-center gap-3">
                        <span className="w-8 h-2 rounded-full bg-base-content/50"/>
                        <h4 className="text-lg xl:text-2xl text-primary font-bold">Algorithmic Maze Mastery</h4>
                    </div>
                    <p className="text-sm text-base-content/90 xl:text-xl text-center xl:text-start">
                        Unlock the power of pathfinding algorithms in this interactive playground.
                        From interview preparation to real-world applications, visualize and comprehend optimal routes effortlessly.
                        Perfect for self-learning and hands-on exploration of algorithmic problem-solving.
                    </p>
                    <Link to="/visualizer" className="text-2xl xl:text-5xl font-bold cursor-pointer  text-stroke"  data-text={"Try It Know"}>Try It Know</Link>

                </div>

            </div>
        </div>
    );
};

export default Info;
