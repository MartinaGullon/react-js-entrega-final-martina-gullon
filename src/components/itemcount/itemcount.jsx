import React, { useState } from 'react';
import "./itemcount.css"

const ItemCount = ({ stock, añadirProducto }) => {
    const [contador, setContador] = useState(1);

    const sumar = () => {
        if (contador > 0) {
            setContador(contador + 1);

        }
    };
    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };
    return (
        <div className="item-count">
            <div className="controles">
                <button onClick={restar}>-</button>
                <p>{contador}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button onClick={() => añadirProducto(contador)} className="terminar">
                Agregar al carrito
            </button>
        </div>

    )
};


export default ItemCount