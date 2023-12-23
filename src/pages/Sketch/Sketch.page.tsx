import React, {useEffect} from 'react';
import Grid from "./components/Grid/Grid.Sketch.tsx";
import ActionsSketch from "./components/Actions/Actions.Sketch.tsx";
import AlgorithmsSketch from "./components/Algorithms/Algorithms.sketch.tsx";
import GridSettingSketch from "./components/GridSetting/GridSetting.sketch.tsx";
import {BiSolidStopwatch} from "react-icons/bi";
import {GiPathDistance, GiStopwatch} from "react-icons/gi";
import {IoTimer} from "react-icons/io5";
import {BsFillGrid3X3GapFill, BsUiChecksGrid} from "react-icons/bs";
import SelectBox from "../../components/SelectBox/SelectBox.tsx";
import usePathfindingAlgorithm from "../../hooks/usePathfindingAlgorithm/usePathfindingAlgorithm.hook.ts";
import {resetGrid} from "../../reducers/Grid/Grid.reducer.ts";
import {AppDispatch} from "../../store";
import {useDispatch} from "react-redux";
import StateSketch from "./components/State/State.sketch.tsx";
import {setGridHeight, setGridWidth} from "../../reducers/gridSettings/gridSettings.reducer.ts";


const Sketch:React.FC = () => {
    const gridRef= React.useRef<HTMLDivElement>(null);
    const [GetPath] = usePathfindingAlgorithm();
    const dispatch:AppDispatch = useDispatch();
    useEffect(() => {
        const updateDimensions = () => {
            dispatch(setGridWidth(gridRef.current?.clientWidth))
            dispatch(setGridHeight(gridRef.current?.clientHeight))
        }
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [gridRef]);
    return (
        <div className="bg-base-300 pb-2 min-h-screen">
            <ActionsSketch visualize={()=>{
                GetPath()
            }}/>

            <div className="grid grid-cols-1 lg:grid-cols-5 px-2 gap-3">

                <div className="lg:col-span-4 row-span-1 flex flex-col lg:flex-row lg:flex-wrap  justify-center lg:justify-start gap-3 ">
                    <StateSketch/>
                    <div className=" bg-base-100 rounded-box px-3 py-2 flex gap-3 items-center ">
                        <SelectBox options={[{name:"None", key:"None"},{name:"DFS", key:"DFS"},{name:"BFS", key:"BFS"}]} title={"Maze Generator"}    onChange={(value) => console.log(value)}/>
                    </div>
                </div>
                <div className="lg:col-span-1 row-span-4">
                    <AlgorithmsSketch />
                </div>
                <div ref={gridRef} className="h-[70vh] lg:h-auto lg:col-span-4 row-span-5 bg-base-content/5 p-3 rounded-box -order-1 lg:order-none">
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
