import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
    id: string;
    username: string;
    highscore: number;
    email: string;
    friends: string[];
}

interface UserState {
    currentUser: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
  
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (username: string, email: string, password: string) => Promise<void>;
    fetchUserData: () => Promise<void>;
}

const testUser: User = {
    id: '1',
    username: 'testuser',
    highscore: 500,
    email: "ef@beatera.com",
    friends: ['2', '3']
}

export const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            currentUser: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,

        login: async (email: string, password: string) => {
            set({ isLoading: true, error: null });
            try {

                // TODO: API-Aufruf zum Login auf der Server-Seite

                set({ currentUser: testUser, isAuthenticated: true, isLoading: false });
            } catch (error) {
                set({ error: error instanceof Error ? error.message : "Login was not successfull, please try again", isLoading: false });
            }
        },

        logout: () => {
            set({ currentUser: null, isAuthenticated: false, error: null });
        },

        register: async (username: string, email: string, password: string) => {
            set({ isLoading: true, error: null });
            try {

                //TODO: API-Aufruf zum Registrieren auf der Server-Seite

                set({ currentUser: testUser, isAuthenticated: true, isLoading: false });
            } catch (error) {
                set({ error: error instanceof Error ? error.message : "Register was not successfull, please try again", isLoading: false });
            }
        },

      fetchUserData: async () => {
        set({ isLoading: true, error: null });
        try {

            //TODO: API-Aufruf zum Abrufen der Benutzerdaten auf der Server-Seite
            
            set({ currentUser: testUser, isLoading: false });
        } catch (error) {
            set({ error: error instanceof Error ? error.message : 'Unbekannter Fehler', isLoading: false });
        }
      }
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({ currentUser: state.currentUser, isAuthenticated: state.isAuthenticated }),
    }
  )
);