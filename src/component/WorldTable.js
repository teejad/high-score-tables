import React from 'react'


function WorldTable({ allCountryScores }) {
    allCountryScores.sort((a, b) => b.scores[0].s - a.scores[0].s);
    const countryTable = allCountryScores.map((country, i) => {
        return (
            <tr key={`country${i}`}>
                <th>{country.name}</th>
                <td>{country.scores[0].s}</td>
            </tr>
        );
    });
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">HIGH SCORE: WORLD</th>
                </tr>
            </thead>
            <tbody>{countryTable}</tbody>
        </table>

    );
}


export default WorldTable;