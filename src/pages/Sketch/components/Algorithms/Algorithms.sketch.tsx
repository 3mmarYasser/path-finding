import React, {useEffect, useState} from 'react';
import {SiThealgorithms} from "react-icons/si";
import {RadioGroup} from "@headlessui/react";
import classNames from "classnames";
import {PiFlagFill} from "react-icons/pi";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store";
import {AlgorithmType} from "../../../../reducers/Grid/Grid.interface.ts";
import {setAlgorithm} from "../../../../reducers/Grid/Grid.reducer.ts";
const algorithms = [
    {
        name: 'Dijkstra',
        type:AlgorithmType.DIJKSTRA,
        desc:"Optimal path-finder in weighted graphs."
    },
    {
        name: 'A*',
        type:AlgorithmType.AStar,
        desc:"optimally navigates graphs using heuristics."
    },
    {
        name: 'Depth First Search',
        type:AlgorithmType.DFS,
        desc:"Deep exploration for in-depth pathfinding."
    },
    {
        name: 'Breadth FirstSearch',
        type:AlgorithmType.BFS,
        desc:"Methodical level-by-level exploration for efficient path discovery."
    }
]
const Algorithms = () => {
    const {algorithm} = useSelector((state:RootState)=>state.grid);
    const [selected, setSelected] = useState(algorithms.find((algo)=>algo.type===algorithm)||algorithms[0])
    const dispatch:AppDispatch = useDispatch();
    useEffect(()=>{
        dispatch(setAlgorithm(selected.type))
    },[selected])
    return (
        <div className=" overflow-hidden rounded-box bg-base-100 w-full ">
            <div className="w-full border-b-2 border-b-base-content/10 flex items-center justify-between px-3 py-4">
                <h4 className="text-lg font-bold">Algorithms</h4>
                <SiThealgorithms className="text-2xl text-base-content/80" />
            </div>
            <div className="w-full my-5 px-2">
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">Algorithms List</RadioGroup.Label>

                    <div className="space-y-2">
                        {algorithms.map((plan) => (

                            <RadioGroup.Option
                                key={plan.name}
                                value={plan}
                                className={({ active, checked }) =>
                                    classNames("relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
                                        ,{
                                            "ring-2 ring-primary/60 ring-offset-2 ring-offset-base-100": active,
                                            "bg-primary text-primary-content": checked,
                                            "bg-base-300 text-base-content hover:bg-primary/50 hover:text-primary-content": !checked,

                                        })
                                }

                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={classNames(
                                                            "font-bold text-md",
                                                            {"text-base-content":!checked},
                                                            {"text-primary-content":checked}
                                                        )}
                                                    >
                                                        {plan.name}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={
                                                            classNames("inline text-sm",{
                                                                "text-base-content/70": !checked,
                                                                "text-base-content/90": checked,
                                                            })}
                                                    >
                                                            <span>
                                                                {plan.desc}
                                                            </span>
                                                    </RadioGroup.Description>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="shrink-0 text-success">
                                                    <PiFlagFill    className="text-2xl" />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    );
};

export default Algorithms;
