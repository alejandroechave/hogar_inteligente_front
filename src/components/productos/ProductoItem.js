import React from 'react';
import '../../styles/components/pages/ProductoItem.css';

const ProductoItem = ({ title, imagen, descripcion }) => {
    return (
        <div className="producto-item">
            <div className="img-container">
                <img src={imagen} alt={title} />
                <h3>{title}</h3>
            </div>
            <p>{descripcion}</p>
        </div>
    );
}

export default ProductoItem;
