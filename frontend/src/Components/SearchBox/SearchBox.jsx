import "./SearchBox.css";
import axios from "axios";
import { useEffect, useState } from "react";

const SearchBox = () => {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/listings");
        setCards(response.data);
        setFilteredCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredCards(
      cards.filter((card) => card.title.toLowerCase().includes(query))
    );
  };

  return (
    <section>
      <div className="search-box">
        <h1>How can we help?</h1>
        <div className="search-input-div">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
          <img
            className="input-arrow"
            src="/arrow-right-solid.svg"
            alt="arrow icon"
          />
        </div>
      </div>
      <div className="card-container">
        {filteredCards.map((card) => (
          <div className="card" key={card.id}>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchBox;
