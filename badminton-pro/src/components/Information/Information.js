import React, { useState } from 'react';
import './Information.css'

const Information = (props) => {
    const [breakTime, setBreakTime] = useState(0);
    const addBreakTime = (time) => {
        setBreakTime(time)
    }
    return (
        <div className='information'>
            <h5>Add a Break</h5>
            <div className="break_time">
                <span onClick={()=> addBreakTime(10)}>10m</span>
                <span onClick={()=> addBreakTime(20)}>20m</span>
                <span onClick={()=> addBreakTime(40)}>40m</span>
                <span onClick={()=> addBreakTime(60)}>60m</span>
            </div>
            <div className="exercise_time">
                <h5 className=''>Exercise Details</h5>
                <p><strong>Exercise time:</strong> <span><b>{props.exerciseTime}</b> <small className="text-muted">minutes</small></span> </p>
                <p><strong>Break time:</strong> <span><b>{breakTime}</b> <small className="text-muted">minutes</small></span> </p>
            </div>
            <button className='btn btn-warning w-100 mt-5'>Activity Completed</button>
        </div>
    );
};

export default Information;