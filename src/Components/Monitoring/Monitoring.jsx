import React from 'react';

const Monitoring = ({ img, text,bg, shadow }) => {
    return (
        <div className={`w-100 d-flex flex-column-reverse flex-md-row row my-4 ${bg}`} style={{ padding: '50px' }}>
            <div className='col-12 col-sm-6 mx-auto w-auto'>
                <img data-aos="fade-left" data-aos-duration="2000" className={`w-100 col-6 mx-auto ${shadow}`} src={img} alt="" style={{ maxWidth:'550px' }} />
            </div>
            <div className='w-auto col-12 col-sm-6 mx-auto my-auto text-center' style={{ maxWidth:'400px'}}>
                <h1 data-aos="fade-right" data-aos-duration="2000" className='text-shadow text-center w-100 my-4 my-md-0'>{text}</h1>
            </div>
        </div>
    );
};

export default Monitoring;