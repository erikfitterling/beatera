import { useState } from "react";
import "../styles/createSpace.css";
import SelectPlaylistsView from "./views/SelectPlaylistView";
import SelectFriendsView from "./views/SelectFriendsView";
import ConfigureSpace from "./views/ConfigureSpace";
import { SpaceStatus } from "../state/models/Space";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";
import useSpaceStore from "../state/SpaceState";

const CreateSpacePage = () => {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const { currentSpace, updateSpace } = useSpaceStore();
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);
  const navigate = useNavigate();

  const views = [
    { component: <SelectPlaylistsView /> },
    { component: <SelectFriendsView /> },
    { component: <ConfigureSpace /> },
  ];

  const handleNextOrSubmit = async () => {
    if (currentViewIndex < views.length - 1) {
      setCurrentViewIndex(currentViewIndex + 1);
    } else {
      if (currentSpace === null) {
        setToast({
          visible: true,
          message: "Space was not successfully created.",
          type: 'error'
        });
        return;
      }

      updateSpace({
        ...currentSpace,
        state: SpaceStatus.Waiting,
      });
      navigate("/game/" + currentSpace.id);
    }
  };

  const closeToast = () => {
    setToast(null);
  };

  const isLastView = currentViewIndex === views.length - 1;
  const buttonText = isLastView ? "Open Lobby" : "Next";

  return (
    <div className='basic-container-c'>

      {toast && toast.visible && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={closeToast} 
        />
      )}
      
      <div>
        {views[currentViewIndex].component}
      </div>


      <button 
        className='menu-btn btn-bottom' 
        onClick={handleNextOrSubmit}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CreateSpacePage;