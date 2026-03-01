import React from "react";
import { Line } from "react-chartjs-2";

function ConsistencyChart({ daysData }) {

  const consistencyData = daysData.map(d =>
    Math.round((d.meals.reduce((a, b) => a + b, 0) / 4) * 100)
  );

  const data = {
    labels: daysData.map((_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Consistency %",
        data: consistencyData,
        borderColor: "rgb(255,99,132)",
        tension: 0.3
      }
    ]
  };

  return <Line data={data} />;
}

export default ConsistencyChart;