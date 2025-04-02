/** @format */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import JoinGameFriendsPage from "./pages/JoinGameFriendsPage"
import CreateSpacePage from "./pages/CreateSpacePage"
import Navbar from "./components/Navbar"
import "./styles/styles.css"

const AppContent = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const showSvgWaves =
    location.pathname === "/" || location.pathname === "/playwithfriends"

  return (
    <div className='container'>
      <Navbar isHome={isHomePage} />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/playwithfriends' element={<JoinGameFriendsPage />} />
        <Route path='/createspace/:id' element={<CreateSpacePage />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>

      {showSvgWaves && <div className='wave-background'></div>}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
export default App
