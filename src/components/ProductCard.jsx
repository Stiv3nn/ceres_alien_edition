import React from "react";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img src={item.image} alt={item.name} className="product-image" />

                <span className="alcohol-badge">{item.alcohol}</span>
            </div>

            <div className="product-info">
                <h3 className="product-title">{item.name}</h3>
                <span className="product-type">{item.type}</span>
                <p className="product-desc">{item.description}</p>

                <div className="product-footer">
                    <span className="product-price">{item.price}</span>
                    <button className="order-btn">ORDINA</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
