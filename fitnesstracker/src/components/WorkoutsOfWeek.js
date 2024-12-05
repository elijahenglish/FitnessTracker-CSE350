import React from 'react';
import { Link } from 'react-router-dom';

function WorkoutsOfWeek() {
    const workouts = [
        {
            category: 'Bulking Exercises',
            exercises: [
                { name: 'Heavy Squats', sets: '4 sets of 6 reps' },
                { name: 'Deadlifts', sets: '4 sets of 6 reps' },
                { name: 'Bench Press', sets: '4 sets of 6 reps' },
                { name: 'Overhead Press', sets: '4 sets of 8 reps' },
                { name: 'Weighted Pull-Ups', sets: '3 sets of 8 reps' },
                { name: 'Barbell Rows', sets: '4 sets of 8 reps' },
                { estimatedTime: '60 minutes' }
            ]
        },
        {
            category: 'Cutting Exercises',
            exercises: [
                { name: 'High-Intensity Interval Training (HIIT)', time: '20 minutes' },
                { name: 'Circuit Training', time: '30 minutes' },
                { name: 'Running', time: '45 minutes' },
                { name: 'Cycling', time: '60 minutes' },
                { name: 'Jump Rope', time: '15 minutes' },
                { name: 'Swimming', time: '30 minutes' },
                { estimatedTime: '90 minutes' }
            ]
        },
        {
            category: 'Upper Body Workouts',
            exercises: [
                { name: 'Push-Ups', sets: '3 sets of 15 reps' },
                { name: 'Pull-Ups', sets: '3 sets of 10 reps' },
                { name: 'Bench Press', sets: '4 sets of 12 reps' },
                { name: 'Shoulder Press', sets: '4 sets of 12 reps' },
                { name: 'Bicep Curls', sets: '3 sets of 15 reps' },
                { estimatedTime: '45 minutes' }
            ]
        },
        {
            category: 'Lower Body Workouts',
            exercises: [
                { name: 'Squats', sets: '4 sets of 12 reps' },
                { name: 'Lunges', sets: '3 sets of 15 reps' },
                { name: 'Deadlifts', sets: '4 sets of 10 reps' },
                { name: 'Leg Press', sets: '4 sets of 12 reps' },
                { name: 'Calf Raises', sets: '4 sets of 20 reps' },
                { estimatedTime: '50 minutes' }
            ]
        },
        {
            category: 'Core Workouts',
            exercises: [
                { name: 'Planks', sets: '3 sets of 1 minute' },
                { name: 'Russian Twists', sets: '3 sets of 20 reps' },
                { name: 'Crunches', sets: '3 sets of 25 reps' },
                { name: 'Leg Raises', sets: '3 sets of 20 reps' },
                { name: 'Mountain Climbers', sets: '3 sets of 30 seconds' },
                { estimatedTime: '40 minutes' }
            ]
        },
        {
            category: 'Cardio Workouts',
            exercises: [
                { name: 'Jogging', time: '30 minutes' },
                { name: 'Swimming', time: '30 minutes' },
                { name: 'Cycling', time: '45 minutes' },
                { name: 'Rowing', time: '20 minutes' },
                { name: 'Elliptical', time: '30 minutes' },
                { name: 'Jump Rope', time: '15 minutes' },
                { estimatedTime: '70 minutes' }
            ]
        }
    ];

    return (
        <section className="workouts">
            <div className="home-button-container">
                <Link to="/" className="home-button">Home</Link>
            </div>
            <h2>Workouts of the Week</h2>
            <div className="workout-columns">
                {workouts.map((workout, index) => (
                    <div key={index} className="workout-category">
                        <h3>{workout.category}</h3>
                        <ul>
                            {workout.exercises.map((exercise, idx) => (
                                <li key={idx}>
                                    {exercise.name} {exercise.sets || exercise.time}
                                </li>
                            ))}
                        </ul>
                        <p><strong>Estimated Workout Time</strong> {workout.exercises.find(exercise => exercise.estimatedTime)?.estimatedTime}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WorkoutsOfWeek;
