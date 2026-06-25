import { createContext } from "react";
import { CounterContext } from './CounterContext';

export const Cou = createContext();
export default function CounterProvider({children}) {
    return (
        <CounterContext.Provider value={10}>
            {children}
        </CounterContext.Provider>
    )
}
