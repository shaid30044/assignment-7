import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = ({ handleSelected }) => {
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
          <Card
            key={card.id}
            card={card}
            handleSelected={handleSelected}
          ></Card>
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  handleSelected: PropTypes.func.isRequired,
};

export default Cards;
