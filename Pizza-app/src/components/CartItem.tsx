import { type JSX } from "react";

interface CartItemProps {
  item: {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image?: string;
  };
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function CartItem({ item, onIncrease, onDecrease }: CartItemProps): JSX.Element {
  return (
    <li className="cart-item border-bottom p-2 d-flex align-items-center gap-3">
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="img-thumbnail"
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
        />
      )}

      <div className="flex-grow-1">
        <p className="mb-1 fw-bold">{item.title}</p>
        <p className="mb-2">{item.quantity * item.price} TL</p>
        <div className="actions d-flex align-items-center gap-2">
          <button onClick={onDecrease} className="btn btn-sm btn-outline-primary">
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={onIncrease} className="btn btn-sm btn-outline-primary">
            +
          </button>
        </div>
      </div>
    </li>
  );
}
