import React from 'react';
import banImg from '../../assets/images/banner.png';

const Banner = () => {
    return (
        <div
            className='d-flex flex-column flex-md-row justify-content-around align-items-center gradient'
            style={{ padding:'20px 30px 20px 30px' }}
        >
            <div className='fs-1 fw-bold text-light text-center text-uppercase text-shadow px-3'>Smart Transformer <br /> Monitoring System</div>
            <img src={banImg} className='w-50' alt="Banner Image" />
        </div>
    );
};

export default Banner;