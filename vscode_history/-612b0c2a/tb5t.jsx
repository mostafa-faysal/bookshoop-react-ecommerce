import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { CardsContext } from "./components/cardsProvider";
import Navpar from "./components/Navpar";
export default function App() {
  return (
<CardsContext.Provider value={cards}><RouterProvider router={router} />
      <Navpar />
      <Products
    </CardsContext.Provider>
  )
}
