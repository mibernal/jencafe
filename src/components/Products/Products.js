import React, { useEffect, useState } from 'react';
import './Products.css'; // Asegúrate de tener un archivo CSS para estilizar el componente

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/productos'); // Cambiado a '/productos' para obtener productos
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data); // Actualiza la lista de productos
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos: {error.message}</p>;
    if (products.length === 0) return <p>No hay productos disponibles.</p>;

    return (
        <section className="content">
            <h2>Nuestros Productos</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product" key={product._id}>
                        <img src={product.imagen} alt={product.nombre} /> {/* Cambiado a 'nombre' */}
                        <h3>{product.nombre}</h3> {/* Cambiado a 'nombre' */}
                        <p>Precio: {product.precio} COP</p>
                        <button>Agregar al Carrito</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;
