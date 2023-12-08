import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.scss'

const App:React.FC = ()=> {
  return (
      <BrowserRouter>

        <Routes>
          <Route index element={
            <>
              Home
            </>
          } />
        </Routes>
      </BrowserRouter>
  )
}

export default App
