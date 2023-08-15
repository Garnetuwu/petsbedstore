import "../styles/globals.css";
import { CartContextProvider } from "@/store/cartContext";

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}
