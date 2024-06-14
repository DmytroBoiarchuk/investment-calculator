import React from 'react';
import {formatter} from "../util/investment.js";
const TableBody = ({year, investmentData}) => {
    return (
        <tbody>
        <tr>
            <th>{year}</th>
            <th>{formatter.format(investmentData.investValue)}</th>
            <th>{formatter.format(investmentData.interest)}</th>
            <th>{formatter.format(investmentData.totalInterest)}</th>
            <th>{formatter.format(investmentData.investedCapital)}</th>

        </tr>
        </tbody>
    );
};

export default TableBody;