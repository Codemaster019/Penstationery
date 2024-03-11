import React from 'react';
import './review.css';
import Card from './reviewcard';
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useMediaQuery } from 'react-responsive';

function Review(){
    const isMobile = useMediaQuery({ maxWidth: 600 });

    if (isMobile) {
        return (
            <section id='initial_sec'>
                <Slide>
                    <div className='initial_div'>
                        <h1 className='header_review'>"Exquisite Critique: <span className='span_review'>A Showcase of Reviews"</span></h1>
                    </div>
                </Slide>
                <div className="container">
                    <Carousel>
                        <div>
                            <Card name='Neha' review='A treasure trove of stationery inspiration and tips!'/>
                        </div>
                        <div>
                            <Card name='Dravin' review='Engaging content that sparks creativity and organization.'/>
                        </div>
                        <div>
                            <Card name='Aditi' review='An authentic and informative hub for stationery addicts!'/>
                        </div>
                    </Carousel>
                </div>
            </section>
        );
    } else {
        return (
            <section id='initial_sec'>
                <Slide>
                    <div className='initial_div'>
                        <h1 className='header_review'>"Exquisite Critique: <span className='span_review'>A Showcase of Reviews"</span></h1>
                    </div>
                </Slide>
                <div className="container">
                    <Fade>
                        <div>
                            <Card name='Neha' review='A treasure trove of stationery inspiration and tips!'/>
                        </div>
                        <div>
                            <Card name='Dravin' review='Engaging content that sparks creativity and organization.'/>
                        </div>
                        <div>
                            <Card name='Aditi' review='An authentic and informative hub for stationery addicts!'/>
                        </div>
                    </Fade>
                </div>
            </section>
        );
    }
}

export default Review;
