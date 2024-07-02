import React from 'react';

function Product({ image, name, price }) {
    return (
        <div className="product">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Precio: {price} COP</p>
            <button>Agregar al Carrito</button>
        </div>
    );
}

export default Product;
