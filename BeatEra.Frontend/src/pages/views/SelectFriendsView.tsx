import {ListView, ListItemWithMarker} from "../../components/ListView";	
import { Polygon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import useSpaceStore from "../../state/SpaceState";

const SelectFriendsView = () => {

    const [friends, setFriends] = useState<ListItemWithMarker[]>(
        [
            { id: "1", title: "Alice", marked: false },
            { id: "2", title: "Bob", marked: false },
            { id: "3", title: "Charlie", marked: false },
            { id: "4", title: "David", marked: false },
            { id: "5", title: "Eve", marked: false },
        ]
    );

    const { currentSpace, updateSpace } = useSpaceStore();

    useEffect(() => {
        if (currentSpace) {
            const updatedFriends = friends.map((item) => {
                return { ...item, marked: currentSpace.players.includes(item.id) };
            });
            setFriends(updatedFriends);
        }
    }, [currentSpace]);

    const onFriendMarked = (id: string, marked: boolean) => {
        if (!currentSpace) return;

        const updatedFriends = friends.map((item) => {
            if (item.id === id) {
                return { ...item, marked: marked };
            }
            return item;
        });
        setFriends(updatedFriends);
        updateSpace({
            ...currentSpace,
            players: updatedFriends.filter((item) => item.marked).map((item) => item.id),
        });
    };

    return (
        <div>
            <h2>Select Friends</h2>
            <ListView list={friends} onItemMarked={onFriendMarked} renderAdditionalContent={(item) => <Polygon size={24} color={item.marked ? "green" : "red"} />}
            />
        </div>
    );
}

export default SelectFriendsView;