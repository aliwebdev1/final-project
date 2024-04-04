import React from 'react';
import blockQuite from '../../../assets/icons/quote.svg'
import Review from './Review';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]

    return (
        <div className='container mx-auto px-5 md:px-0'>
            <div className='flex justify-between items-center mb-10'>
                <div>
                    <h1 className='text-secondary font-bold'>Testimonial</h1>
                    <h3 className='text-2xl'>What Our Patients Says</h3>
                </div>
                <img className='w-1/6 h-20' src={blockQuite} alt="" />
            </div>

            <div className='grid md:grid-cols-3 gap-5 px-5'>
                {reviews.map(review => <Review
                    review={review}
                    key={review._id}
                ></Review>)}
            </div>




        </div>
    );
};

export default Testimonial;