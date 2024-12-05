import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function CalorieCalculator() {
    const [foods, setFoods] = useState([]);
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');
    const [calorieLimit, setCalorieLimit] = useState(2000);

    const addFood = () => {
        setFoods([...foods, { name: foodName, calories: parseInt(calories) || 0 }]);
        setFoodName('');
        setCalories('');
    };

    const totalCalories = foods.reduce((acc, food) => acc + food.calories, 0);
    const limit = isNaN(calorieLimit) || calorieLimit === '' ? 0 : calorieLimit;
    const remainingCalories = Math.max(limit - totalCalories, 0);

    const data = {
        labels: ['Consumed', 'Remaining'],
        datasets: [
            {
                data: [totalCalories, remainingCalories],
                backgroundColor: ['#4caf50', '#f4f8fb'],
                hoverBackgroundColor: ['#2e7d32', '#d3e3eb'],
            },
        ],
    };

    return (
        <section className="calorie-intake-calculator">
            <h2>Calorie Intake Calculator</h2>
            <div className="calorie-content">
                <div className="input-section">
                    <div className="form-group">
                        <label htmlFor="calorieLimit">Calorie Limit</label>
                        <input
                            type="number"
                            id="calorieLimit"
                            value={calorieLimit}
                            onChange={(e) => setCalorieLimit(parseInt(e.target.value) || 0)}
                            placeholder="Enter your daily calorie limit"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="foodName">Food Name</label>
                        <input
                            type="text"
                            id="foodName"
                            value={foodName}
                            onChange={(e) => setFoodName(e.target.value)}
                            placeholder="Enter food name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="calories">Calories</label>
                        <input
                            type="number"
                            id="calories"
                            value={calories}
                            onChange={(e) => setCalories(parseInt(e.target.value) || 0)}
                            placeholder="Enter calorie amount"
                        />
                    </div>
                    <button onClick={addFood}>Add Food</button>
                </div>
                <div className="calorie-chart">
                    <h3>Recommended Daily Calorie Intake Based on BMI</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>BMI Category</th>
                                <th>Calorie Range</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Underweight</td>
                                <td>2200 - 2400 calories</td>
                            </tr>
                            <tr>
                                <td>Normal weight</td>
                                <td>2000 - 2200 calories</td>
                            </tr>
                            <tr>
                                <td>Overweight</td>
                                <td>1800 - 2000 calories</td>
                            </tr>
                            <tr>
                                <td>Obesity</td>
                                <td>1600 - 1800 calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="pie-section">
                    <div className="chart-container">
                        <Pie data={data} options={{ maintainAspectRatio: false }} />
                    </div>
                    <div className="calorie-summary">
                        <h3>Calorie Intake Summary</h3>
                        <h4>Total Calories: {totalCalories}</h4>
                        <h4>Calorie Limit: {limit}</h4>
                        <h4>
                            {totalCalories > limit ? `Over by ${totalCalories - limit} calories` : `Under by ${limit - totalCalories} calories`}
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CalorieCalculator;
