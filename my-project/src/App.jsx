import React from "react"
import { Route , Routes} from "react-router-dom"
import Home from "./pages/Home"
import Starred from "./pages/Starred"
import Show from "./pages/Show"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/show/:id" element={<Show />} />
      </Routes> 
    </>
  )
}