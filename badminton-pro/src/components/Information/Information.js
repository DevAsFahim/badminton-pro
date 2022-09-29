import React from 'react';

const Information = (props) => {
    return (
        <div>
            <h5>Exercise Details</h5>
            <div className="exercise_time">
                <strong>Exercise time: {props.exerciseTime}</strong>
            </div>
        </div>
    );
};

export default Information;