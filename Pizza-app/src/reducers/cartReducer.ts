// export default function cartReducer(state, action) {
//   if (action.type == "ADD_ITEM") {
//     const index = state.items.findIndex((item) => item.id === action.item.id);

//     const updatedItems = [...state.items];

//     if (index > -1) {
//       const existingItem = state.items[index];

//       const updatedItem = {
//         ...existingItem, // title, quantity:2
//         quantity: existingItem.quantity + 1,
//       };

//       updatedItems[index] = updatedItem;
//     } else {
//       updatedItems.push({ ...action.item, quantity: 1 }); // title,id,price,quantity
//     }

//     return { ...state, items: updatedItems };
//   }

//   if (action.type == "REMOVE_ITEM") {
//   }

//   return state;
// }

// type CartItem = {
//   id: string;
//   title: string;
//   price: number;
//   quantity: number;
// };

// type CartState = {
//   items: CartItem[];
// };

// type CartAction =
//   | { type: "ADD_ITEM"; item: Omit<CartItem, "quantity"> }
//   | { type: "REMOVE_ITEM"; id: string };

// export default function cartReducer(state: CartState, action: CartAction): CartState {
//   if (action.type === "ADD_ITEM") {
//     const index = state.items.findIndex((item) => item.id === action.item.id);
//     const updatedItems = [...state.items];

//     if (index > -1) {
//       const existingItem = state.items[index];
//       const updatedItem = {
//         ...existingItem,
//         quantity: existingItem.quantity + 1,
//       };
//       updatedItems[index] = updatedItem;
//     } else {
//       updatedItems.push({ ...action.item, quantity: 1 });
//     }

//     return { ...state, items: updatedItems };
//   }

//   if (action.type === "REMOVE_ITEM") {
//     const filteredItems = state.items.filter((item) => item.id !== action.id);
//     return { ...state, items: filteredItems };
//   }

//   return state;
// }
interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
}

type Action =
  | { type: "ADD_ITEM"; item: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "CLEAR_CART" };

export default function cartReducer(state: CartState, action: Action): CartState {
  if (action.type === "ADD_ITEM") {
    const index = state.items.findIndex((item) => item.id === action.item.id);
    const updatedItems = [...state.items];

    if (index > -1) {
      const existingItem = state.items[index];
      const updatedItem: CartItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[index] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const index = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[index];
    const updatedItems = [...state.items];

    if (existingItem.quantity === 1) {
      updatedItems.splice(index, 1); // Hata vardı, existingItem değil index olmalı
    } else {
      const updatedItem: CartItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[index] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}
