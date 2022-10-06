import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Router from "route"
import { BrowserRouter } from "react-router-dom"
import Frame from "components/shared/Frame"

function App() {
  return (
    <BrowserRouter>
      <Frame>
        <Router />
      </Frame>
    </BrowserRouter>
  )
}

export default App
