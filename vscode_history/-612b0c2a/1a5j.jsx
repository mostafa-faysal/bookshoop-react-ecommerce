
import { CardsContext } from "./components/cardsProvider";
import Navbar from "./components/Navpar";
import Products from "./components/Products"; 
export default function App() {
  return (
<CardsContext >
      
  <Navbar />
  <Products />
</CardsContext>
  )
}
