import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Space } from './models/Space';
import spaceApi from '../utils/api/spaceApi';

interface SpaceState {
    currentSpace: Space | null;
    friendSpaces: Space[];
    isLoading: boolean; 
    error: string | null; 

    createSpace: (title: string) => Promise<{ success: boolean, data?: Space, error?: string }>;
    updateSpace: (space: Space) => void;
    addFriendSpace: (space: Space) => void;
    removeFriendSpace: (spaceId: string) => void;
}

const useSpaceStore = create<SpaceState>()(
    persist(
        (set) => ({
            currentSpace: null,
            friendSpaces: [],
            isLoading: false,
            error: null,

            createSpace: async (title: string) => {
                try {
                    set({ isLoading: true, error: null });
                    const response = await spaceApi.createSpace(title);
                    set({ 
                        currentSpace: response.data, 
                        isLoading: false 
                    });
                    return { success: true, data: response.data };
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : "Fehler beim Erstellen des Space";
                    set({ 
                        error: errorMessage, 
                        isLoading: false 
                    });
                    return { success: false, error: errorMessage };
                }
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