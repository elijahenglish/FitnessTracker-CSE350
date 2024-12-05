import React, { useState } from 'react';

function BMICalculator() {
    const [weight, setWeight] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [bmi, setBmi] = useState(null);

    const calculateBMI = () => {
        const totalHeightInInches = (parseInt(heightFeet) * 12) + parseInt(heightInches);
        const calculatedBmi = ((weight / (totalHeightInInches * totalHeightInInches)) * 703).toFixed(2);
        setBmi(calculatedBmi);
    };

    return (
        <section className="bmi-calculator">
            <h2>BMI Calculator</h2>
            <div className="form-group">
                <label htmlFor="weight">Weight (lbs)</label>
                <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter your weight in lbs"
                />
            </div>
            <div className="form-group">
                <label htmlFor="heightFeet">Height</label>
                <div className="height-inputs">
                    <input
                        type="number"
                        id="heightFeet"
                        value={heightFeet}
                        onChange={(e) => setHeightFeet(e.target.value)}
                        placeholder="Feet"
                        min="0"
                    />
                    <input
                        type="number"
                        id="heightInches"
                        value={heightInches}
                        onChange={(e) => setHeightInches(e.target.value)}
                        placeholder="Inches"
                        min="0"
                        max="11"
                    />
                </div>
            </div>
            <button onClick={calculateBMI}>Calculate BMI</button>
            {bmi && (
                <div className="bmi-result">
                    <h3>Your BMI: {bmi}</h3>
                </div>
            )}
            <div className="bmi-table">
                <h3>BMI Categories</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>BMI Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Underweight</td>
                            <td>Less than 18.5</td>
                        </tr>
                        <tr>
                            <td>Normal weight</td>
                            <td>18.5 - 24.9</td>
                        </tr>
                        <tr>
                            <td>Overweight</td>
                            <td>25 - 29.9</td>
                        </tr>
                        <tr>
                            <td>Obesity</td>
                            <td>30 or greater</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default BMICalculator;
