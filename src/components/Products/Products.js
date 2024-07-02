import React from 'react';
import Product from '../Product/Product';

function Products() {
    const products = [
        {
            image: 'cafe1.jpg',
            name: 'Café Especial',
            price: '10,000',
            description: 'Un café de alta calidad con un sabor excepcional y un aroma irresistible.',
            rating: 5,
        },
        {
            image: 'cafe2.jpg',
            name: 'Café Tradicional',
            price: '8,000',
            description: 'El clásico café que nunca falla, con un sabor suave y agradable.',
            rating: 4,
        },
        {
            image: 'cafe3.jpg',
            name: 'Café Orgánico',
            price: '12,000',
            description: 'Café cultivado sin pesticidas ni químicos, perfecto para los amantes del café natural.',
            rating: 5,
        },
        {
            image: 'cafe4.jpg',
            name: 'Café Descafeinado',
            price: '9,000',
            description: 'El mejor café descafeinado para disfrutar en cualquier momento del día.',
            rating: 4,
        },
        {
            image: 'cafe5.jpg',
            name: 'Café de Exportación',
            price: '15,000',
            description: 'Café premium de exportación con una calidad y sabor incomparables.',
            rating: 5,
        },
 
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
