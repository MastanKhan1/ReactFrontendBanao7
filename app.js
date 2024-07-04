import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Header from './src/components/Header';
// import SignIn from './src/components/SignIn';
import Body from './src/components/Body';


const App = ()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path :  "/", 
        element : <App/>,
        children : [
            {
                path : "/", 
                element : <Body/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)