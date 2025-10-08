import React, { useState, useEffect } from 'react';
import '../App'; // Import custom CSS

// Dummy products with images
const dummyProducts = [
  {
    id: 1,
    name: 'Almond Chocolate',
    price: 29.99,
    image:
      './images/01.webp',
  },
  {
    id: 2,
    name: 'Black Forest',
    price: 49.99,
    image:
      './images/02.webp',
  },
  {
    id: 3,
    name: 'chocolate cake',
    price: 19.99,
    image:
      './images/03.jpg',},
  {
    id: 4,
    name: 'Blueberry',
    price: 39.99,
    image:
       './images/04.webp',
  },
  {
    id: 5,
    name: 'Milkynut Cake',
    price: 24.99,
    image:
      './images/05.webp',
  },
  {
    id: 6,
    name: '',
    price: 34.99,
    image:
         './images/6.jpeg',
  },
  {
    id: 7,
    name: 'Ferrero rocher Cake',
    price: 21.99,
    image:
     './images/07.webp',
  },
  {
    id: 8,
    name: 'Chocolate Truffle',
    price: 44.99,
    image: './images/08.webp',},
,  {
    id: 9,
    name: 'Irish Coffee',
    price: 54.99,
    image:
      './images/11.webp',
  },
  {
    id: 10,
    name: 'Nutty Bubble Cake',
    price: 14.99,
    image: './images/12.webp',
  },
 {
    id: 11,
    name: 'Cappuccino',
    price: 14.99,
    image:
       './images/13.webp'
  },
 {
    id: 12,
    name: 'Cheese Cakes',
    price: 14.99,
    image:
       './images/14.webp'
  },
 {
    id: 13,
    name: 'Vancho Cake',
    price: 14.99,
    image:
       './images/15.webp'
  },
 {
    id: 14,
    name: 'Blue Designer chocolote cake',
    price: 14.99,
    image:
       './images/16.webp'
  },
 {
    id: 15,
    name: 'Santa sweet surprise redvelvet cake',
    price: 14.99,
    image:
       './images/17.webp'
  },
{
    id: 16,
    name: 'Crunchy Buttersctoch cake',
    price: 14.99,
    image:
       './images/18.webp'
  },]
  

const CART_STORAGE_KEY = 'myCart';

const ProductPage = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const reduceQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="product-container py-5">
      <h1 className="text-center mb-4">Products</h1>

      {/* Products Grid */}
      <div className="product-grid">
        {dummyProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <div className="product-body">
              <h5>{product.name}</h5>
              <p>Price: ${product.price.toFixed(2)}</p>
              <button className="btn btn-primary" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-5" />

      {/* Cart Section */}
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{item.name}</strong> × {item.quantity} = $
                {(item.quantity * item.price).toFixed(2)}
              </div>
              <div>
                <button
                  className="btn btn-outline-success btn-sm me-2"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-warning btn-sm me-2"
                  onClick={() => reduceQuantity(item.id)}
                >
                  -
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductPage;
