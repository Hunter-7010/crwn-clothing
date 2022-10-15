import React from "react";

import { Routes, Route } from "react-router-dom";
//WITH THESE YOU CAN ASSEMBLE ROUTES
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index={true} element={<Home />}/>
      <Route path="auth" element={<Authentication />}/>
      {/* INDEX JUST TELLS IT THAT WHENEVER IT MATCHES PARENTS PATH RENDER THIS */}
      <Route path="shop/*" element={<Shop />}/>
      <Route path="checkout" element={<Checkout />}/>
      </Route>
    </Routes>
  );
};

export default App;