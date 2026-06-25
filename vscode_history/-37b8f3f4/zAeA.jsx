import { createContext } from "react";

const counterContext = createContext();
export default function CounterProvider({children}) {
    return (
        <counterContext.Provider value={10}>
            {children}
        </counterContext.Provider>
    )
}
