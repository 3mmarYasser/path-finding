import React from 'react';
import {GiPathDistance, GiStopwatch} from "react-icons/gi";
import {IoTimer} from "react-icons/io5";
import {BsFillGrid3X3GapFill, BsUiChecksGrid} from "react-icons/bs";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";

const State:React.FC = () => {
    const {gridData,visitedCells,shortestPath} = useSelector((state:RootState)=>state.grid);
    const {realTimeExecution,animationTime} = useSelector((state:RootState)=>state.gridAnimation);

    return (
        <div className="flex flex-col lg:flex-row items-center  gap-3">
            <div className="stats w-full lg:w-auto stats-vertical lg:stats-horizontal shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary text-2xl 2xl:text-3xl">
                        <GiStopwatch />
                    </div>
                    <div className="stat-title text-sm">Animation Time</div>
                    <div className="stat-value text-2xl">{animationTime.toFixed(4)}s</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary text-2xl 2xl:text-3xl">
                        <IoTimer />
                    </div>
                    <div className="stat-title text-sm">Realtime Execution</div>
                    <div className="stat-value text-2xl">{realTimeExecution.toFixed(4)}s</div>
                </div>
            </div>
            <div className="stats w-full lg:w-auto stats-vertical lg:stats-horizontal shadow">

                <div className="stat">
                    <div className="stat-figure text-primary text-2xl 2xl:text-3xl">
                        <BsFillGrid3X3GapFill />
                    </div>
                    <div className="stat-title text-sm">Total Cells</div>
                    <div className="stat-value text-2xl">{gridData.length * gridData[0].length}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-primary  text-2xl 2xl:text-3xl">
                        <BsUiChecksGrid />
                    </div>
                    <div className="stat-title text-sm">Visited Cells</div>
                    <div className="stat-value text-2xl">{visitedCells.length}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-primary text-2xl 2xl:text-3xl">
                        <GiPathDistance />
                    </div>
                    <div className="stat-title text-sm">Distance</div>
                    <div className="stat-value text-2xl">{shortestPath.length}</div>
                </div>
            </div>
        </div>

    );
};

export default State;
