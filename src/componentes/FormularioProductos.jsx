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
            <div className='card p-4 mb-4'>
                <h2 className='card-title mb-3'>Formulario</h2>

                <form onSubmit={enviarFormulario}>
                    <div className='mb-3'>
                        <input type="text" name="nombre" placeholder="Nombre del producto" className='form-control' required />
                    </div>
                    <div className='mb-3'>
                        <input type="number" name="precio" placeholder="Precio €" className='form-control' step="0.01" required />
                    </div>
                    <button type="submit" className='btn btn-primary w-100'>Añadir Producto</button>
                </form>
            </div>

            <ListaProductos key={key}></ListaProductos>
        </>
    );
}
