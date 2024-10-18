import React, { FunctionComponent } from 'react';
import {PopsType} from "../../reducers/pops/pops.interface.ts";
import AbstractPop from "../AbstractPop/AbstractPop.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import classNames from "classnames";
import {closePop} from "../../reducers/pops/pops.reducer.ts";
import pdfFile from "./../../assets/ORC.pdf"

interface OwnProps {}

type Props = OwnProps;

const DocsModal: FunctionComponent<Props> = (props) => {
    const {type} = useSelector((state:RootState)=>state.pops)
    const menu = type == PopsType.DocsMenu;
    const dispatch:AppDispatch = useDispatch()

  return (
      <AbstractPop>
          <div
              className={classNames("h-screen top-0 right-0 fixed w-full menu-overlay z-50", {'menu-overlay-active': menu})}>

              <span
                  className={classNames("w-full h-full absolute bg-base-100 bg-opacity-50 transition-opacity duration-75 opacity-0", {"opacity-100": menu})}
                  onClick={() => {
                      dispatch(closePop())
                  }}/>

              <aside
                  className={classNames("w-full sm:w-[34rem] h-full  bg-base-300 flex flex-col text-base-content  ml-auto relative  menu-side hidden-scrollbar rounded-l-sm", {"menu-side-active": menu})}>
                  <object data={pdfFile} 	type="application/pdf"
                          className={"w-full h-full"} />

              </aside>

          </div>
      </AbstractPop>
  );
};

export default DocsModal;
