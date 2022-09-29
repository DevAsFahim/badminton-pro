import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Information from '../Information/Information';
import './Exercises.css'

const Exercises = () => {
    const [exerciseTime, setExerciseTime] = useState(0)
    const [exercises, setExercises] = useState([]);
    useEffect( () => {
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    } , []);

    const addToInfo = (time) => {
        setExerciseTime(exerciseTime + time);
        console.log(time);
    }
    

    return (
        <div className='exercises'>
            <div className="container">
                <div className="exercise-container py-5 row row-cols-1 row-cols-md-3 g-4">
                    {
                        exercises.map(exercise => <Exercise 
                            key={exercise.id}
                            exercise={exercise}
                            addToInfo={addToInfo}
                        ></Exercise>)
                    }
                </div>
                <div className="information-container">
                    <h2 onClick={addToInfo}>Information</h2>
                    <Information exerciseTime={exerciseTime}></Information>
                </div>
            </div>
        </div>
    );
};

export default Exercises;