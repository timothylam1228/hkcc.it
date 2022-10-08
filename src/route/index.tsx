import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Path from "./path"

import Home from "pages/Home"
import Source from "pages/Source"
import UsefulLink from "pages/UsefulLink"
import Pathways from "pages/Pathways"
export const routes = [
  {
    path: Path.Home.Root,
    exact: true,
    element: <Home />,
    label: "Home",
  },
  {
    path: Path.Source.Root,
    exact: true,
    element: <Source />,
    label: "Source",
  },
  {
    path: Path.UsefulLinks.Root,
    exact: true,
    element: <UsefulLink />,
    label: "Useful Links",
  },
  {
    path: Path.Path.Root,
    exact: true,
    element: <Pathways />,
    label: "Pathways",
  },
  {
    path: "*",
    element: <Navigate to={Path.Home.Root} />,
  },
]
const Router = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} {...route}></Route>
      ))}
    </Routes>
  )
}
export default Router
