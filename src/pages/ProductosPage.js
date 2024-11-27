import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductoItem from '../components/productos/ProductoItem';

const ProductosPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/productos`);
                setProductos(response.data);
            } catch (error) {
                console.error('Error al cargar productos:', error);
            } finally {
                setLoading(false);
            }
        };

        cargarProductos();
    }, []);

    return (
        <section className='holder'>
            <h2>Productos</h2>
            {loading ? (
                <p>Cargando..</p>
            ) : (
                productos.map(item => <ProductoItem key={item.id}
                    title={item.titulo} imagen={item.imagen} descripcion={item.descripcion} />)
            )}
        </section>
    );
}

export default ProductosPage;
