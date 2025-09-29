import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5001";

export default function Pizza(){
    const [pizza, setPizza] = useState (null);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState (null);
    
    const id = "p001";

    useEffect(() => {
        const controller = new AbortController();

        async function fetchPizza() {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(`${API_URL}/api/pizzas/${id}`, {
                    signal: controller.signal,
                });
                if(!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();

                setPizza(data);
            } catch (err) {
                if(err.name !== "AbortError") setError (err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPizza();
        return () => controller.abort();
    }, [id]);

    if (loading) return <p>Cargando pizza...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!pizza) return <p>No encontrada.</p>;

    return(
        <article className="container py-4">
            <h2>{pizza.name}</h2>
            {pizza.img && (
                <img
                src={pizza.img}
                alt={pizza.name}
                style={{maxWidth: 320, width: "100%", borderRadius: 12}}
                />
            )}
            {pizza.desc && <p className="mt-3">{pizza.desc}</p>}
            {pizza.ingredients && (
                <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
            )}
            {pizza.price != null && (
                <p><strong>Precio:</strong>${Number(pizza.price).toLocaleString("es-CL")}</p>
            )}
        </article>
    );
}