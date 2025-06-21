import {
  createContext,
  useReducer,
  type ReactNode,
  type JSX,
} from "react";
import cartReducer from "../reducers/cartReducer";


interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  [key: string]: any;
}


interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  updateItem: () => void;
  deleteItem: (id:string) => void;
  clearAll: () => void;
}


export const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  updateItem: () => {},
  deleteItem: () => {},
  clearAll: () => {},
});


interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps): JSX.Element {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });


  function addItem(item: Omit<CartItem, "quantity">): void {
    dispatch({ type: "ADD_ITEM", item });
  }

  
  function updateItem(): void {}

function deleteItem(id: string): void {
  dispatch({ type: "REMOVE_ITEM", id });
}
  function clearAll(): void {}

  const cartContext: CartContextType = {
    items: cart.items,
    addItem,
    updateItem,
    deleteItem,
    clearAll,
  };

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
}

