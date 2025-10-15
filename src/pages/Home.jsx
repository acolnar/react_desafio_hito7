import Header from "../components/Header"
import CardPizza from "../components/CardPizza"
import {pizzas} from "../data/pizzas"
import { useCart, formatCLP } from "../context/CartContext"

export default function Home() {
  const {addToCart} = useCart();

  return (
    <>
    <Header/>
    <div className="container-fluid my-5 d-flex gap-4 justify-content-center flex-wrap">
      {pizzas.map((pizzas) => (
        <article key={pizzas.id} className="card">
          <img src={pizzas.img} alt={pizzas.name} />
          <h3>{pizzas.name}</h3>
          <p>{formatCLP(pizzas.price)}</p>
          <button onClick={() => addToCart(pizzas)}>Añadir</button>
        </article>
      ))}
    </div>
    </>
  )
}
