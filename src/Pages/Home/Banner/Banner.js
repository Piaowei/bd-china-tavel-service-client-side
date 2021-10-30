import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/slider/hp1-slider-img1.jpg'
import banner2 from '../../../images/slider/hp1-slider-img2.jpg'
import banner3 from '../../../images/slider/hp1-slider-img3.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>

                <Carousel.Item>
                    <div class="card bg-dark text-white  border-0 rounded-0">
                        <img src={banner1} className="card-img border-0" alt="..." />
                        <div class="card-img-overlay d-flex justify-content-center align-items-center  border-0">
                            <h1 className="card-title text-center ">Card title</h1>

                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div class="card bg-dark text-white  border-0 rounded-0">
                        <img src={banner2} className="card-img border-0" alt="..." />
                        <div class="card-img-overlay d-flex justify-content-center align-items-center  border-0">
                            <h1 className="card-title text-center ">Card title</h1>

                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div class="card bg-dark text-white  border-0 rounded-0">
                        <img src={banner3} className="card-img border-0" alt="..." />
                        <div class="card-img-overlay d-flex justify-content-center align-items-center  border-0">
                            <h1 className="card-title text-center ">Card title</h1>

                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>
        </>
    );
};

export default Banner;