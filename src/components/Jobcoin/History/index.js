import React, { useEffect, useState } from 'react';
import Plot from "react-plotly.js";
import moment from 'moment';

import { Wrapper } from './styled';

const History = ({ userAddress, data }) => {
  const [lineGraphData, setLineGraphData] = useState({});

  useEffect(() => {
    if (data) {

      const formattedLineGraphData = { 
        timestamps: [], 
        balances: [], 
        tooltips: [] 
      };

      //I looped from most recent to the earliest in order to calculate the balances for each transaction by using the current
      //balance as the starting point in case theres an issue with the earliest transaction not being available or if at some point we
      //limit how many transactions are shown which would mean cutting off transactions starting from the earliest one
      //I added another solution below  that loops from the earliest to most recent transaction and calculates
      //balance for each transaction by using the earliest transaction amount as the starting point

      const { balance, transactions } = data;
      let currentBalance = parseFloat(balance);
      for (let i = transactions.length - 1; i >= 0; i--) {
        const transaction = transactions[i];
        const { timestamp, toAddress, fromAddress, amount } = transaction;

        formattedLineGraphData.timestamps.unshift(moment(timestamp).format('MM/DD/YY hh:ss'));
        formattedLineGraphData.balances.unshift(currentBalance);
        formattedLineGraphData.tooltips.unshift(`To: ${toAddress}<br>From: ${fromAddress}</br>Transaction Amount: ${amount}`);

        const transactionAmount = parseFloat(amount);
        currentBalance = toAddress === userAddress ? currentBalance - transactionAmount : currentBalance + transactionAmount;
      }
      setLineGraphData(formattedLineGraphData);

      // let startingBalance = 0;
      // transactions.forEach((transaction, i) => {
      //   const { timestamp, toAddress, fromAddress, amount } = transaction;
      //   formattedLineGraphData.timestamps.push(moment(timestamp).format('MM/DD/YY hh:ss'));
      //   formattedLineGraphData.tooltips.push(`To: ${toAddress}<br>From: ${fromAddress}</br>Transaction Amount: ${amount}`);

      //   const transactionAmount = parseFloat(amount);
      //   startingBalance = toAddress === userAddress ? startingBalance + transactionAmount : startingBalance - transactionAmount;
      //   formattedLineGraphData.balances.push(startingBalance);
      // })
      // setLineGraphData(formattedLineGraphData);
    }
  }, [data]);

  //hovering over points on graph will show tooltip with extra data
  //in the case the graph becomes zoomed in, you can double click the graph to zoom back out
  return (
    <Wrapper>
      <Plot 
        data={[
          {
            type: 'scatter',
            mode: 'lines+markers',
            line: {shape: 'spline'}, 
            type: 'scatter',
            x: lineGraphData.timestamps,
            y: lineGraphData.balances,
            hovertemplate: '<br>Date: %{x}<br>' +
            '%{text}<br>' + 
            'Balance: %{y}' +
            '<extra></extra>',
            text: lineGraphData.tooltips,
          }
        ]}
        layout={
          {
            width: 1200,
            height: 800,
            margin: { l: 60 , r: 50, b: 100, t: 25, pad: 10 },
            title: 'Balance and Transaction History',

          }
        }
      />
    </Wrapper>
  )
};

export default History;