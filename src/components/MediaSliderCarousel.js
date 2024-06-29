import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Media_slider_carousel.css'; // Import your custom CSS for additional styling

// Import your images
import cssImage1 from '../assets/images/technologies/css.png';
// import cssImage2 from '../assets/images/technologies/expressjs.png';
import cssImage3 from '../assets/images/technologies/s.png';
import cssImage4 from '../assets/images/technologies/mongo-db.png';
import cssImage5 from '../assets/images/technologies/mysql.png';
import cssImage6 from '../assets/images/technologies/nodejs.png';
import cssImage7 from '../assets/images/technologies/react.png';
import cssImage8 from '../assets/images/technologies/visual-studio-code.png';
import cssImage9 from '../assets/images/technologies/html.png';
import cssImage10 from '../assets/images/technologies/javascript.png';
import cssImage11 from '../assets/images/technologies/php.png';
import cssImage12 from '../assets/images/technologies/s.png';
import cssImage13 from '../assets/images/technologies/tailwind.png';
import cssImage14 from '../assets/images/technologies/sql.png';
import cssImage15 from '../assets/images/technologies/github.png';
import cssImage16 from '../assets/images/technologies/npm.png';


const MediaSliderCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselItems = [
        { id: 1, image: cssImage1, caption: 'Slide 1' },
        // { id: 2, image: cssImage2, caption: 'Slide 2' },
        { id: 3, image: cssImage3, caption: 'Slide 3' },
        { id: 4, image: cssImage4, caption: 'Slide 4' },
        { id: 5, image: cssImage5, caption: 'Slide 5' },
        { id: 6, image: cssImage6, caption: 'Slide 6' },
        { id: 7, image: cssImage7, caption: 'Slide 7' },
        { id: 8, image: cssImage8, caption: 'Slide 8' },
        { id: 9, image: cssImage9, caption: 'Slide 9' },
        { id: 10, image: cssImage10, caption: 'Slide 10'},
        { id: 11, image: cssImage11, caption: 'Slide 11'},
        { id: 12, image: cssImage12, caption: 'Slide 12'},
        { id: 13, image: cssImage13, caption: 'Slide 13'},
        { id: 14, image: cssImage14, caption: 'Slide 14'},
        { id: 15, image: cssImage15, caption: 'Slide 15'},
        { id: 15, image: cssImage16, caption: 'Slide 16'},

    ];

    // Calculate the number of slides needed
    const numSlides = Math.ceil(carouselItems.length / 5);

    return (
        <div className="container">
            {/* <div className="row-header"> */}
                <h2 className='carousel-heading'>TECHNOLOGIES</h2>
            {/* </div> */}
            <div className="row media-carousel-mobile">
                <div className="col-md-12">
                    <Carousel activeIndex={activeIndex} onSelect={(index) => setActiveIndex(index)} id="media">
                        {[...Array(numSlides)].map((_, slideIndex) => (
                            <Carousel.Item key={slideIndex} className={slideIndex === 0 ? 'active' : ''}>
                                <div className="row media-carousel-mobile-inside">
                                    {carouselItems.slice(slideIndex * 4, slideIndex * 4 + 4).map((innerItem) => (
                                        <div className="col-md-2" key={innerItem.id}>
                                            {/* <a className="thumbnail" href="/"> */}
                                                <img src={innerItem.image} alt={`Slide ${innerItem.id}`} />
                                            {/* </a> */}
                                        </div>
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default MediaSliderCarousel;
