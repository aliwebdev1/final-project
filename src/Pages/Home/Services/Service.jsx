import React from 'react';

const Service = ({ service }) => {
    const { name, description, img, } = service;
    return (
        <div className="card text-center shadow-xl px-4 ">
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;