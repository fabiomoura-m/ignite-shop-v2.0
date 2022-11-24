import { createContext, ReactNode, useState } from 'react';

export interface Iproduct {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    numberPrice: number;
    description: string;
    defaultPriceId: string;
}

interface CartContextData {
    cartItems: Iproduct[];
    cartTotal: number;
    addToCart: (product: Iproduct) => void;
    checkIfItemAlreadyExists: (productId: string) => boolean;
    removeCartItem: (productId: string) => void;
}

interface CartContextProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<Iproduct[]>([]);

    const cartTotal = cartItems.reduce((total, product) => {
        return total + product.numberPrice;
    }, 0);

    function addToCart(product: Iproduct) {
        setCartItems(state => [...state, product]);
    }

    function removeCartItem(productId: string) {
        setCartItems(state => state.filter(item => item.id !== productId));
    }

    function checkIfItemAlreadyExists(productId: string) {
        return cartItems.some(product => product.id === productId);
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                checkIfItemAlreadyExists,
                removeCartItem,
                cartTotal
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
