import { CounterContext } from "../../CounterContext.js";

export default function CounterProvider({children}) {
    return (
        <CounterContext.Provider value={10}>
            {children}
        </CounterContext.Provider>
    )
}

