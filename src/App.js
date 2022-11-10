import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import DisplayBakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const[cart, setCart] = useState([]);
  const[cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  }, [cart]);

  //calculate price total in cart
  const total = () => {
    let value = 0;
    for(let i = 0; i < cart.length; i++){
      value += cart[i].price;
    }
    setCartTotal(Math.round(value * 100)/100);
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
  }

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}`}
    </div>
  ))

  return (
    <div className="App">
      <div id="bakery">
        <div class="heading">
          <h1>Berry Baked Goods</h1>
        </div>
        <div class="menuItems">
          {bakeryData.map((item, index) => (
            <div class="bakeryItems" id={index}>
              {DisplayBakeryItem(item)}
              <button class="button" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <div id="cart">
        <h2>My Cart</h2>
        <p>{cartItems}</p>
        <div>
          <p><b>Cart Total: {cartTotal}</b></p>
          </div>
      </div>
    </div>
  );
}

export default App;