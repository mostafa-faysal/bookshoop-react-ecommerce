import { createContext } from "react";

export const CounterContext = createContext();
export  function CounterProvider({children}) {
    return (
        <CounterContext.Provider value={10}>
            {children}
        </CounterContext.Provider>
    )
}
