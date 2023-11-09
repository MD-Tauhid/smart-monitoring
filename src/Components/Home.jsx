import React from 'react';
import Banner from './Banner/Banner';
import img1 from '../assets/images/Trans_1.png';
import img2 from '../assets/images/trans_2.png';
import img3 from '../assets/images/timeSeris.jpeg';
import img4 from '../assets/images/ewregtrhyjk.png';
import img5 from '../assets/images/gdhjui.png';

import Monitoring from './Monitoring/Monitoring';
import Monitoring1 from './Monitoring/Monitoring1';
import './Home.css';


const Home = () => {
    return (
        <div className='overflow-hidden '>
            <Banner></Banner>
            <div data-aos="fade-up" data-aos-duration="3000" className='d-flex flex-column align-items-center p-5'>
                <img className='h-25 w-50 mx-auto ' src={img1} alt="" style={{width:'60%'}} />
            </div>
            <section className='bg-light d-flex flex-column flex-md-row-reverse justify-content-md-around align-items-center fs-1 fw-bold p-5'>
                <div className='d-flex flex-column justify-content-start justify-content-md-around  mb-3'>
                    <div className='mx-auto text-center text-warning fs-3'>Measure Items<br />(Phase And Line Parameter)</div>
                    <div className='d-flex flex-row justify-content-start justify-content-md-around fs-5'>
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
                <div className='d-flex flex-column justify-content-start justify-content-md-around'>
                    <div className='mx-auto text-warning fs-3'>Safety Monitoring</div>
                    <div className='d-flex flex-row justify-content-start justify-content-md-around fs-5'>
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
                <div className='text-uppercase text-info mx-md-auto mb-5 text-center text-shadow'>Remote Monitoring & Report System</div>
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