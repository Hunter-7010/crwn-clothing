import { React, useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";
import {useNavigate} from 'react-router-dom'
// ALOWS US TO GET NAVIGATE FUNCTION

import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckoutHandler = ()=>{
    navigate("/checkout")
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
