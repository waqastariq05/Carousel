import React from 'react'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='box'>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} className="carousel-slide">
                        {/* Customize the content of each slide */}
                        <img src={item.image} alt={item.title} className='img-fluid' />
                        <div className='content'>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <button className='btn'>Learn More</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel
