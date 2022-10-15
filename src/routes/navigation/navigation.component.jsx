import { React, Fragment,useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

import { UserContext } from "../../contexts/user.contexts";
import {signOutUser} from "../../utils/firebase.utils"
import {CartContext} from "../../contexts/cart.contexts"

import {NavigationContainer,NavLinks ,NavLink,LogoContainer} from './navigation.styles'
const Navigation = () => {
  //USE CONTEXT RE RENDERS THE ENTIRE COMPONENT WHEN STATE CHANGES
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
 
  return (
    <Fragment>
      {/* FRAGMENT IS USED IF YOU DONT WANT TO RENDER ANYTHING UNTIL FULL LOAD  also removes parent wraping div*/}
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo"/>
        </LogoContainer>
        <NavLinks>
          <NavLink  to="/shop">
            {/* LINK IS JUST LIKE ANCHOR TAG */}
            Shop
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                Sign Out
              </NavLink>
            ):(
              <NavLink  to="/auth">
              {/* LINK IS JUST LIKE ANCHOR TAG */}
              Sign In
            </NavLink>
            )
          }
          <CartIcon/>
        </NavLinks>
       {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet />
      {/* WHERE EVER YOU PUT OUT LET IT WILL RENDER THE CHILD COMPONENT */}
    </Fragment>
  );
};
export default Navigation;
