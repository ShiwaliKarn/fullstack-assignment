import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const CardDetail = () => {
  const { title } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/cards/${title}`
        );
        setCard(response.data);
      } catch (error) {
        console.error("Error fetching card:", error);
      }
    };

    fetchCard();
  }, [title]);

  if (!card) return <p>Loading...</p>;

  return (
    <div>
      <h1>{card.title}</h1>
      <p>{card.description}</p>
    </div>
  );
};

export default CardDetail;
