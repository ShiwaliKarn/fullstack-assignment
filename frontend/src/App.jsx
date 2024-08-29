import React from "react";
import Header from "./Components/Header/Header";
import SearchBox from "./Components/SearchBox/SearchBox";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardDetail from "./Components/CardDetail/CardDeatil.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <SearchBox />
      <Routes>
        <Route path="/cards/:title" element={<CardDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
