import React, { Component } from 'react';
import style from './NowShowingFlimList.module.scss';
import Film from '../NowShowingFilm/NowShowingFilm';
import Slider from "react-slick";


class FlimList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filmList : [
                {
                    title: 'Mãi Bên Em - Endless - (C13)',
                    infoFilm: '100 phút',
                    imgUrl: '/./img/Films/mai-ben-em-endless.png',
                    ageType: 'C13',
                    point: 7.5,
                    starNumber: 3.5,
                    hotFilm: true,
                    trailerUrl: 'https://www.youtube.com/embed/50aEACmN5iI'
                },
                {
                    title: 'Cá Sấu Tử Thần - Black Water: Abyss - (C18)',
                    infoFilm: '100 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/wihfeV6sTfM'
                },
                {
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./img/Films/noi-chien-sieu-anh-hung.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/VdeuR-jUysg'
                },
                {
                    title: '',
                    infoFilm: '',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/Nn-8OqGdgrA'
                },
                {
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War',
                    infoFilm: '147 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/Nn-8OqGdgrA'
                },
                {
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/Nn-8OqGdgrA'
                },
                {
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/Nn-8OqGdgrA'
                },
                {
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/Nn-8OqGdgrA'
                },
                {
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/Nn-8OqGdgrA'
                },
            ]
        }
    }

    renderFilm = () => {
        return this.state.filmList.map((item, index) => {
            return (
                <div className="mb-5" key = {index}>
                    <Film dataProvider = {item}/>
                    
                </div>

            )
        })
    }

    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesPerRow: 4,
            rows: 2,
            useCSS: true,
            responsive: [
                {
                    breakpoint: 1070,
                    settings: {
                        dots: true,
                        arrows: false,
                        slidesPerRow: 3,
                        rows: 2,
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
                 <h2 className= "filmList__title">PHIM ĐANG CHIẾU</h2>
                <Slider {...settings}>
                    {this.renderFilm()}
                </Slider>   
             </div>
          </div>
        )
    }
}

export default FlimList
