import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-div">
        <img src="/logo.png" alt="logo" className="logo" />
        <span className="abstract">Abstract</span> | Help Center
      </div>
      <button className="header-button">Submit a request</button>
    </header>
  );
};

export default Header;
