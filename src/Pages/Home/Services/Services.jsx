import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]

    return (
        <div className='my:10 md:my-20'>
            <div className='text-center mb-10'>
                <h3 className='text-secondary font-bold mb-2'>OUR SERVICES</h3>
                <h2 className='text-2xl '>Services We Provide</h2>
            </div>

            <div className='grid md:grid-cols-3 gap-5 px-5'>
                {servicesData.map(service => <Service
                    service={service}
                    key={service.id}
                ></Service>)}
            </div>
        </div>
    );
};

export default Services;