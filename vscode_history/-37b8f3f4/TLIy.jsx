import { createContext } from "react";


export const what the prooplem = createContext();
export default function CounterProvider({children}) {
    return (
        <CounterContext.Provider value={10}>
            {children}
        </CounterContext.Provider>
    )
}
