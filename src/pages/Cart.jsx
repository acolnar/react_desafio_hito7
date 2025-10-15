import { useCart, formatCLP } from '../context/CartContext.jsx';

export default function Cart() {
    const {items: cart, increase, decrease, removeFromCart, clearCart, total} = useCart();

    if (!cart || cart.length === 0){
        return (
            <div className='container mt-4'>
                <h2>Carrito de compras</h2>
                <p>Tu carrito esta vacio</p>
            </div>
        );
    }

    return (
        <div className='container mt-4'>
            <h2>Carrito de compras</h2>

            {cart.map((p) => {
                const qty = p.qty ?? p.count ?? 0;

                return (
                    <div
                        key={p.id}
                        className='d-flex align-items-center justify-content-between border-bottom py-2'
                    >
                        <img src={p.img} alt={p.name} style={{width: "80px"}} />
                        <h5 className='text-capitalize mb-0'>{p.name}</h5>

                        <p className='mb-0'>{formatCLP(p.price ?? 0)}</p>

                        <div className='d-flex align-items-center'>
                            <button
                                className='btn btn-sm btn-danger mx-1'
                                onClick={() => decrease(p.id)}
                            >-
                            </button>

                            <span className='mx-1'>{qty}</span>

                            <button
                                className='btn btn-sm btn-success mx-1'
                                onClick={() => increase (p.id)}
                            >+</button>
                        </div>
                        <strong className='mb-0'>{formatCLP((p.price ?? 0) * qty)}</strong>

                        <button
                            className='btn btn-sm btn-outline-secundary ms-2'
                            onClick={() => removeFromCart(p.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                );
            })}

            <h4 className='mt-3'>Total: {formatCLP(total)}</h4>

            <div className='d-flex gap-2'>
                <button className='btn btn-outline-dark mt-2' onClick={clearCart}>
                    Vaciar carrito
                </button>
                <button className='btn btn-dark mt-2'>Pagar</button>
            </div>
        </div>
    );
}
