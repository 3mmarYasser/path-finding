import React, {Suspense} from 'react';
import Navbar from "../../../../components/Navbar/Navbar.component.tsx";
import {Canvas} from "@react-three/fiber";
import {MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";
import {getColorByVar} from "../../../../../utils/color.helper.ts";
import Moon from "./../../../../assets/images/moon.png"

const Hero:React.FC = () => {
    console.log(`rgb(${getColorByVar("--p")})`);
    return (
        <div className="h-screen snap-center flex flex-col items-center justify-between">
            <Navbar/>
            <div className="h-full flex  flex-col xl:flex-row w-full justify-center items-center xl:max-w-7xl xl:justify-between">
                <div className="flex-1 xl:flex-[2]  items-center xl:items-start xl:flex-2 flex flex-col justify-center gap-3 xl:gap-6">
                    <h1 className="text-4xl xl:text-7xl text-center xl:text-start text-base-content font-bold">Path. Finding. Visualizer.</h1>
                    <div className="flex items-center gap-3">
                        <span className="w-8 h-2 rounded-full bg-base-content/50"/>
                        <h4 className="text-lg xl:text-2xl text-primary font-bold">What it Dose</h4>
                    </div>
                    <p className="text-base-content/90 text-xl text-center xl:text-start">
                        visually illustrates how algorithms navigate a grid to find the shortest path from a start to an end point.
                    </p>
                </div>
                <div className="flex-1 xl:flex-[3] relative h-full w-full mx-5 xl:p-0">
                    <Canvas
                        style={{width:"100%" ,height:"100%"}}
                        camera={{fov:25,position:[5,5,5]}}>
                        <Suspense fallback={null}>
                            <OrbitControls enableZoom={false} />
                            <ambientLight intensity={1} />
                            <directionalLight position={[3, 2, 1]} />
                            <Sphere args={[1, 100, 200]} scale={1.4}>
                                <MeshDistortMaterial
                                    color="#3d1c56"
                                    attach="material"
                                    distort={0.5}
                                    speed={2}
                                />
                            </Sphere>
                        </Suspense>
                    </Canvas>
                    <img
                        src={Moon}
                        alt=""
                        draggable={false}
                        onContextMenu={(e)=>e.preventDefault()}
                        className="absolute max-w-2xl top-0 left-0 right-0 bottom-0 m-auto w-full h-full object-contain xl:w-auto xl:h-auto xl:rounded-3xl img-hero"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
