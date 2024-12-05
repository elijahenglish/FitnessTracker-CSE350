import React from 'react';
import { Link } from 'react-router-dom';

const foodGroups = [
    {
        category: 'Cutting',
        foods: [
            { name: 'Chicken Breast', serving: '100g', calories: '165' },
            { name: 'Broccoli', serving: '100g', calories: '55' },
            { name: 'Quinoa', serving: '1 cup', calories: '222' },
        ],
    },
    {
        category: 'Bulking',
        foods: [
            { name: 'Oatmeal', serving: '1 cup', calories: '154' },
            { name: 'Whole Eggs', serving: '2 eggs', calories: '140' },
            { name: 'Salmon', serving: '100g', calories: '206' },
        ],
    },
    {
        category: 'Stomach Health',
        foods: [
            { name: 'Greek Yogurt', serving: '1 cup', calories: '100' },
            { name: 'Bananas', serving: '1 medium', calories: '105' },
            { name: 'Ginger Tea', serving: '1 cup', calories: '2' },
        ],
    },
    {
        category: 'Acne Treatment',
        foods: [
            { name: 'Avocado', serving: '100g', calories: '160' },
            { name: 'Blueberries', serving: '1 cup', calories: '84' },
            { name: 'Salmon', serving: '100g', calories: '206' },
        ],
    },
    {
        category: 'Heart Health',
        foods: [
            { name: 'Oats', serving: '1 cup', calories: '154' },
            { name: 'Almonds', serving: '1 ounce', calories: '164' },
            { name: 'Spinach', serving: '100g', calories: '23' },
        ],
    },
    {
        category: 'Brain Function',
        foods: [
            { name: 'Walnuts', serving: '1 ounce', calories: '185' },
            { name: 'Turmeric', serving: '1 teaspoon', calories: '8' },
            { name: 'Dark Chocolate', serving: '1 ounce', calories: '155' },
        ],
    },
    {
        category: 'Energy Boost',
        foods: [
            { name: 'Bananas', serving: '1 medium', calories: '105' },
            { name: 'Chia Seeds', serving: '2 tablespoons', calories: '137' },
            { name: 'Sweet Potatoes', serving: '100g', calories: '86' },
        ],
    },
    {
        category: 'Muscle Recovery',
        foods: [
            { name: 'Cottage Cheese', serving: '1 cup', calories: '206' },
            { name: 'Tart Cherry Juice', serving: '1 cup', calories: '150' },
            { name: 'Chicken Breast', serving: '100g', calories: '165' },
        ],
    },
    {
        category: 'Weight Loss',
        foods: [
            { name: 'Apple', serving: '1 medium', calories: '95' },
            { name: 'Cucumber', serving: '1 cup', calories: '16' },
            { name: 'Lentils', serving: '1 cup', calories: '230' },
        ],
    },
    {
        category: 'Immunity Boost',
        foods: [
            { name: 'Oranges', serving: '1 medium', calories: '62' },
            { name: 'Red Bell Pepper', serving: '1 cup', calories: '46' },
            { name: 'Garlic', serving: '1 clove', calories: '5' },
        ],
    },
];

function BestFoodsForDiets() {
    return (
        <section className="best-foods-for-diets">
            <div className="home-button-container">
                <Link to="/" className="home-button">Home</Link>
            </div>
            <div className="food-groups">
                {foodGroups.map((group, index) => (
                    <div className="food-group" key={index}>
                        <h3>{group.category}</h3>
                        <ul>
                            {group.foods.map((food, i) => (
                                <li key={i}>
                                    <strong>{food.name}</strong>: {food.serving} - {food.calories} calories
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BestFoodsForDiets;
