import React from 'react';
import {Link, NavLink} from "react-router-dom";
import classNames from "classnames";
import {GiPathDistance} from "react-icons/gi";

const Navbar = () => {

    return (
        <nav className={classNames("navbar  mx-auto max-w-7xl z-10")}>
            <div className="navbar-start">
                <Link to={"/"} className="btn btn-ghost  rounded-btn ">
                    <GiPathDistance className={"text-4xl text-primary "}/>
                    <h1 className=" text-center pixel-font uppercase">
                        <span className={"text-4xl font-bold"}>PATH</span>
                        <span className={"text-2xl text-primary"}>FINDING</span>
                    </h1>
                </Link>
                <div className="ml-5 gap-8 text-lg font-bold items-center rounded-btn py-1 px-1  hidden md:flex pixel-font">
                    <NavLink to={"/"} className={({isActive})=>classNames("cursor-pointer flex items-center  gap-1 justify-center", {
                        "text-primary": isActive,
                    })}>
                        Home
                    </NavLink>
                    <NavLink to={"/Overview"} className={({isActive})=>classNames("cursor-pointer flex items-center  gap-1 justify-center", {
                        "text-primary": isActive,
                    })}>
                        Overview
                    </NavLink>

                    <NavLink to={"/contact-us"} className={({isActive})=>classNames("cursor-pointer flex items-center  gap-1 justify-center", {
                        "text-primary": isActive,
                    })}>
                        Contact Us
                    </NavLink>

                </div>

            </div>

            <div className="navbar-end">

                <div className="flex items-center  gap-2">
                    <Link  to={"/visualizer"}
                          aria-label={"Visualizer"}
                          title={"Visualizer"}
                          className={classNames("btn btn-md glass")}>
                        Visualizer
                    </Link >
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
