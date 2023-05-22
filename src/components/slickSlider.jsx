import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../style/slick.css"

const MySlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 256,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <div className='container'>
            <Slider {...settings}>
                <div className='slider_card'><img src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2021/01/service-img-1-1.jpg" alt="slider image" />
                    <h3>Buffet Service</h3><p>Continually utilize team building niche markets before visionary catalysts for change.</p><a href="/">link</a></div>
                <div className='slider_card'><img src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2021/01/service-img-1-2.jpg" alt="slider image" />
                    <h3>Wedding Service</h3><p>Continually utilize team building niche markets before visionary catalysts for change.</p><a href="/">link</a></div>
                <div className='slider_card'><img src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2021/01/service-img-1-3.jpg" alt="slider image" />
                    <h3>Home Delivery</h3><p>Continually utilize team building niche markets before visionary catalysts for change.</p><a href="/">link</a></div>
                <div className='slider_card'><img src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2021/01/service-img-1-4.jpg" alt="slider image" />
                    <h3>Party Service</h3><p>Continually utilize team building niche markets before visionary catalysts for change.</p><a href="/">link</a></div>
            </Slider>
        </div>
    );
};

export default MySlider;
