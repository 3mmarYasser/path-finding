import React from 'react';
import {HiViewGridAdd} from "react-icons/hi";

const GridSetting = () => {
    return (
        <div className=" overflow-hidden rounded-box bg-base-100 w-full">
            <div className="w-full border-b-2 border-b-base-content/10 flex items-center justify-between px-3 py-4">
                <h4 className="text-lg font-bold">Grid Settings</h4>
                <HiViewGridAdd  className="text-2xl text-base-content/80" />


            </div>
            <div className="w-full my-5 px-2 flex flex-col gap-5">
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-bold">Cell Size</span>
                        <span className="label-text-alt">150px</span>
                    </div>
                    <input type="range" min={0} max="100" defaultValue="40" className="range  range-sm range-primary" />
                </label>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-bold">Width</span>
                        <span className="label-text-alt">800px</span>
                    </div>
                    <input type="range" min={0} max="100" defaultValue="40" className="range  range-sm " />
                </label>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-bold">Height</span>
                        <span className="label-text-alt">1200px</span>
                    </div>
                    <input type="range" min={0} max="100" defaultValue="40" className="range  range-sm " />
                </label>

                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text text-lg">Enable Borders</span>
                        <input type="checkbox" defaultChecked={true} className="checkbox checkbox-primary" />
                    </label>
                </div>

            </div>

        </div>

    );
};

export default GridSetting;
