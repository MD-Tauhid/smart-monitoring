import React from 'react';

const Monitoring1 = ({img, text}) => {
    return (
        <div className='w-100 bg-light d-flex flex-column flex-md-row-reverse justify-content-center justify-content-md-between align-items-center my-6 p-5'>
            <img data-aos="fade-right" data-aos-duration="2000" className='w-50' src={img} alt="" style={{minWidth:'300px'}} />
            <h1 data-aos="fade-left" data-aos-duration="2000" className='py-3'>{text}</h1>
        </div>
    );
};

export default Monitoring1;