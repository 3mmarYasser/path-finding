import React, {Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.scss'
import SketchPage from "../pages/Sketch/Sketch.page.tsx";
import HomePage from "../pages/Home/Home.page.tsx";
import {MdSettingsSuggest} from "react-icons/md";
import ThemeModal from "../components/ThemeModal/ThemeModal.component.tsx";
import {AppDispatch} from "../store";
import {useDispatch} from "react-redux";
import {openPop} from "../reducers/pops/pops.reducer.ts";
import {Pops, PopsType} from "../reducers/pops/pops.interface.ts";
import HomeV2Page from "../pages/Home/HomeV2.page.tsx";

const App:React.FC = ()=> {
    const dispatch:AppDispatch = useDispatch();
  return (
      <BrowserRouter>
          <div  className="overflow-hidden min-h-screen">
              <Suspense fallback={<div>Loading...</div>}>
                  <main className="relative">
                      <button
                          onClick={()=>dispatch(openPop({type:PopsType.ThemesMenu ,data:null}as Pops))}
                          className="btn btn-square   bottom-1/2 -right-1 fixed z-10 text-2xl">
                          <MdSettingsSuggest />
                      </button>
                      <ThemeModal/>
                      <Routes>
                          <Route index element={<HomeV2Page/>} />
                          <Route path="/visualizer" element={<SketchPage/>} />
                      </Routes>
                  </main>
              </Suspense>
          </div>
      </BrowserRouter>
  )
}

export default App
