import React from 'react';

const Monitoring = ({img, text}) => {
    return (
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center my-6' style={{padding:'50px 50px'}}>
            <img data-aos="fade-left" data-aos-duration="2000" className='w-50' src={img} alt="" />
            <h1 data-aos="fade-right" data-aos-duration="2000" className='py-3'>{text}</h1>
        </div>
    );
};

export default Monitoring;