import React from 'react';

const Monitoring1 = ({ img, text, bg, shadow }) => {
    return (
        <div className={`w-100 row my-4 ${bg}`} style={{ padding: '50px' }}>
            <div className='w-100 col-12 col-md-6 mx-auto my-auto text-center' style={{ maxWidth:'400px'}}>
                <h1 data-aos="fade-right" data-aos-duration="2000" className='text-shadow text-center w-100 mb-4'>{text}</h1>
            </div>
            <div className='col-12 col-md-6 mx-auto w-auto'>
                <img data-aos="fade-left" data-aos-duration="2000" className={`w-100 col-6 mx-auto ${shadow}`} src={img} alt="" style={{ maxWidth:'550px' }} />
            </div>
        </div>
    );
};

export default Monitoring1;