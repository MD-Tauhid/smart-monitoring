import React from 'react';

const Monitoring1 = ({ img, text }) => {
    return (
        <div className='w-100 bg-light d-flex flex-column-reverse flex-md-row-reverse justify-content-center justify-content-md-between align-items-center my-6 p-5'>
            <img className='w-50' src={img} alt="" />
            <div className='mx-auto'>
                <h1 className='py-3 text-center text-shadow' style={{maxWidth:'400px'}} >{text}</h1>
            </div>
        </div>
    );
};

export default Monitoring1;