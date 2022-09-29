import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    useEffect( () => {
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    } , [])
    return (
        <div className='exercises'>
            <div className="container">
                <div className="exercise">
                    <h2>exercise</h2>
                    {
                        exercises.map(exercise => <Exercise exercise={exercise}></Exercise>)
                    }
                </div>
                <div className="information">
                    <h2>Information</h2>
                </div>
            </div>
        </div>
    );
};

export default Exercises;