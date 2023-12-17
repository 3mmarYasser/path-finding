import React from 'react';
import {BsHouse} from "react-icons/bs";
import {Link, NavLink} from "react-router-dom";
import classNames from "classnames";
import {GiPathDistance} from "react-icons/gi";
import {FaHouse} from "react-icons/fa6";
import {PiHouseSimpleLight} from "react-icons/pi";
import {SiThealgorithms} from "react-icons/si";
import {TbMessageBolt} from "react-icons/tb";

const Navbar = () => {
    return (
            <nav className="navbar bg-base-100 border-b-2 border-b-base-content/30 fixed">
                <div className="navbar-start">
                    <Link to={"/"} className="btn btn-ghost  rounded-btn">
                        <GiPathDistance className={"text-4xl text-primary "}/>
                        <h1 className=" text-center pixel-font uppercase">
                            <span className={"text-4xl font-bold"}>PATH</span>
                            <span className={"text-2xl text-primary"}>FINDING</span>
                        </h1>
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="gap-8 text-lg font-bold items-center rounded-btn py-1 px-1 mr-5 hidden md:flex pixel-font">
                        <NavLink to={"/"} className={({isActive})=>classNames("cursor-pointer flex items-center  gap-1 justify-center", {
                            "text-primary": isActive,
                        })}>
                            <PiHouseSimpleLight className={"text-xl"}/>
                            Home
                        </NavLink>
                        <NavLink to={"/visualizer"} className={({isActive})=>classNames("cursor-pointer flex items-center  gap-1 justify-center", {
                            "text-primary": isActive,
                        })}>
                            <SiThealgorithms className={"text-xl"}/>
                            Visualizer
                        </NavLink>
                        <NavLink to={"/contact-us"} className={({isActive})=>classNames("cursor-pointer flex items-center  gap-1 justify-center", {
                            "text-primary": isActive,
                        })}>
                            <TbMessageBolt className={"text-xl"}/>
                            Contact Us
                        </NavLink>

                    </div>
                </div>
            </nav>

    );
};

export default Navbar;
