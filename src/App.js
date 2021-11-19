import './App.css';
import allCountryScores from "./data/allCountryScores";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Heading from "./component/Heading";
import CountryTable from "./component/CountryTable";
//Write a React app which displays high score tables for the given data.

function App() {
  return (
    <div className="App">
      <Heading/>
      <section className="country-table">
        <h2>High Score Tables Per Country</h2>
      {/* <EachCountryTable scores={allCountryScores} /> */}

      {allCountryScores.map((country, i) => (
          <CountryTable key={i} country={country} />
        ))}
        </section>

    </div>
  );
}

export default App;
