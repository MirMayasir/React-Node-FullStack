import React, { useContext } from 'react';
import { CartContext } from '/src/Components/CartContext/cartcontext.jsx';
import Footer from '../Footer/footer.jsx';
import Header from '/src/Components/Header/header.jsx';
import '/src/Components/Cart/cart.css';

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const totalPrice = cartItems.reduce((total, product) => {
        const price = parseFloat(product.price.replace('$', ''));
        return total + price;
    }, 0);

    const gstRate = 0.10;
    const gstAmount = totalPrice * gstRate;
    const totalWithGST = totalPrice + gstAmount;

    const handlePlaceOrder = async () => {
        const orderData = {
            cartItems,
            totalPrice,
            gstAmount,
            totalWithGST
        };

        try {
            const response = await fetch('http://localhost:3001/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
            } else {
                alert('Failed to place order: ' + data.error);
            }
        } catch (error) {
            alert('Failed to place order: ' + error.message);
        }
    };

    return (
        <>
            <Header />
            <div className="cart-page">
                <h1 className='cart-heading'>Your Cart</h1>
                <div className="cart-container">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cartItems.map((product, index) => (
                            <div className="card" key={index}>
                                <div className="image-container">
                                    <img src={product.image} alt={`Product Image ${product.id}`} />
                                </div>
                                <div className="card-content">
                                    <h2 className="product-title">{product.title}</h2>
                                    <p className="product-description">{product.description}</p>
                                    <div className="rating-price">
                                        <div className="rating">
                                            <span>{product.rating}</span>
                                        </div>
                                        <div className="price">
                                            <span>{product.price}</span>
                                        </div>
                                    </div>
                                    <button className="remove-from-cart" onClick={() => removeFromCart(product)}>Remove</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                {cartItems.length > 0 && (
                    <div className="summary">
                        <h2>Summary</h2>
                        <p>Total Price: ${totalPrice.toFixed(2)}</p>
                        <p>GST (10%): ${gstAmount.toFixed(2)}</p>
                        <p>Total (Including GST): ${totalWithGST.toFixed(2)}</p>
                        <button className="place-order" onClick={handlePlaceOrder}>Place Order</button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
