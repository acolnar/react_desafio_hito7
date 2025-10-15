import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

export const formatCLP = (n) =>
    new Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"}).format(n);

export function CartProvider({children}){
    const[items, setItems] = useState ([]);

    const addToCart = (pizza) => {
        setItems((prev) => {
            const found = prev.find((p) => p.id === pizza.id);
            if (found) {
                return prev.map((p) => (p.id === pizza.id ? {...p, qty: p.qty + 1} : p));
            }
            return[...prev, {id: pizza.id, name: pizza.name, price: pizza.price, img: pizza.img, qty: 1}];
        });
    };

    const increase = (id) => {
        setItems((prev) => prev.map((p) => (p.id === id ? {...p, qty: p.qty + 1} : p)));
    };

    const decrease = (id) => {
        setItems((prev) =>
        prev
            .map((p) => (p.id === id ? {...p, qty: p.qty - 1} : p))
            .filter((p) => p.qty > 0)
        );
    };

    const removeFromCart = (id) => {
        setItems((prev) => prev.filter((p) => p.id !== id));
    };

    const clearCart = () => setItems ([]);

    const total = useMemo(
        () => items.reduce((acc, p) => acc + p.price * p.qty, 0),
        [items]
    );

    const value = {items, addToCart, increase, decrease, removeFromCart, clearCart, total};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}