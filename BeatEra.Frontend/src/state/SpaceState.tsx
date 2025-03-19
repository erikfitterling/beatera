import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Space, SpaceSettings } from './models/Space';
import spaceApi from '../utils/api/spaceApi';

interface SpaceState {
    currentSpace: Space | null;
    friendSpaces: Space[];

    createSpace: () => void;
    updateSpace: (space: Space) => void;
    addFriendSpace: (space: Space) => void;
    removeFriendSpace: (spaceId: string) => void;
}

const useSpaceStore = create<SpaceState>()(
    persist(
        (set) => ({
            currentSpace: null,
            friendSpaces: [],

            createSpace: () => {
                // spaceApi.createSpace({ title: "New Space" });
                set({ currentSpace: new Space("", 0, [], new SpaceSettings) });
            },

            updateSpace: (space) => {
                set({ currentSpace: space });
            },

            addFriendSpace: (space) => {
                set((state) => ({ friendSpaces: [...state.friendSpaces, space] }));
            },

            removeFriendSpace: (spaceId) => {
                set((state) => ({ friendSpaces: state.friendSpaces.filter((space) => space.id !== spaceId) }));
            }
        }),
        {
            name: 'space-storage',
            partialize: (state) => ({ currentSpace: state.currentSpace, friendSpaces: state.friendSpaces }),
        }
    )
);

export default useSpaceStore;