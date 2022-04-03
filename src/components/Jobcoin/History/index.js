import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Plot from "react-plotly.js";

const History = ({ userAddress, data }) => {
  const [plotData, setPlotData] = useState({});

  useEffect(() => {
    if (data) {
      const formattedPlotData = { 
        timestamps: [], 
        balances: [], 
        tooltips: [] 
      };

      const { balance, transactions } = data;
      let balanceHistory = parseFloat(balance);

      for (let i = transactions.length - 1; i >= 0; i--) {
        const transaction = transactions[i];
        const { timestamp, toAddress, fromAddress, amount } = transaction;

        formattedPlotData.timestamps.unshift(timestamp);
        formattedPlotData.balances.unshift(balanceHistory);
        formattedPlotData.tooltips.unshift(`To: ${toAddress}<br>From: ${fromAddress}</br>Transaction Amount: ${amount}`);

        const transactionAmount = parseFloat(amount);
        balanceHistory = toAddress === userAddress ? balanceHistory - transactionAmount : balanceHistory + transactionAmount;
      }
      setPlotData(formattedPlotData);
    }
  }, [data]);

  return (
    <div>
      <Plot 
        data={[
          {
            type: 'scatter',
            mode: 'lines+markers',
            x: plotData.timestamps,
            y: plotData.balances,
            hovertemplate: 'Balance: %{y}' +
            '<br>Date: %{x}<br>' +
            '%{text}',
            text: plotData.tooltips,
          }
        ]}
        layout={
          {
            width: 1000,
            height: 500,
            title: 'Balance and Transaction History'
          }
        }
      />
    </div>
  )
};

export default History;