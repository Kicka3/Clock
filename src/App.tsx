import React from 'react';
import './App.css';
import {DigitalClock} from "./Components/digitalClock/DigitalClock";
import {AnalogClock} from "./Components/analogClock/AnalogClock";
import {createBrowserRouter, Navigate, Route, RouterProvider, Routes} from "react-router-dom";
import {Navbar} from "./Components/navBar/Navbar";


function App() {

    return (
        <div className="App">
            <Navbar/>
            {/*<DigitalClock/>*/}
            <AnalogClock/>

            {/*<div>*/}
            {/*    <RouterProvider router={router}/>*/}
            {/*</div>*/}


            {/*//OLD syntax*/}
            {/*<Routes>*/}
            {/*    <Route path={'/digital'} element={<DigitalClock/>}/>*/}
            {/*    <Route path={'/analog'} element={<AnalogClock/>}/>*/}
            {/*    <Route path={'/404'} element={<div>404: Page not found</div>}/>*/}
            {/*    <Route path={'*'} element={<Navigate to={'/404'}/>}/>*/}
            {/*</Routes>*/}

        </div>
    );
}

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />,
//         children: [
//             {
//                 path: '/digital',
//                 element: <DigitalClock/>,
//             },
//             {
//                 path: '/analog',
//                 element: <AnalogClock/>
//             },
//             {
//                 path: '/404',
//                 element: <div>error 404</div>
//             },
//             {
//                 path: '/*',
//                 element: <Navigate to={'/404'}/>
//             }
//         ]
//     }
// ]);
export default App;
