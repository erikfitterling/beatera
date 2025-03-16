import { UserCheck, SignIn, ArrowLeft, MoonStars, Sun } from "@phosphor-icons/react";
import { useUserStore } from "../state/User";
import ToggleButton from "./ToggleButton";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import "../styles/nav.css"

interface NavbarProps {
    isHome?: boolean;
}

const Navbar = ({isHome = false} : NavbarProps) => {
    const isAuthenticated = useUserStore(state => state.isAuthenticated);
    const logout = useUserStore(state => state.logout);
    const login = useUserStore(state => state.login);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const isBrightMode = theme === "bright";
    const getIconColor = () => isBrightMode ? "#000" : "#fff";

    return (
        <nav>
            <div className="nav-items">
                {!isHome && <button className="nav-btn" onClick={handleGoBack}>
                    <ArrowLeft color={getIconColor()} size={32} weight="bold"/>
                </button>}
                {!isHome && <h2>BeatEra</h2>}
            </div>

            <div className="nav-items">
                <ToggleButton 
                    labels={{
                        checked: <Sun color={getIconColor()} size={32} weight="bold" />,
                        unchecked: <MoonStars color={getIconColor()} size={32} weight="bold" />
                    }}
                    isChecked={isBrightMode}
                    toExecute={toggleTheme}
                    style="nav-btn"
                />
                <button className="nav-btn" onClick={isAuthenticated ? 
                    () => logout() : 
                    () => login('', '')
                }>
                    {isAuthenticated ? 
                    <UserCheck color={getIconColor()} size={32} weight="bold" /> : 
                    <SignIn color={getIconColor()} size={32} weight="bold" />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar; 