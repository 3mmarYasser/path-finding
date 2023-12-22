import React from 'react';
import {HiMiniPlay} from "react-icons/hi2";
import {FaPause, FaRegStopCircle} from "react-icons/fa";
import classNames from "classnames";
import {GrClear} from "react-icons/gr";

const Actions = () => {
    return (
        <div className="w-full flex items-center rounded-b-3xl justify-between bg-base-100 p-5 mb-5 ">
            <h3 className="hidden md:block text-2xl font-bold">Actions</h3>
            <div className={" flex flex-wrap justify-center items-center   gap-3"}>
                <button className="btn hover:btn-success hover:btn-outline">
                    <HiMiniPlay className={"text-success text-xl"} />
                    <span className="hidden md:block">Visualize</span>
                </button>
                <button className="btn hover:btn-success  hover:btn-outline ">
                    <FaPause  className={classNames("text-xl",{"text-secondary ":true})} />
                    <span className="hidden md:block">Pause</span>

                </button>
                <button className="btn hover:btn-success  hover:btn-outline">
                    <FaRegStopCircle  className={classNames("text-xl",{"text-error":true})} />
                    <span className="hidden md:block">Quit</span>
                </button>
                <button className="btn hover:btn-success hover:btn-outline">
                    <GrClear  className={"text-primary text-xl"} />
                    <span className="hidden md:block">Clear</span>
                </button>
            </div>
            <label className="cursor-pointer label gap-2">
                <span className="label-text hidden md:block">Enable Animation</span>
                <input type="checkbox" className="toggle toggle-primary" defaultChecked={true} />
            </label>
        </div>
    );
};

export default Actions;
