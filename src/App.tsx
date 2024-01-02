import React from 'react';
import './App.css';
import {DigitalClock} from "./Components/digitalClock/DigitalClock";
import {AnalogClock} from "./Components/analogClock/AnalogClock";
import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./Components/layout/Layout";
import {HomePage} from "./Components/homePage/HomePage";


function App() {

    return (
        <div className="App">

            {/*//OLD syntax*/}
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'digital'} element={<DigitalClock/>}/>
                    <Route path={'analog'} element={<AnalogClock/>}/>
                    <Route path={'404'} element={<div>404: Page not found</div>}/>
                    <Route path={'*'} element={<Navigate to={'404'}/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
