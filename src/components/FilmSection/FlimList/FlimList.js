import React, { Component } from 'react';
import style from './FilmList.module.scss';
import Film from '../Film/Film';
import Slider from "react-slick";


class FlimList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }


    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
          <div className= {style.filmList}>
             <div className="container filmList-container">
                <Slider {...settings}>
                    <div>
                        <div className="row">
                            <div className="col-3">
                                <Film />
                            </div>
                            <div className="col-3">
                                <Film />
                            </div>
                            <div className="col-3">
                                <Film />
                            </div>
                            <div className="col-3">
                                <Film />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-3">
                                <Film />
                            </div>
                            <div className="col-3">
                                <Film />
                            </div>
                            <div className="col-3">
                                <Film />
                            </div>
                            <div className="col-3">
                                <Film />
                            </div>
                        </div>
                    </div>
                </Slider>   
             </div>
          </div>
        )
    }
}

export default FlimList
