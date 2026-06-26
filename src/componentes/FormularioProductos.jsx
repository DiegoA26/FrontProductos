import { useState } from "react";
import ListaProductos from "./ListaProductos";
const API_URL = import.meta.env.VITE_API_URL;

export default function FormularioProductos() {
    const [key, setKey] = useState(0);

    const enviarFormulario = async (e) => {
        e.preventDefault();

        const datosFormateados = new FormData(e.target);

        const nuevoProducto = {
            nombre: datosFormateados.get("nombre"),
            precio: datosFormateados.get("precio"),
        };

        try {
            const respuesta = await fetch(`${API_URL}/productos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevoProducto),
            });

            setKey(key + 1);
            e.target.reset();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <form onSubmit={enviarFormulario}>
                <input type="text" name="nombre" placeholder="nombre" />
                <input type="number" name="precio" placeholder="precio €" />
                <button type="submit">Añadir Producto</button>
            </form>

            <ListaProductos key={key}></ListaProductos>
        </>
    );
}
