import React from "react";

const calorieMap = {
  Breakfast: 350,
  Lunch: 450,
  Snack: 200,
  Dinner: 350
};

function WeightChart({ dayIndex, dayData, updateDay }) {

  const meals = ["Breakfast", "Lunch", "Snack", "Dinner"];

  const handleMealChange = (mealIndex) => {
    const updatedMeals = [...dayData.meals];
    updatedMeals[mealIndex] = updatedMeals[mealIndex] ? 0 : 1;
    updateDay(dayIndex, { ...dayData, meals: updatedMeals });
  };

  const totalCalories = meals.reduce((total, meal, idx) => {
    return total + (dayData.meals[idx] ? calorieMap[meal] : 0);
  }, 0);

  const consistency =
    Math.round((dayData.meals.reduce((a, b) => a + b, 0) / 4) * 100);

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px 0", borderRadius: "10px" }}>
      <h3>Day {dayIndex + 1}</h3>

      {meals.map((meal, idx) => (
        <div key={meal}>
          <input
            type="checkbox"
            checked={dayData.meals[idx]}
            onChange={() => handleMealChange(idx)}
          />
          <label> {meal}</label>
        </div>
      ))}

      <br />

      Water:
      <input
        type="number"
        value={dayData.water}
        onChange={(e) =>
          updateDay(dayIndex, { ...dayData, water: parseInt(e.target.value) || 0 })
        }
      />

      <br /><br />

      Workout:
      <input
        type="checkbox"
        checked={dayData.workout}
        onChange={(e) =>
          updateDay(dayIndex, { ...dayData, workout: e.target.checked ? 1 : 0 })
        }
      />

      <br /><br />

      Weight:
      <input
        type="number"
        step="0.1"
        value={dayData.weight || ""}
        onChange={(e) =>
          updateDay(dayIndex, {
            ...dayData,
            weight: parseFloat(e.target.value) || null
          })
        }
      />

      <br /><br />

      <strong>Calories: {totalCalories} kcal</strong>
      <br />
      <strong>Consistency: {consistency}%</strong>
    </div>
  );
}

export default WeightChart;