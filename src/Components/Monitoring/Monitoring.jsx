import React from 'react';

const Monitoring = ({ img, text,bg, shadow }) => {
    return (
        <div className={`row flex-column-reverse flex-md-row my-4 ${bg}`} style={{ padding: '50px' }}>
            <div className='col-12 col-md-6 mx-auto'>
                <img data-aos="fade-left" data-aos-duration="2000" className={`w-100 mx-auto ${shadow}`} src={img} alt=""/>
            </div>
            <div className='col-12 col-md-6 mx-auto my-auto text-center'>
                <h1 data-aos="fade-right" data-aos-duration="2000" className='text-shadow text-center w-100 my-4 my-md-0'>{text}</h1>
            </div>
        </div>
    );
};

export default Monitoring;