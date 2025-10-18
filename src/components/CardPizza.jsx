import{Link} from "react-router-dom";

export default function CardPizza({pizza}) {
  return (
    <div className="border rounded-xl p-4 shadow-sm flex flex-col">
        <img src={pizza.img} className="rounded-lg mb-3 object-cover h-40 w-full" alt={pizza.name} />
        <h3 className="text-lg font-semibold mb-1">{pizza.name}</h3>

        <p className="text-sm text-gray-600 flex-1">{pizza.desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold">${pizza.price?.toLocalString?.() ?? pizza.price}</span>
          <Link to={`/pizza/${pizza.id}`} className="text-sm px-3 py-2 rounded-md border hover:bg-gray-50" >Ver más</Link>
        </div>
    </div>
  )
}