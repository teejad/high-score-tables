import './App.css';
import allCountryScores from "./data/allCountryScores";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import Heading from "./component/Heading";
import CountryTable from "./component/CountryTable";
import WorldTable from "./component/WorldTable";

//Write a React app which displays high score tables for the given data.

const App = ()=> {
  const [currentSortedList, setSortedList] = useState(allCountryScores);
  const [alphabetOrder, setAlphabetOrder] = useState(-1);

function sortCountryList(){
  setSortedList (()=> [...currentSortedList].sort((a, b) => {

    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return alphabetOrder;
    }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -alphabetOrder;
    } return 0;
  }
));


  setAlphabetOrder(alphabetOrder * -1);
}


  return (
    <div className="App">
      {/* <Heading/> */}
      <div className="container">
      <button className="sortList" onClick={sortCountryList}>Sort by Country
        Sort: {alphabetOrder === -1 ? "A-Z" : "Z-A"}
        </button>
      <section className="country-table">
        
        <h2>High Score Tables Per Country</h2>
      {/* <EachCountryTable scores={allCountryScores} /> */}

      {currentSortedList.map((country) => (
          <CountryTable key={country.name} country={country} />
        ))}
        </section>
        <section className="world-table">
        <h2>High Score Tables Worldwide</h2>
        <WorldTable allCountryScores={allCountryScores} />
        </section>
      </div>

    </div>
  );
}


export default App;
