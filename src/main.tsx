import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.tsx'
import {Provider} from "react-redux";
import store from "./store";
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
 ,
)
