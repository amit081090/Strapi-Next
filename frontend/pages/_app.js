import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
// import Loading from "./Loader";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    return () => {};
  }, []);

  const [cart, setCart] = useState([]);
  
  const [relodKey, setRelodKey] = useState(1);
  
  
  const addToCart = (item, qty) => {
    let newCart = cart
   for (let i=0; i<qty; i++){
    newCart.push(item)
   }
    setCart(newCart);
    setRelodKey(Math.random)
  };

  const removeFromoCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexOf(item);
    newCart.splice(index);
    setCart.splice(index);
    setCart(newCart);
  };

  const clearCart = (item, qty) => {
    setCart([]);
  };

 

  return (
    <>
      <Navbar cart={cart} />
      <Component
        key={relodKey}
        cart={cart}
        addToCart={addToCart}
        removeFromoCart={removeFromoCart}
        clearCart={clearCart}
        {...pageProps}
      />
      ;
    </>
  );
}
