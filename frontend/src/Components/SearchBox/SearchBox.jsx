import "./SearchBox.css";

const SearchBox = () => {
  return (
    <section className="search-box">
      <h1>How can we help?</h1>
      <div className="search-input-div">
        <input type="text" className="search-input" placeholder="Search" />
        <img
          className="input-arrow"
          src="/arrow-right-solid.svg"
          alt="arrow icon"
        />
      </div>
    </section>
  );
};

export default SearchBox;
