import { createBrowserRouter } from "react-router";
import Root from "../src/Root";
import Home from "../src/Home"
import QuickStay from "../src/QuickStay";
import RecipeFinder from "../src/RecipeFinder";
import AppStore from "../src/AppStore";

const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        children:[
            {
                index:true,
                Component: Home
            }
        ]
    },
    {
        path: "/quickstay-details",
        Component: QuickStay
    },
    {
        path: "/recipe-finder-details",
        Component: RecipeFinder
    },
    {
        path: "/app-nest-details",
        Component: AppStore
    }
])
export default router