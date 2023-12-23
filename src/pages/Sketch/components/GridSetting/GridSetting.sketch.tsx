import React from 'react';
import {HiViewGridAdd} from "react-icons/hi";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store";
import {
    setCellSize,
    setEnableBorders,
    setEnableDiagonals
} from "../../../../reducers/gridSettings/gridSettings.reducer.ts";
import {setEnableAnimation} from "../../../../reducers/gridAnimation/gridAnimation.reducer.ts";

const GridSetting = () => {
    const {enableDiagonals,enableBorders ,cellSize} = useSelector((state:RootState)=>state.gridSettings);
    const {enableAnimation} = useSelector((state:RootState)=>state.gridAnimation);
    const dispatch:AppDispatch = useDispatch();
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
                        <span className="label-text-alt">{cellSize}px</span>
                    </div>
                    <input type="range" min={10} max={50} value={cellSize}
                           onChange={(e)=>dispatch(setCellSize(parseInt(e.target.value)))}
                           step={1}
                           className="range  range-sm range-primary" />
                </label>



                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text text-lg">Enable Borders</span>
                        <input type="checkbox" checked={enableBorders}
                               onChange={()=>{
                                   dispatch(setEnableBorders(!enableBorders))
                               }} className="checkbox checkbox-primary" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text text-lg">Enable Animation</span>
                        <input type="checkbox"
                               onChange={()=>{
                                   dispatch(setEnableAnimation(!enableAnimation))
                               }}
                               className="toggle toggle-primary"
                               checked={enableAnimation} />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text text-lg">Enable Diagonal</span>
                        <input type="checkbox" className="toggle " checked={enableDiagonals}
                               onChange={()=>{
                                   dispatch(setEnableDiagonals(!enableDiagonals))
                               }}
                        />
                    </label>
                </div>

            </div>

        </div>

    );
};

export default GridSetting;
