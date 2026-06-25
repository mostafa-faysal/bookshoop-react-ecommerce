import { createContext , useState } from "react";

const CounterContext = createContext();
export default function CounterProvider({children}) {
    return (
        <CounterContext.Provider value={10}>
            {children}
        </CounterContext.Provider>
    )
}
