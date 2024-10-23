import React, { useState, useContext } from 'react';
import { CartContext } from '/src/Components/CartContext/cartcontext.jsx'; // Import CartContext
import '/src/Components/Products/product.css';

const ProductCards = () => {
    const { addToCart } = useContext(CartContext);
    const [addedToCartId, setAddedToCartId] = useState(null);

    const products = [
        { id: 1, title: 'Product Title 1', description: 'This is a short description of the product. It highlights the key features and benefits.', image: '/src/assets/men-wear1.jpg', rating: '★ ★ ★ ★ ☆', price: '$49.99' },
        { id: 2, title: 'Product Title 2', description: 'This is a short description of the product. It highlights the key features and benefits.', image: '/src/assets/men-wear2.jpg', rating: '★ ★ ★ ★ ☆', price: '$59.99' },
        { id: 3, title: 'Product Title 3', description: 'This is a short description of the product. It highlights the key features and benefits.', image: '/src/assets/women-wear1.webp', rating: '★ ★ ★ ★ ☆', price: '$69.99' },
        { id: 4, title: 'Product Title 4', description: 'This is a short description of the product. It highlights the key features and benefits.', image: '/src/assets/women-wear2.webp', rating: '★ ★ ★ ★ ☆', price: '$79.99' },
        { id: 5, title: 'Product Title 5', description: 'This is a short description of the product. It highlights the key features and benefits.', image: '/src/assets/men-sneakers.webp', rating: '★ ★ ★ ★ ☆', price: '$89.99' },
        { id: 6, title: 'Product Title 6', description: 'This is a short description of the product. It highlights the key features and benefits.', image: '/src/assets/men2.png', rating: '★ ★ ★ ★ ☆', price: '$99.99' },
        { id: 7, title: 'Product Title 7', description: 'This is a short description of the product. It highlights the key features and benefits.', image: '/src/assets/women1.jpeg', rating: '★ ★ ★ ★ ☆', price: '$109.99' },
        { id: 8, title: 'Product Title 8', description: 'This is a short description of the product. It highlights the key features and benefits.', image: '/src/assets/iphone.jpg', rating: '★ ★ ★ ★ ☆', price: '$119.99' },
        { id: 9, title: 'Product Title 9', description: 'This is a short description of the product. It highlights the key features and benefits.', image: '/src/assets/iqoo.webp', rating: '★ ★ ★ ★ ☆', price: '$129.99' },
        { id: 10, title: 'Product Title 10', description: 'This is a short description of the product. It highlights the key features and benefits.', image: '/src/assets/samsang.jpg', rating: '★ ★ ★ ★ ☆', price: '$139.99' }
    ];

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedToCartId(product.id);
        setTimeout(() => {
            setAddedToCartId(null);
        }, 2000);
    };

    return (
        <div className="product-page">
            <div className="container">
                {products.map(product => (
                    <div className="card" key={product.id}>
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
                            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                                {addedToCartId === product.id ? 'Added to Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCards;
