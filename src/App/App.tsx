import React, {Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.scss'
import SketchPage from "../pages/Sketch/Sketch.page.tsx";
import Navbar from "../components/Navbar/Navbar.component.tsx";
import HomePage from "../pages/Home/Home.page.tsx";

const App:React.FC = ()=> {
  return (
      <BrowserRouter>
          <div  className="overflow-hidden min-h-screen"  >
              <Suspense fallback={<div>Loading...</div>}>
                  <main >
                      <Routes>
                          <Route index element={<HomePage/>} />
                          <Route path="/visualizer" element={<SketchPage/>} />
                      </Routes>
                  </main>
              </Suspense>
          </div>
      </BrowserRouter>
  )
}

export default App
