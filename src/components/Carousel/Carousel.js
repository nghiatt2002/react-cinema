import React, { Component } from 'react'
import carouselStyle from './Carousel.module.scss';

export default class Carousel extends Component {
    render() {
        return (
            <div className={carouselStyle.Carousel}>
                <div id="carouselSlider" className="carousel__Slider carousel slide carousel-fade">
                    <ol className="container carousel-indicators">
                        <li data-target="#carouselSlider" data-slide-to={0} className="active" />
                        <li data-target="#carouselSlider" data-slide-to={1} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./img/hero-1.jpg" className="d-block w-100" alt="..." />
                            <div className="container">
                                <div className="carousel__Slider--Content text-left">
                                    <p>ACTION, ADVENTURE, FANTASY</p>
                                    <h2>End of the World: Part II</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, facere.</p>
                                </div>
                                <div className="carousel__Slider--Play">
                                    <button><i className="fa fa-play" /></button>
                                </div>
                                <form action="" className="carousel__Slider--Form"></form>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./img/hero-2.jpg" className="d-block w-100" alt="..." />
                            <div className="container carousel-caption d-none d-md-block">
                                <p>ACTION, ADVENTURE, FANTASY</p>
                                <h2>End of the World: Part II</h2>
                                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                                <div className="movieCarousel__play">
                                    <span className="rounded-circle border border-white p-3 text-white">pg</span>
                                    <button className="p-3 text-white">
                                    <i className="fa fa-play" />PLAY TRAILER
                                    </button>
                                    <div className="movieCarousel__overlay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
