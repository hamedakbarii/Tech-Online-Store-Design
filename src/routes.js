import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";

import Product from "./Pages/Product";
import Register from "./Pages/Register";
import ShoppingCart from "./Pages/ShoppingCart";
let router = [
  { path: "/", element: <Home /> },
  { path: "/product", element: <Product /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/register", element: <Register /> },
  { path: "/shoppingcart", element: <ShoppingCart /> },
];

export default router;
