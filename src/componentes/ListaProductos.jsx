import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

export default function ListaProductos() {
    
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/productos`)
            .then((response) => response.json())
            .then((datos) => setProductos(datos))
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <h2>Lista de productos</h2>

            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        {producto.nombre} - {producto.precio}€
                    </li>
                ))}
            </ul>
        </>
    );
}
