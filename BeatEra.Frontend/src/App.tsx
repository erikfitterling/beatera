import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import JoinGameFriends from "./pages/JoinGameFriends";
import Navbar from "./components/Navbar";
import "./styles/styles.css";

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const showSvgWaves = location.pathname === "/" || location.pathname === "/playwithfriends";

  return (
    <div className="container">
      <Navbar isHome={isHomePage} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playwithfriends" element={<JoinGameFriends />} />
      </Routes>

      {showSvgWaves && (
        <div className="wave-background"></div>
      )}

    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
export default App;
