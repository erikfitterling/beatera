import ListView from "../components/ListView";

const CreateSpace = () => {
    const itemsList = [
        { id: "1", title: "Erstes Element", marked: false },
        { id: "2", title: "Zweites Element", marked: false },
        { id: "3", title: "Drittes Element", marked: false },
        { id: "4", title: "Viertes Element", marked: false },
        { id: "5", title: "Viertes Element", marked: false },
        { id: "6", title: "Viertes Element", marked: false },
        { id: "7", title: "Viertes Element", marked: false },
        { id: "8", title: "Viertes Element", marked: false },
        { id: "9", title: "Viertes Element", marked: false },
      ];
    
      // Callback-Funktion für die Auswahl von Items
      const handleItemSelect = (selectedItems: { id: string; title: string; marked: boolean }[]) => {

      };

    return (
        <div className="create-space-container">
            <h2 style={{margin: "0 0 3rem 0"}}>Create a Space</h2>

            <ListView list={itemsList} onItemSelect={handleItemSelect} />
        </div>
    );
}

export default CreateSpace;
