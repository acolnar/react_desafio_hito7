import { useUser } from "../context/UserContext";

export default function Cart(){
    const{token} = useUser();

    const handlePay = () => {
        if (!token) return;
        alert("Pago realizado");
    };

    return(
        <main className="max-w-3xl mx-auto p-4">
            <h2 className="text-xl font-semibold mb-4">Carrito</h2>

            <div className="border rounded-lg p-4 mb-4">Resumen de su compra</div>

            <button
                onClick={handlePay}
                disabled={!token}
                className={`px-4 py-2 rounded-md text-white ${
                    !token ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:opacity-90 "
                }`}
                title={!token ? "Debes iniciar una sesión para pagar" : "Procede al pago"}
                >Pagar

            </button>
        </main>
    );
}