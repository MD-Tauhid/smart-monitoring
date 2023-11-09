import React from 'react';

const Monitoring = ({ img, text }) => {
    return (
        <div className='d-flex flex-column-reverse flex-md-row justify-content-center justify-content-md-between align-items-center my-6' style={{ padding: '50px 50px' }}>
            <img data-aos="fade-right" data-aos-duration="2000" className='w-50' src={img} alt="" />
            <div className='mx-auto'>
                <h1 data-aos="fade-left" data-aos-duration="2000" className='py-3 text-shadow text-center' style={{maxWidth:'400px'}}>{text}</h1>
            </div>
        </div>
    );
};

export default Monitoring;