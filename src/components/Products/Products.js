import React from 'react';
import Product from '../Product/Product';

function Products() {
    const products = [
        { image: 'cafe1.jpg', name: 'Café Especial', price: '10,000' },
        { image: 'cafe2.jpg', name: 'Café Tradicional', price: '8,000' },
    ];

    return (
        <section className="content">
            <h2>Nuestros Productos</h2>
            {products.map((product, index) => (
                <Product key={index} {...product} />
            ))}
        </section>
    );
}

export default Products;
