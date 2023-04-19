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
  const [pointerPos , setPointerPos] = useState({
    clientX : 0 , 
    clientY : 0 , 
  })
  return (
    <ProductToBuy.Provider value={storing}>
      <div className="relative" onPointerMove={(e)=>{
        setPointerPos({
          clientX : e.pageX ,
          clientY : e.pageY
        })  ;
        console.log(e)
      }}>
        <Header />

        {routes}

        <Footer />
        <span className="absolute w-[20px] h-[20px] rounded-full z-20 bg-[#00000045]" style={{left : (pointerPos.clientX - 10) , top : (pointerPos.clientY - 10)}}></span>
        <span className="absolute w-[6px] h-[6px] rounded-full z-20 bg-black" style={{left : (pointerPos.clientX - 3) , top : (pointerPos.clientY - 3)}}></span>
      </div>
    </ProductToBuy.Provider>
  );
}
