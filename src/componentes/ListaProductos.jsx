import { useEffect, useState } from "react";


export default function ListaProductos() {
    const API_URL = import.meta.env.VITE_API_URL;
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/productos`)
            .then((response) => response.json())
            .then((datos) => setProductos(datos))
            .catch((error) => console.error(error));
    }, []);



    return (
        <>
            <div className='card p-4'>
                <h2 className='card-title mb-3'>Lista de productos</h2>

                <ul className='list-group'>
                    {productos.map((producto) => (
                        <li key={producto.id} className='list-group-item d-flex justify-content-between align-items-center'>
                            <span>{producto.nombre}</span>
                            <span className='badge bg-success'>{producto.precio}€</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
