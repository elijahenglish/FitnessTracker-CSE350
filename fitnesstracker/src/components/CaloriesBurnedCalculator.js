import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function CaloriesBurnedCalculator() {
    const [exerciseType, setExerciseType] = useState('');
    const [durationHours, setDurationHours] = useState('');
    const [durationMinutes, setDurationMinutes] = useState('');
    const [weight, setWeight] = useState('');
    const [goal, setGoal] = useState('');
    const [exercises, setExercises] = useState([]);
    const [totalCaloriesBurned, setTotalCaloriesBurned] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('#ff0000'); // Initialize with red color

    const exerciseMetValues = {
        'Walking/Running': 6,
        'Gym Activities': 8,
        'Training and Sports Activities': 10,
        'Outdoor Activities': 7,
        'Home/Life Activities': 4
    };

    const addExercise = () => {
        const durationInMinutes = (parseInt(durationHours) || 0) * 60 + (parseInt(durationMinutes) || 0);
        const metValue = exerciseMetValues[exerciseType] || 0;
        const weightValue = parseFloat(weight) || 0;
        const calories = ((metValue * 3.5 * weightValue * durationInMinutes) / 200).toFixed(2);

        if (!isNaN(calories) && calories > 0) {
            const duration = `${durationHours ? `${durationHours}h ` : ''}${durationMinutes ? `${durationMinutes}m` : ''}`.trim();
            const updatedExercises = [...exercises, { type: exerciseType, duration: duration, weight: weight, calories: parseFloat(calories) }];
            const newTotalCaloriesBurned = totalCaloriesBurned + parseFloat(calories);
            setTotalCaloriesBurned(newTotalCaloriesBurned);

            // Calculate the percentage of the goal reached
            const percentage = (newTotalCaloriesBurned / (goal || 1)) * 100;

            // Update background color based on the percentage of the goal reached
            if (percentage <= 25) {
                setBackgroundColor('#ff0000'); // Red
            } else if (percentage <= 50) {
                setBackgroundColor('#ff8000'); // Orange
            } else if (percentage <= 75) {
                setBackgroundColor('#ffff00'); // Yellow
            } else {
                setBackgroundColor('#00ff00'); // Green
            }

            setExercises(updatedExercises);
        }

        setExerciseType('');
        setDurationHours('');
        setDurationMinutes('');
    };

    const data = {
        labels: ['Calories Burned'],
        datasets: [
            {
                label: 'Calories Burned',
                data: [totalCaloriesBurned],
                backgroundColor: [backgroundColor],
                borderColor: [backgroundColor],
                borderWidth: 1,
            },
            {
                label: 'Calorie Goal',
                data: [parseFloat(goal) || 0],
                backgroundColor: '#ff7043',
                borderColor: '#ff7043',
                borderWidth: 1,
                type: 'line',
                borderDash: [5, 5],
                fill: false,
            }
        ]
    };

    return (
        <section className="calories-burned-calculator">
            <h2>Calories Burned Calculator</h2>
            <div className="calories-burned-content">
                <div className="input-section">
                    <div className="form-group">
                        <label htmlFor="exerciseType">Exercise Type</label>
                        <select
                            id="exerciseType"
                            value={exerciseType}
                            onChange={(e) => setExerciseType(e.target.value)}
                        >
                            <option value="">Select exercise type</option>
                            <option value="Walking/Running">Walking/Running</option>
                            <option value="Gym Activities">Gym Activities</option>
                            <option value="Training and Sports Activities">Training and Sports Activities</option>
                            <option value="Outdoor Activities">Outdoor Activities</option>
                            <option value="Home/Life Activities">Home/Life Activities</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Duration</label>
                        <div className="duration-inputs">
                            <input
                                type="number"
                                id="durationHours"
                                value={durationHours}
                                onChange={(e) => setDurationHours(e.target.value)}
                                placeholder="Hours"
                                min="0"
                            />
                            <input
                                type="number"
                                id="durationMinutes"
                                value={durationMinutes}
                                onChange={(e) => setDurationMinutes(e.target.value)}
                                placeholder="Minutes"
                                min="0"
                                max="59"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="weight">Body Weight (Pounds)</label>
                        <input
                            type="number"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="Weight in pounds"
                            min="0"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="goal">Calorie Goal</label>
                        <input
                            type="number"
                            id="goal"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                            placeholder="Enter calorie goal"
                            min="0"
                        />
                    </div>
                    <button onClick={addExercise}>Add Exercise</button>
                </div>
                <div className="exercise-table">
                    <h3>Input Exercises</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Exercise Type</th>
                                <th>Duration</th>
                                <th>Body Weight</th>
                                <th>Calories Burned</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exercises.map((exercise, index) => (
                                <tr key={index}>
                                    <td>{exercise.type}</td>
                                    <td>{exercise.duration}</td>
                                    <td>{exercise.weight} lbs</td>
                                    <td>{exercise.calories}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="chart-section">
                    <Bar data={data} options={{ plugins: { legend: { display: true } } }} />
                </div>
            </div>
            {totalCaloriesBurned >= parseFloat(goal) && goal && (
                <p className="congratulations">Congratulations on reaching your goal!</p>
            )}
            <p className="disclaimer">This calculation is purely an estimation and is not 100% accurate based on your specific regimens.</p>
        </section>
    );
}

export default CaloriesBurnedCalculator;
