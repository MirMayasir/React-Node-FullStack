import React, { useEffect, useState } from 'react';
import Footer from '../Footer/footer.jsx';
import Header from '/src/Components/Header/header.jsx';
import '/src/Components/MyOrders/myorders.css';

const AdminPanel = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:3001/orders');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchOrders();
    }, []);

    return (
        <>
            <Header />
            <div className="admin-page">
                <h1 className="admin-heading">Admin Panel</h1>
                {error && <p className="error">{error}</p>}
                <div className="orders-container">
                    {orders.length === 0 ? (
                        <p>No orders found</p>
                    ) : (
                        orders.map((order) => (
                            <div className="order-card" key={order.order_id}>
                                <h2>Order #{order.order_id}</h2>
                                <p>Date: {new Date(order.order_date).toLocaleString()}</p>
                                <div className="order-items">
                                    {orders.filter(item => item.order_id === order.order_id).map((item, idx) => (
                                        <div className="order-item" key={idx}>
                                            <div className="image-container">
                                                <img src={item.image} alt={`Product Image ${item.item_id}`} />
                                            </div>
                                            <div className="item-content">
                                                <h3 className="item-title">{item.title}</h3>
                                                <p className="item-description">{item.description}</p>
                                                <div className="rating-price">
                                                    <div className="rating">
                                                        <span>{item.rating}</span>
                                                    </div>
                                                    <div className="price">
                                                        <span>{item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="order-summary">
                                    <p>Total Price: ${order.total_price}</p>
                                    <p>GST: ${order.gst_amount}</p>
                                    <p>Total (Including GST): ${order.total_with_gst}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminPanel;
