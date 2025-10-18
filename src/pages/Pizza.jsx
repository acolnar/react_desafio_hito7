import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { pizzas } from "../data/pizzas.js";

export default function Pizza() {
  const { id } = useParams();

  const pizza = useMemo(
    () => pizzas.find((p) => String(p.id) === String(id)),
    [id]
  );

  if (!pizza) return <div className="p-4 text-rose-600">Pizza no encontrada</div>;

  return (
    <main className="p-4">
      <img src={pizza.img} alt={pizza.name} />
      <h1>{pizza.name}</h1>
      <p>{pizza.desc}</p>
      <strong>${pizza.price?.toLocaleString?.() ?? pizza.price}</strong>
    </main>
  );
}
