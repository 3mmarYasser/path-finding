import React from 'react';
import {HiMiniPlay} from "react-icons/hi2";
import {FaPause, FaRegStopCircle} from "react-icons/fa";
import classNames from "classnames";
import {GrClear} from "react-icons/gr";

import {TbArrowBadgeUpFilled} from "react-icons/tb";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store";
import {setAnimationSpeed} from "../../../../reducers/gridAnimation/gridAnimation.reducer.ts";
import {setEnableSounds} from "../../../../reducers/gridSettings/gridSettings.reducer.ts";
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";

interface Props {
    visualize:()=>void;
}
const Actions:React.FC<Props> = ({visualize}) => {
    const {animationRunning,animationSpeed} = useSelector((state:RootState)=>state.gridAnimation);
    const {enableSounds} = useSelector((state:RootState)=>state.gridSettings);
    const dispatch:AppDispatch = useDispatch();
    return (
        <div className="w-full flex items-center rounded-b-3xl justify-between bg-base-100 p-3 md:p-5 mb-5">
            <div className="flex items-center gap-2">
                <Link to="/" className="btn btn-square btn-sm btn-ghost text-2xl">
                    <IoIosArrowBack />
                </Link>
                <h3 className="hidden md:block text-2xl font-bold">Home</h3>
            </div>
            <div className={" flex flex-wrap justify-center items-center   gap-3"}>
                <button
                    onClick={visualize}
                    className="btn btn-sm lg:btn-md hover:btn-success hover:btn-outline ">
                    <HiMiniPlay className={"text-success text-xl"} />
                    <span className="hidden md:block">Visualize</span>
                </button>
                <button className={classNames("btn btn-sm lg:btn-md hover:btn-success hover:btn-outline",{"btn-disabled":!animationRunning})}>
                    <FaPause  className={classNames("text-xl",{"text-secondary ":animationRunning})} />
                    <span className="hidden md:block">Pause</span>

                </button>
                <button className={classNames("btn btn-sm lg:btn-md hover:btn-success  hover:btn-outline",{"btn-disabled":!animationRunning})}>
                    <FaRegStopCircle  className={classNames("text-xl",{"text-error":animationRunning})} />
                    <span className="hidden md:block">Quit</span>
                </button>
                <button className="btn btn-sm lg:btn-md hover:btn-success hover:btn-outline">
                    <GrClear  className={"text-primary text-xl"} />
                    <span className="hidden md:block">Clear</span>
                </button>
            </div>
            <div className="flex items-center  mr-2 gap-3">
                <div className="tooltip tooltip-left flex items-center h-8" data-tip="Animation Speed">
                    <span className="text-lg text-base-content/50 mr-0.5 mt-auto">x</span>
                    <span className="speed-count countdown font-mono text-lg lg:text-2xl">
                        {/*@ts-ignore*/}
                        <span style={{"--value":animationSpeed}}/>
                    </span>
                    <div className="flex flex-col ml-1">

                        <button
                            className="text-primary p-0"
                            onClick={()=>{animationSpeed <6 &&  dispatch(setAnimationSpeed(animationSpeed +1))}}>
                            <TbArrowBadgeUpFilled />

                        </button>
                        <button
                            className="transform rotate-180 text-primary"
                            onClick={()=>{animationSpeed > 1 && dispatch(setAnimationSpeed(animationSpeed -1))}}>
                            <TbArrowBadgeUpFilled />

                        </button>
                    </div>
                </div>
                <div className="tooltip tooltip-bottom flex" data-tip="Sounds On">
                    <label className="swap ">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox"
                               onChange={()=>{
                                       dispatch(setEnableSounds(!enableSounds))
                               }}
                               checked={enableSounds} />

                        {/* volume on icon */}
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/></svg>

                        {/* volume off icon */}
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"/></svg>

                    </label>
                </div>

            </div>
        </div>
    );
};

export default Actions;
