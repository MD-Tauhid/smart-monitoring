import React from 'react';
import Banner from './Banner/Banner';
import img1 from '../assets/images/Trans_1.png';
import img2 from '../assets/images/trans_2.png';
import img3 from '../assets/images/timeSeris.jpeg';
import img4 from '../assets/images/ewregtrhyjk.png';
import img5 from '../assets/images/gdhjui.png';

import Monitoring from './Monitoring/Monitoring';
import Monitoring1 from './Monitoring/Monitoring1';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='d-flex flex-column align-items-center'>
                <img className='h-25 w-50 mx-auto ' src={img1} alt="" />
            </div>
            <section className='bg-light d-flex flex-row-reverse justify-content-between align-items-center mx-auto fs-1 fw-bold p-5'>
                <div className='d-flex flex-column justify-content-center'>
                    <div className='mx-auto mb-5 text-center'>Measure Items<br />(Phase And Line Parameter)</div>
                    <div className='d-flex flex-row justify-content-around fs-4'>
                        <ul style={{ listStyle: 'circle outside' }}>
                            <li>Current</li>
                            <li>Voltage</li>
                            <li>Frequeny</li>
                            <li>Power Factor</li>
                            <li>Ative Energy</li>
                            <li>Reative Energy</li>
                            <li>Apparent Energy</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='mx-auto mb-5'>Safety Monitoring</div>
                    <div className='fs-4'>
                        <ul>
                            <li>Phase Loss or Reovery</li>
                            <li>Oil Level or Temperature</li>
                            <li>OverLoad or Exeed pre-set Value</li>
                            <li>Advance Data Analysis(Optional)</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='d-flex flex-column justify-content-center mx-auto fs-1 fw-bold pt-5'>
                <div className='text-uppercase text-info mx-auto mb-5 text-center'>Remote Monitoring & Report System</div>
                <div className='w-100'>
                    <Monitoring img={img2} text={"Multiple Transformar Status"}></Monitoring>
                    <Monitoring1 img={img3} text={"Time Series Transformers Parameter"}></Monitoring1>
                    <Monitoring img={img4} text={"Transformer Details Status"}></Monitoring>
                    <Monitoring1 img={img5} text={"Transformer Summary"} ></Monitoring1>
                </div>
            </section>
        </div>
    );
};

export default Home;