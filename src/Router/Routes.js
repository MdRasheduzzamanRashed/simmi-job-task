import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Profile from "../Components/Profile/Profile";
import Main from './../Layout/Main';
import Home from './../Components/Home/Home';

const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: "/",
            loader:()=>fetch('data.json'),
            element: <Home></Home>
        },
        {
            path: "/about",
            element:<About></About>,
        },
        {
            path: "/profile",
            element:<Profile></Profile>,
        }
    ]
}])



export default router;