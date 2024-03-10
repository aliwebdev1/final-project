import React from 'react';

const Review = ({ review }) => {
    const { name, des, img, location } = review;

    return (
        <div className="card shadow-xl px-5 ">
            <p>{des}</p>
            <div className='flex'>
                <figure><img className='w-2/3 border-2 border-primary p-1 rounded-full' src={img} alt="Movie" /></figure>
                <div className="py-5">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;