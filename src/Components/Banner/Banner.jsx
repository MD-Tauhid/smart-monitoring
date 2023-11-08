import React from 'react';
import banImg from '../../assets/images/banner.png';

const Banner = () => {
    return (
        <div
            className='d-flex flex-column-reverse flex-md-row justify-content-around align-items-center bg-info'
            style={{ height: "100vh", width: '100%', padding: '40px' }}
        >
            <div className='fs-1 fw-bold text-light text-uppercase px-3'>Smart Transformer <br /> Monitoring System</div>
            <img src={banImg} className='w-50' alt="Banner Image"/>
        </div>
    );
};

export default Banner;