import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import router from "./routes";
import { useRoutes } from "react-router-dom";


export default function App() {
  let routes = useRoutes(router);
  return (
    <div className="relative">
      <Header />

      {routes}

      <Footer />
    </div>
  );
}
