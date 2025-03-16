import "../styles/home.css"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1 className="home-title">BeatEra</h1>
            <div className="home-btns-wrapper">
                <button className="menu-btn" onClick={() => navigate('/playwithfriends')}>Play with Friends</button>
                <button className="menu-btn">Find Game</button>
            </div>
        </div>
    );
};

export default Home;