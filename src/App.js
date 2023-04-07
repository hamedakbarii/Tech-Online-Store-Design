import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import router from "./routes";
import { useRoutes } from "react-router-dom";
import { useContext } from "react";
import { createContext } from "react";
export const ProductToBuy = createContext(null) ; 
export default function App() {
  let routes = useRoutes(router);
  const [ProductOnFocus , setProductOnFocus] = useState(null) ; 
  const storing = [ProductOnFocus , setProductOnFocus] ; 
  return (
    <ProductToBuy.Provider value={storing}>
      <div className="relative">
        <Header />

        {routes}

        <Footer />
      </div>
    </ProductToBuy.Provider>
  );
}
