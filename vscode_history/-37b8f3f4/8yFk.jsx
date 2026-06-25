import { createContext } from "react";

export const CounterContext = createContext();
 function CounterProvider({children}) {
    return (
        <CounterContext.Provider value={10}>
            {children}
        </CounterContext.Provider>
    )
}
