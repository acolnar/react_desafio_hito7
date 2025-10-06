import Header from "../components/Header"
import CardPizza from "../components/CardPizza"
import {pizzas} from "../data/pizzas"

export default function Home() {
  return (
    <>
    <Header/>
    <div className="container-fluid my-5 d-flex gap-4 justify-content-center flex-wrap">
        {Array.isArray(pizzas) &&
        pizzas.map(({id, name, price, ingredients, img}) => (
          <CardPizza
              key={id}
              name={name}
              price={price}
              ingredients={ingredients}
              img={img}
          />
        ))}
    </div>
    </>
  )
}
