import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.scss'
import SketchPage from "../pages/Sketch/Sketch.page.tsx";

const App:React.FC = ()=> {
  return (
      <BrowserRouter>

        <Routes>
          <Route index element={
              <SketchPage/>
          } />
        </Routes>
      </BrowserRouter>
  )
}

export default App
