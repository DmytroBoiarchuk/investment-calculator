import React from "react";
import TableBody from "./TableBody.jsx";

const Result = ({ investmentData }) => {
  return (
    <table id="result">
      <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total interest</th>
        <th>Invested Capital</th>
      </tr>
      </thead>
      {investmentData.map((year, i) =><TableBody key={i} year={i+1} investmentData={year}/>)}

    </table>
  );
};

export default Result;
