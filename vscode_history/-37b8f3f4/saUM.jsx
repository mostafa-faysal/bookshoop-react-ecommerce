import { createContext } from "react";

const counterContext = createContext();
export default function CounterProvider() {
    return (
        <counterContext.Provider></counterContext.Provider>   
     )
}
