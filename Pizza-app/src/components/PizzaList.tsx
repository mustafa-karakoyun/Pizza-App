import { useEffect, useState } from "react";
import Pizza from "./Pizza";

type PizzaData = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
};

export default function PizzaList() {
  const [loadedPizzas, setLoadedPizzas] = useState<PizzaData[]>([]);

  useEffect(() => {
    async function getPizzaList() {
      const response = await fetch("http://localhost:3000/pizzas");

      if (!response.ok) {
        console.error("Veri alınamadı");
        return;
      }

      const pizzas: PizzaData[] = await response.json();

      // Görsel yolunu tam URL'ye çeviriyoruz
      const updatedPizzas = pizzas.map((pizza) => ({
        ...pizza,
        image: `http://localhost:3000/images/${pizza.image}`,
      }));

      setLoadedPizzas(updatedPizzas);
    }

    getPizzaList();
  }, []);

  return (
    <div className="pizza-list">
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
        {loadedPizzas.map((pizza) => (
          <Pizza
            key={pizza.id}
            name={pizza.title}
            description={pizza.description}
            image={pizza.image}
            price={parseInt(pizza.price)}
          />
        ))}
      </div>
    </div>
  );
}


