import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.scss'
import SketchPage from "../pages/Sketch/Sketch.page.tsx";

const App:React.FC = ()=> {
  return (
      <BrowserRouter>
          <div  className="overflow-hidden min-h-screen"  >
              <Routes>
                  <Route index element={
                      <SketchPage/>
                  } />
              </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App
