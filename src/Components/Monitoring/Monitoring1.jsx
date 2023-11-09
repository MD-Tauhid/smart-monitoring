import React from 'react';

const Monitoring1 = ({ img, text, bg, shadow }) => {
    return (
        <div className={`w-100 d-flex flex-column-reverse flex-md-row-reverse justify-content-center justify-content-md-between align-items-center my-6 ${bg}`} style={{padding:'50px'}}>
            <img data-aos="fade-left" data-aos-duration="2000" className={`w-50 ${shadow}`} src={img} alt="" />
            <div className='mx-auto'>
                <h1 data-aos="fade-right" data-aos-duration="2000" className='py-3 text-center text-shadow' style={{maxWidth:'400px'}} >{text}</h1>
            </div>
        </div>
    );
};

export default Monitoring1;