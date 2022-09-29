import React, { useState } from 'react';
import './Information.css'

const Information = (props) => {
    const [breakTime, setBreakTime] = useState(0);
    const addBreakTime = (time) => {
        setBreakTime(time)
    }
    return (
        <div>
            <h5>Exercise Details</h5>
            <div className="break_time">
                <span onClick={()=> addBreakTime(10)}>10m</span>
                <span onClick={()=> addBreakTime(20)}>20m</span>
                <span onClick={()=> addBreakTime(40)}>40m</span>
                <span onClick={()=> addBreakTime(60)}>60m</span>
            </div>
            <div className="exercise_time">
                <p>Exercise time: {props.exerciseTime}minutes</p>
                <p>Break time: {breakTime}minutes</p>
            </div>
        </div>
    );
};

export default Information;