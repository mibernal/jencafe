import React from 'react';

function Product({ image, name, price, description, rating }) {
    return (
        <div className="product">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Precio: {price} COP</p>
            <p>{description}</p>
            <div className="rating">
                {Array.from({ length: rating }).map((_, index) => (
                    <span key={index}>⭐</span>
                ))}
            </div>
            <button>Agregar al Carrito</button>
            <button>Ver Detalles</button>
        </div>
    );
}

export default Product;
