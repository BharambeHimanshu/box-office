import React from "react"
import { Route , Routes} from "react-router-dom"
import HomeScreen from "./Components/HomeScreen"
import B from "./Components/B"
import C from "./Components/C"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/b" element={<B />} />
        <Route path="/c" element={<C />} />
      </Routes>
    </>
  )
}