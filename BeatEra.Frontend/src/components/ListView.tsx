import "../styles/styles.css"
import { ReactNode } from "react";

export interface ListItemWithMarker {
    id: string;
    title: string;
    marked: boolean;
}

export interface ListItem {
    id: string;
    title: string;
}

type ListItemType = ListItem | ListItemWithMarker;

interface ListViewProps<T extends ListItemType> {
    list: T[];
    onItemMarked?: (itemId: string, isMarked: boolean) => void;
    renderAdditionalContent?: (item: T) => ReactNode;
}

export function ListView<T extends ListItemType>({ 
    list, 
    onItemMarked,
    renderAdditionalContent 
}: ListViewProps<T>) {
    
    // Hilfsfunktion um zu prüfen ob ein Item vom Typ ListItemWithMarker ist
    const hasMarker = (item: ListItemType): item is ListItemWithMarker => {
        return 'marked' in item;
    };

    const handleCheckboxChange = (item: T, checked: boolean) => {
        if (onItemMarked) {
            onItemMarked(item.id, checked);
        }
    };

    return (
        <div>
            <ul className="list-group">
                {list.map(item => (
                    <li key={item.id} className="list-group-item d-flex align-items-center">
                        <span>{item.title}</span>
                        {renderAdditionalContent && renderAdditionalContent(item)}
                        {hasMarker(item) && (
                            <input 
                                type="checkbox"
                                className="me-2"
                                checked={item.marked}
                                onChange={(e) => handleCheckboxChange(item, e.target.checked)}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};