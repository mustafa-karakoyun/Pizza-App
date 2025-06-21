import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ThemeContext } from "../contexts/ThemeContext";


type PizzaProps = {
  name: string;
  description: string;
  image: string;
  price: number;
};

export default function Pizza({ name, description, image, price }: PizzaProps) {
  const { addItem } = useContext(CartContext);
  const { color } = useContext(ThemeContext);

  const handleAddItem = () => {
    addItem({ id: name, title: name, price,image });
    
  };

  return (
    <div className="col">
      <div className="card item">
        <img
          src={image}
          alt={name}
          className="card-img-top p-2 p-md-3 border-bottom"
        />
        <div className="card-body ">
          <h3 className={`cart-title text-${color}`}>{name}</h3>
          <p className="card-text">{description}</p>
          <div className="item-price d-flex justify-content-between align-items-center mt-3">
            
            <b  className={`text-${color}`}>{price} TL</b>
            <button
              //className="add-to-cart-button"
              className={`add-to-cart-button bg-${color}`}
              onClick={handleAddItem}
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

