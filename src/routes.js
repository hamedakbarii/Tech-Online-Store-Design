import ContactUs from "./components/Pages/ContactUs";
import Home from "./components/Pages/Home";
import Product from "./components/Pages/Product";
import Register from "./components/Pages/Register";
import ShoppingCart from "./components/Pages/ShoppingCart";
let router = [
  { path: "/", element: <Home /> },
  { path: "/product", element: <Product /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/register", element: <Register /> },
  { path: "/shoppingcart", element: <ShoppingCart /> },
];

export default router;
