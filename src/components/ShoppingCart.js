import React, { useState } from 'react';
import '../App.css';
const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const addItem = () => {
    if (itemName.trim() !== '' && quantity > 0 && price > 0) {
      const newItem = { id: Date.now(), name: itemName, quantity, price };
      setItems([...items, newItem]);
      setItemName('');
      setQuantity(0);
      setPrice(0);
    }
  };

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className='shopsec'>
      <h2>Shopping Cart</h2>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item Name"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        placeholder="Quantity"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        placeholder="Price"
      />
      <button id='item' onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id} className=' border'>
           <p> {item.name} </p>
           <p> Quantity: {item.quantity}</p>
            <p> Price: ${item.price}</p>
            <button id='remove' onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>{
        items.length===0&&(<><h5 style={{color:'grey',fontStyle:'italic'}}>Shopping cart is Empty.</h5></>)
      }
      <div className='bottom'>

      <p>Total items: {items.length}</p>
      <p>Subtotal: ${calculateSubtotal()}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
