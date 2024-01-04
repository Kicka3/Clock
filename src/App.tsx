import React from 'react';
import './App.css';
import {DigitalClock} from "./Components/digitalClock/DigitalClock";
import {AnalogClock} from "./Components/analogClock/AnalogClock";
import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./Components/layout/Layout";
import {HomePage} from "./Components/homePage/HomePage";
import {CounterPage} from "./Components/counterSrc/CounterPage";

//1 баг: закрывается бургер-меню, при выборе пункта.
//2 баг: начальная страница не homePage, а 404 (с пустым экраном)
// Добавить счётчик в проект (совместить)

function App() {

    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/digital'} element={<DigitalClock/>}/>
                    <Route path={'/analog'} element={<AnalogClock/>}/>
                    <Route path={'/counter'} element={<CounterPage/>}/>
                    <Route path={'404'} element={<div>404: Page not found</div>}/>
                    <Route path={'*'} element={<Navigate to={'404'}/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
