import { createContext } from "react";
export const IdContext = createContext();
export default function IdProvider({children}) {
    const [id, setId] = useState([
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        }
    ]);
  return (
<IdContext .Provider value={id}></IdContext>
    {children}
</IdContext.Provider>
  )
}
