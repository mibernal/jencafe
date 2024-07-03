import React, { useEffect, useState } from 'react';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/cafes')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos.</p>;

    return (
        <section className="content">
            <h2>Nuestros Productos</h2>
            {products.map((product, index) => (
                <div className="product" key={index}>
                    <img src={`path_to_image/${product.image}`} alt={product.nombreCafe} />
                    <h3>{product.nombreCafe}</h3>
                    <p>Precio: {product.precio} COP</p>
                    <button>Agregar al Carrito</button>
                </div>
            ))}
        </section>
    );
}

export default Products;
