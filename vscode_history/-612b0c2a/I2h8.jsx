import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { CardsContext } from "./components/cardsProvider";
export default function App() {
  return (
<CardsContext.Provider value={cards}><RouterProvider router={router} /></CardsContext.Provider></CardsContext.Provider>
  )
}
