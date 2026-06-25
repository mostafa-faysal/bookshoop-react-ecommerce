
import CardsProvider from "./components/cardsProvider";
import IdProvider from "./components/IdProvider";
import Navbar from "./components/Navpar";
import Products from "./components/Products"; 
export default function App() {
  return (
    <IdProvider>

<CardsProvider >
    <I  
  <Navbar />
  <Products />
</CardsProvider>
    </IdProvider>
  )
}
