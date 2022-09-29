import React from 'react';
import './Exercise.css'


const Exercise = ({exercise, addToInfo}) => {
    const {name, img, time} = exercise;
    return (
        <div className="col single_card">
            <div className="card shadow-sm border-0">
                <img src={img} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Time required: {time}m</p>
                    <button onClick={() => addToInfo(time)} className='btn btn-warning d-block w-100'>Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;