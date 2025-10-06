import {useState} from 'react';
import {pizzaCart} from "../data/pizzas.js";

export default function Cart() {
    const [cart, setCart] = useState (pizzaCart);
    const aumentar = (id) => {
        setCart ((curr) =>
        curr.map((p) =>
        p.id === id ? {...p, count: (p.count ?? 0) + 1 } : p
    )
);
    };
    const disminuir = (id) => {
        setCart((curr) =>
        curr.map((p) =>
        p.id === id ? {...p, count: Math.max(0, (p.count ?? 0) - 1)} : p
    )
    .filter((p) => (p.count ?? 0) > 0)
    );
    };
    const total = cart.reduce((sum, p) => sum + (p.price ?? 0) * (p.count ?? 0), 0
);
    const CLP = (n) =>
        n.toLocaleString("es-CL", {style: "currency", currency: "CLP"});

  return (
    <div className='container mt-4'>
        <h2>🛒 Carrito de compras</h2>
        {cart.map((p) => (
            <div key={p.id} className='d-flex align-items-center justify-content-between border-bottom py-2'>
            <img src={p.img} alt={p.name} style={{width: "80px"}}/>
            <h5 className='text-capitalize mb-0'>{p.name}</h5>
            <p className='mb-0'>{CLP(p.price ?? 0)}</p>
            <div className='d-flex align-items-center'>
                <button className='btn btn-sm btn-danger mx-1' onClick={() => disminuir(p.id)}>-</button>
                <span className='mx-1'>{p.count ?? 0}</span>
                <button className='btn btn-sm btn-success mx-1' onClick={() => aumentar(p.id)}>+</button>
            </div>

            </div>
        ))}
        <h4 className='mt-3'>Total: {CLP(total)}</h4>
        <button className='btn btn-dark mt-2'>Pagar</button>
    </div>
  );
}
