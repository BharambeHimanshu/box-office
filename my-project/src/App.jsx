import React from "react"
import { Route , Routes} from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import Home from "./pages/Home"
import Starred from "./pages/Starred"
import Show from "./pages/Show"

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/show/:id" element={<Show />} />
      </Routes> 
      </ThemeProvider>
    </>
  )
}