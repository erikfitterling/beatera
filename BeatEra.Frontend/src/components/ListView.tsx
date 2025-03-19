import React from 'react';
import "../styles/styles.css"

interface ListItem {
    id: string;
    title: string;
    marked: boolean;
}

interface ListViewProps {
    list: ListItem[];
    onItemSelect: (selectedItems: ListItem[]) => void;
}

const ListView = ({ list, onItemSelect }: ListViewProps) => {
    const [selectedItems, setSelectedItems] = React.useState<ListItem[]>(
        list.filter(item => item.marked)
    );

    const handleCheckboxChange = (item: ListItem) => {
        const updatedItems = selectedItems.some(selectedItem => selectedItem.id === item.id)
            ? selectedItems.filter(selectedItem => selectedItem.id !== item.id)
            : [...selectedItems, item];
        
        setSelectedItems(updatedItems);
        onItemSelect(updatedItems);
    };

    return (
        <div>
            <ul className="list-group">
                {list.map(item => (
                    <li key={item.id} className="list-group-item">
                        <span>{item.title}</span>
                        <input
                            type="checkbox"
                            checked={selectedItems.some(selectedItem => selectedItem.id === item.id)}
                            onChange={() => handleCheckboxChange(item)}
                            className="me-3"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListView;

