import React, { useState, useEffect } from "react";
import DayCard from "./components/DayCard";
import WeightChart from "./components/WeightChart";
import ConsistencyChart from "./components/ConsistencyChart";
import mealPlan from "./data/mealPlan";

function App() {

  const initialData = Array.from({ length: 30 }, () => ({
    meals: [0, 0, 0, 0],
    water: 0,
    workout: 0,
    weight: null
  }));

  const [daysData, setDaysData] = useState(() => {
    return JSON.parse(localStorage.getItem("pcodTrackerData")) || initialData;
  });

  useEffect(() => {
    localStorage.setItem("pcodTrackerData", JSON.stringify(daysData));
  }, [daysData]);

  const updateDay = (index, newData) => {
    const updated = [...daysData];
    updated[index] = newData;
    setDaysData(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>PCOD + Prediabetes Tracker</h1>

      {daysData.map((day, index) => (
        <DayCard
          key={index}
          dayIndex={index}
          dayData={day}
          updateDay={updateDay}
        />
      ))}

      <h2>Weight Progress</h2>
      <WeightChart daysData={daysData} />

      <h2>Consistency Progress</h2>
      <ConsistencyChart daysData={daysData} />
    </div>
  );
}

export default App;