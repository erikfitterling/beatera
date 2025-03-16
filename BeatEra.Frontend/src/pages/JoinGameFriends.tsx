import "../styles/startGame.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

const gameSpaces = [
    { id: 1, name: "Alex's Game", players: 3, status: "Playing" },
    { id: 2, name: "Music Quiz", players: 2, status: "Waiting" },
    { id: 3, name: "Rock Battle", players: 4, status: "Playing" },
    { id: 4, name: "Party Mix", players: 1, status: "Waiting" },
  ];

const JoinGameFriends = () => {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        setInitialized(true);
    }, []);
    
    var settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "15%",
        slidesToShow: 1,
        speed: 500,
      };

    return (
        <div className="friends-container">            
            <h2 style={{margin: "0 0 3rem 0"}}>Join a Space</h2>

            <div className="slider-container" style={{ width: '100%', margin: '0 auto' }}>
                {initialized && (
                    <Slider {...settings}>
                        {gameSpaces.map(space => (
                            <div 
                                key={space.id} 
                                className="slider-item">
                                <h3>{space.name}</h3>
                                <p>Players: {space.players}</p>
                                <p>Status: {space.status}</p>
                                <button className="join-btn">Join</button>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>

            <button style={{margin: "10rem 0 0 0"}} className="menu-btn">Create a Space</button>
        </div>
    );
};

export default JoinGameFriends;