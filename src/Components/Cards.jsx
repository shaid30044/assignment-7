import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";

const Cards = ({ handleSelect }) => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setCard(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-6">
        {card.map((card) => (
          <Card key={card.id} card={card} handleSelect={handleSelect}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
