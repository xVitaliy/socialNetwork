import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from "./Redux/State";
import { BrowserRouter } from "react-router-dom";
import { addPost } from "./Redux/State";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App addPost={addPost} state={state}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

