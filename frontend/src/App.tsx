import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<HomePage/>} path="/"/>
        <Route element={<NotFoundPage/>} path="*"/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App