import React from 'react';
import Grid from "./components/Grid/Grid.Sketch.tsx";
import ActionsSketch from "./components/Actions/Actions.Sketch.tsx";
import AlgorithmsSketch from "./components/Algorithms/Algorithms.sketch.tsx";
import GridSettingSketch from "./components/GridSetting/GridSetting.sketch.tsx";
import {BiSolidStopwatch} from "react-icons/bi";
import {GiPathDistance, GiStopwatch} from "react-icons/gi";
import {IoTimer} from "react-icons/io5";
import {BsFillGrid3X3GapFill, BsUiChecksGrid} from "react-icons/bs";
import SelectBox from "../../components/SelectBox/SelectBox.tsx";


const Sketch:React.FC = () => {
    const gridRef= React.useRef<HTMLDivElement>(null);
    return (
        <div className="bg-base-300 pb-2 min-h-screen">
            <ActionsSketch />

            <div className="grid grid-cols-1 lg:grid-cols-5 px-2 gap-3">
                <div className="lg:col-span-4 row-span-1 flex flex-col lg:flex-row lg:flex-wrap  justify-center lg:justify-start gap-3 ">
                    <div className="flex flex-col lg:flex-row items-center  gap-3">
                        <div className="stats w-full lg:w-auto stats-vertical lg:stats-horizontal shadow">

                            <div className="stat">
                                <div className="stat-figure text-secondary text-2xl 2xl:text-3xl">
                                    <GiStopwatch />
                                </div>
                                <div className="stat-title text-sm">Animation Time</div>
                                <div className="stat-value text-2xl">5.02s</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary text-2xl 2xl:text-3xl">
                                    <IoTimer />
                                </div>
                                <div className="stat-title text-sm">Realtime Execution</div>
                                <div className="stat-value text-2xl">0.051s</div>
                            </div>
                        </div>
                        <div className="stats w-full lg:w-auto stats-vertical lg:stats-horizontal shadow">

                            <div className="stat">
                                <div className="stat-figure text-primary text-2xl 2xl:text-3xl">
                                    <BsFillGrid3X3GapFill />
                                </div>
                                <div className="stat-title text-sm">Total Cells</div>
                                <div className="stat-value text-2xl">1200</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-primary  text-2xl 2xl:text-3xl">
                                    <BsUiChecksGrid />
                                </div>
                                <div className="stat-title text-sm">Visited Cells</div>
                                <div className="stat-value text-2xl">896</div>
                            </div>
                            <div className="stat">
                                <div className="stat-figure text-primary text-2xl 2xl:text-3xl">
                                    <GiPathDistance />
                                </div>
                                <div className="stat-title text-sm">Distance</div>
                                <div className="stat-value text-2xl">150</div>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-base-100 rounded-box px-3 py-2 flex gap-3 items-center">
                        <SelectBox options={[{name:"None", key:"None"},{name:"DFS", key:"DFS"},{name:"BFS", key:"BFS"}]} title={"Maze Generator"} className="min-w-[17rem]" onChange={(value) => console.log(value)}/>
                    </div>
                </div>
                <div className="lg:col-span-1 row-span-4">
                    <AlgorithmsSketch />
                </div>
                <div ref={gridRef} className="h-[70vh] lg:h-auto lg:col-span-4 row-span-5 bg-base-100 p-3 rounded-box -order-1 lg:order-none">
                    <Grid />
                </div>
                <div className="lg:col-span-1 row-span-2">
                    <GridSettingSketch />
                </div>
            </div>
        </div>
    );
};

export default Sketch;
