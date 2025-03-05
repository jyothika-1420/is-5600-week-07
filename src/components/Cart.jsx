import React from 'react';
import { useCart } from '../state/CartProvider';

const Cart = () => {
  const { 
    cartItems, 
    updateItemQuantity, 
    removeFromCart, 
    getCartTotal 
  } = useCart();

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <div>
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h2>Total: ${getCartTotal()}</h2>
    </div>
  );
};

export default Cart;