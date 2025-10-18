import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import {pizzas} from "../data/pizzas.js";

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    StyleSheetList(pizzas);
  }, []);

  return(
    <main className="grid gap-4 p-4">
      {list.map((p) => <CardPizza key={p.id} pizza={p}/>)}
    </main>
  );
}
