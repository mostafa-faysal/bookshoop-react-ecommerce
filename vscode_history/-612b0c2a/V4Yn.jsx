import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { CardsContext } from "./components/cardsProvider";
import Navbar from "./components/Navpar";
import Products from "./components/Products"; 
export default function App() {
  return (
    <CardsContext.Provider>
      <RouterProvider router={router} />
      <Navbar />
      <Products />
    </CardsContext.Provider>
  )
}
