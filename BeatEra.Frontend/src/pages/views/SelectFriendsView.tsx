import {ListView} from "../../components/ListView";

const SelectFriendsView = () => {
    return (
        <div>
            <h2>Select Friends</h2>
            <ListView
                list={[
                    { id: "1", title: "Friend 1", marked: false },
                    { id: "2", title: "Friend 2", marked: false },
                    { id: "3", title: "Friend 3", marked: false },
                    { id: "4", title: "Friend 4", marked: false },
                ]}
                // onItemSelect={(selectedItems) => {
                //     console.log("Selected friends:", selectedItems);
                // }}
            />
        </div>
    );
}

export default SelectFriendsView;