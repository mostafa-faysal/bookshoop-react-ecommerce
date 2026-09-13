import "../App.css";
import Providers from "./Providers";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

export const metadata = {
  title: "Bookshop",
  description: "Your favorite place to buy books.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div id="root">
            <NavBar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
