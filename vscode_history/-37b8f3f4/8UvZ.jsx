import { createContext } from "react";

export const CounterContextontext = createContext();
export default function CounterProvider({children}) {
    return (
        <CounterContext.Provider value={10}>
            {children}
        </CounterContext.Provider>
    )
}
