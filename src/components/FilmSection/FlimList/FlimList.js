import React, { Component } from 'react';
import style from './FilmList.module.scss';
import Film from '../Film/Film';
import Slider from "react-slick";


class FlimList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filmList : [
                {
                    title: 'Cá Sấu Tử Thần - Black Water: Abyss - (C18)',
                    infoFilm: '100 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    point: 8.2,
                    starNumber: 5
                },
                {
                    title: 'Cá Sấu Tử Thần - Black Water: Abyss - (C18)',
                    infoFilm: '100 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    point: 8.2,
                    starNumber: 5
                },
                {
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    point: 8.2,
                    starNumber: 5
                },
            ]
        }
    }

    renderFilm = () => {
        return this.state.filmList.map((item, index) => {
            return (
                <div className="mb-5" key = {index}>
                    <Film title = {item.title} infoFilm = {item.infoFilm} imgUrl = {item.imgUrl}
                                    point = {item.point} starNumber = {item.starNumber}/>
                </div>
            )
        })
    }

    render() {
        const settings = {
            className: "center",
            infinite: true,
            speed: 500,
            slidesPerRow: 4,
            rows: 2,
            responsive: [
                {
                    breakpoint: 1060,
                    settings: {
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        dots: true,
                        arrows: false,
                        slidesPerRow: 2,
                        rows: 2,
                    }
                },
            ]
        };
        return (
          <div className= {style.filmList}>
             <div className="container filmList-container">
                <Slider {...settings}>
                    {this.renderFilm()}
                </Slider>   
             </div>
          </div>
        )
    }
}

export default FlimList
