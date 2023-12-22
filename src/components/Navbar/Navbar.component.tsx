import React, {Fragment} from 'react';
import {Link, NavLink} from "react-router-dom";
import classNames from "classnames";
import {GiPathDistance} from "react-icons/gi";
import {PiHouseSimpleLight} from "react-icons/pi";
import {SiThealgorithms} from "react-icons/si";
import {TbMenuOrder, TbMessageBolt} from "react-icons/tb";
import {Disclosure, Transition} from "@headlessui/react";
import {MdOutlineMenuOpen, MdOutlineSettingsSuggest} from "react-icons/md";
import {RxDropdownMenu} from "react-icons/rx";
import {CgMenuCake} from "react-icons/cg";
import {ImMenu3} from "react-icons/im";
import {BsMenuDown} from "react-icons/bs";

const Navbar = () => {

    return (
        <Disclosure as={Fragment}  >
            {({open})=>(
                <>
                    <nav className={classNames("navbar bg-base-100 border-b-2 border-b-base-content/20 z-10")}>
                        <div className="navbar-start">
                            <Link to={"/"} className="btn btn-ghost  rounded-btn">
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
                                <NavLink to={"/visualizer"} className={({isActive})=>classNames("cursor-pointer flex items-center  gap-1 justify-center", {
                                    "text-primary": isActive,
                                })}>
                                    Visualizer
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
                                <button className="btn btn-md btn-ghost btn-square text-2xl" >
                                    <MdOutlineSettingsSuggest />
                                </button>
                                <Disclosure.Button
                                    className={classNames("btn btn-md btn-ghost btn-square text-2xl md:hidden",{"-rotate-180 transform":open})}>
                                    <BsMenuDown />
                                </Disclosure.Button >
                            </div>
                        </div>
                    </nav>
                    {/*<div style={{height:(Number(document.querySelector("nav")?.offsetHeight))|| "66px"}}/>*/}
                    <Transition
                        show={open}
                        enter="transition-transform transform duration-300"
                        enterFrom="translate-y-[-100%]"
                        enterTo="translate-y-0"
                        leave="transition-transform transform duration-300"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-[-100%]"
                    >
                        <Disclosure.Panel as={"div"} className={"border-b-2 border-b-base-content/20 pt"}>
                            <ul className="menu bg-base-300 menu-lg divide-base-content/20 divide-y divide-dashed">
                                <li>
                                    <NavLink to={"/"} className={({isActive})=>classNames({"active":isActive})}>
                                        <PiHouseSimpleLight className={"text-xl"}/>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/visualizer"} className={({isActive})=>classNames({"active":isActive})}>
                                        <SiThealgorithms className={"text-xl"}/>
                                        Visualizer
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contact-us"} className={({isActive})=>classNames({"active":isActive})}>
                                        <TbMessageBolt className={"text-xl"}/>
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </Disclosure.Panel>
                    </Transition>
                </>

            )}
        </Disclosure>

    );
};

export default Navbar;
