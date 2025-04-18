/** @format */

import "../styles/startGame.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "../utils/static/settings";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSpaceStore from "../state/SpaceState";
import LoadingSpinner from "../components/LoadingSpinner";
import NewSpaceModal from "./modals/NewSpaceModel";
import Toast from "../components/Toast";

const gameSpaces = [
  { id: 1, name: "Alex's Game", players: 3, status: "Playing" },
  { id: 2, name: "Music Quiz", players: 2, status: "Waiting" },
  { id: 3, name: "Rock Battle", players: 4, status: "Playing" },
  { id: 4, name: "Party Mix", players: 1, status: "Waiting" },
];

const JoinGameFriendsPage = () => {
  const [initialized, setInitialized] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spaceName, setSpaceName] = useState("");
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);
  
  const { currentSpace, createSpace, isLoading, error } = useSpaceStore();
  const navigate = useNavigate();

  useEffect(() => {
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (error) {
      setToast({
        visible: true,
        message: error,
        type: 'error'
      });
    }
  }, [error]);

  const openCreateSpaceModal = () => {
    setIsModalOpen(true);
    setSpaceName("New Space");
  };

  const openSpace = async () => {
    try {
      setIsModalOpen(false);
      if (isLoading) return;
      if (currentSpace !== null) {
        navigate("/createSpace/" + currentSpace.id);
        return;
      }

      const result = await createSpace(spaceName);
      
      if (result.success && result.data) {
        navigate("/createSpace/" + result.data.id);
      } 

    } catch (err) {
      console.error("Fehler beim Erstellen des Space:", err);
      setToast({
        visible: true,
        message: "Verbindung zum Server fehlgeschlagen. Bitte versuche es später erneut.",
        type: 'error'
      });
    }
  };

  const closeToast = () => {
    setToast(null);
  };

  return (
    <div className="friends-container">
      {toast && toast.visible && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={closeToast} 
        />
      )}
      
      {isLoading && <LoadingSpinner overlay={true} size="large" />}
      
      <h2 style={{ margin: "0 0 3rem 0" }}>Join a Space</h2>

      <div
        className="slider-container"
        style={{ width: "100%", margin: "0 auto" }}
      >
        {initialized && (
          <Slider {...settings}>
            {gameSpaces.map((space) => (
              <div key={space.id} className="slider-item">
                <h3>{space.name}</h3>
                <p>Players: {space.players}</p>
                <p>Status: {space.status}</p>
                <button className="join-btn">Join</button>
              </div>
            ))}
          </Slider>
        )}
      </div>

      <button
        style={{ margin: "5rem 0 0 0" }}
        className="menu-btn"
        onClick={currentSpace === null ? openCreateSpaceModal : openSpace}
        disabled={isLoading}
      >
        {currentSpace === null ? "Create a Space" : "Edit your Space"}
      </button>

      <NewSpaceModal 
        isOpen={isModalOpen} 
        onClose={() => !isLoading && setIsModalOpen(false)}
        title="Create a New Space"
      >
        <div className="new-space-modal-form">
          <input
            id="spaceName"
            type="text"
            value={spaceName}
            onChange={(e) => setSpaceName(e.target.value)}
            placeholder="Enter space name"
            autoFocus
          />
          <button 
            onClick={openSpace}
            disabled={isLoading || !spaceName.trim()}
          >
            {isLoading ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ marginRight: "10px" }}>Creating...</span>
                <LoadingSpinner size="small" />
              </div>
            ) : "Next"}
          </button>
        </div>
      </NewSpaceModal>
    </div>
  );
};

export default JoinGameFriendsPage;