import React from 'react';

const Exercise = ({exercise}) => {
    const {name, img} = exercise;
    return (
        <div>
            <img src={img} alt="" />
            <h3>single exercise {name}</h3>
        </div>
    );
};

export default Exercise;