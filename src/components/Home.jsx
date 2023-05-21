import React from "react";
import CartItem from "./cart/CartItem";
import Slider from './Slider';

const Home = (props) =>{
  return(
    <div>
      <Slider/>
      <CartItem item={props.item}
      overlayItems={props.overlayItems}
      setOverlayItems={props.setOverlayItems}
      favorites={props.favorites}
      setFavorites={props.setFavorites}
      />
    </div>
  )
}
export default Home