import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Path from "./path"

import Home from "pages/Home"
import Source from "pages/Source"
import UsefulLink from "pages/UsefulLink"
const routes = [
  {
    path: Path.Home.Root,
    exact: true,
    element: <Home />,
  },
  {
    path: Path.Source.Root,
    exact: true,
    element: <Source />,
  },
  {
    path: Path.UsefulLinks.Root,
    exact: true,
    element: <UsefulLink />,
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
