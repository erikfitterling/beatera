import { useState } from "react";
import "../styles/createSpace.css";
import SelectPlaylistsView from "./views/SelectPlaylistView";
import SelectFriendsView from "./views/SelectFriendsView";
import ConfigureSpace from "./views/ConfigureSpace";
import { useNavigate } from "react-router-dom";

const CreateSpacePage = () => {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const navigate = useNavigate();

  const views = [
    { component: <SelectPlaylistsView /> },
    { component: <SelectFriendsView /> },
    { component: <ConfigureSpace /> },
    { component: <div>View 4</div> } 
  ];

  const handleNextOrSubmit = async () => {
    if (currentViewIndex < views.length - 1) {
      setCurrentViewIndex(currentViewIndex + 1);
    } else {
        navigate("/playwithfriends");
    }
  };

  const isLastView = currentViewIndex === views.length - 1;
  const buttonText = isLastView ? "Submit" : "Next";

  return (
    <div className='basic-container-c'>
      
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