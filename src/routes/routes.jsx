import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App"
import About from "../pages/About"
import Competitions from "../pages/Competitions"
import Events from "../pages/Events"
import GetInvolved from "../pages/GetInvolved"
import Contact from "../pages/Contact"
import Join from "../pages/Join"
import Team from "../pages/Team"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },  {
    path: "/about",
    element: <About />
  },{
    path: "/competitions",
    element: <Competitions />
  },{
    path: "/events",
    element: <Events />
  },{
    path: "/getinvolved",
    element: <GetInvolved />
  },{
    path: "/contact",
    element: <Contact />
  },{
    path: "/join",
    element: <Join />
  },{
    path: "/team",
    element: <Team />
  },
]);


export default router;