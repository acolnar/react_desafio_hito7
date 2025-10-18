import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({children}){
    const[items, setItems] = useState ([]);
    const total = items.reduce((acc, p) => acc + p.price * p.qty, 0);

    const value = useMemo(() => ({items, setItems, total}), [items, total]);
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart () {
    return useContext(CartContext);
}

export const formatCLP = (n) =>
    n?.toLocalString?.("es-CL", {style: "currency", currency: "CLP"}) ?? "$0";