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
            <h2>Lista de productos</h2>

            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}> Nombre: {producto.nombre} / Precio: {producto.precio}€
                    </li>
                ))}
            </ul>
        </>
    );
}
