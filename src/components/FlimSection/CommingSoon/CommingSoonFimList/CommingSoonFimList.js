import React, { Component } from 'react'
import Slider from "react-slick";
import style from './CommingSoonFimList.module.scss';
import Commingsoonflim from '../CommingSoonFlim/CommingSoonFlim';
import CommingSoonFilmSlider from '../CommingSoonFilmSlider/CommingSoonFilmSlider';

class FimCommingSoonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            filmList : [
                {
                    type : 'Hài, Hành động',
                    title: 'Mãi Bên Em - Endless - (C13)',
                    infoFilm: '100 phút',
                    imgUrl: '/./img/Films/mai-ben-em-endless.png',
                    ageType: 'C13',
                    point: 7.5,
                    starNumber: 3.5,
                    hotFilm: true,
                    releaseDate: '30/08/2017',
                    description: 'Captain America: Civil War là câu chuyện theo sau sự kiện Avengers: Age Of Ultron, các liên minh chính phủ trên toàn thế giới thông qua một hiệp ước được thiết lập để điều chỉnh hoạt động của tất cả siêu anh hùng. Điều này gây ra sự phân cực trong nội bộ nhóm Avengers, tạo nên hai phe gồm Iron Man và Captain America, gây ra một trận chiến sử thi giữa những người đồng đội.',
                    trailerUrl: 'https://www.youtube.com/embed/50aEACmN5iI'
                },
                {
                    type : 'Hài, Hành động',
                    title: 'Cá Sấu Tử Thần - Black Water: Abyss - (C18)',
                    infoFilm: '100 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    releaseDate: '30/08/2017',
                    description: 'Captain America: Civil War là câu chuyện theo sau sự kiện Avengers: Age Of Ultron, các liên minh chính phủ trên toàn thế giới thông qua một hiệp ước được thiết lập để điều chỉnh hoạt động của tất cả siêu anh hùng. Điều này gây ra sự phân cực trong nội bộ nhóm Avengers, tạo nên hai phe gồm Iron Man và Captain America, gây ra một trận chiến sử thi giữa những người đồng đội.',
                    trailerUrl: 'https://www.youtube.com/embed/50aEACmN5iI'
                },
                {
                    type : 'Hài, Hành động',
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    releaseDate: '30/08/2017',
                    description: 'Captain America: Civil War là câu chuyện theo sau sự kiện Avengers: Age Of Ultron, các liên minh chính phủ trên toàn thế giới thông qua một hiệp ước được thiết lập để điều chỉnh hoạt động của tất cả siêu anh hùng. Điều này gây ra sự phân cực trong nội bộ nhóm Avengers, tạo nên hai phe gồm Iron Man và Captain America, gây ra một trận chiến sử thi giữa những người đồng đội.',
                    trailerUrl: 'https://www.youtube.com/embed/50aEACmN5iI'
                },
                {
                    type : 'Hài, Hành động',
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    releaseDate: '30/08/2017',
                    description: 'Captain America: Civil War là câu chuyện theo sau sự kiện Avengers: Age Of Ultron, các liên minh chính phủ trên toàn thế giới thông qua một hiệp ước được thiết lập để điều chỉnh hoạt động của tất cả siêu anh hùng. Điều này gây ra sự phân cực trong nội bộ nhóm Avengers, tạo nên hai phe gồm Iron Man và Captain America, gây ra một trận chiến sử thi giữa những người đồng đội.',
                    trailerUrl: 'https://www.youtube.com/embed/50aEACmN5iI'
                },
                {
                    type : 'Hài, Hành động',
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War',
                    infoFilm: '147 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    releaseDate: '30/08/2017',
                    description: 'Captain America: Civil War là câu chuyện theo sau sự kiện Avengers: Age Of Ultron, các liên minh chính phủ trên toàn thế giới thông qua một hiệp ước được thiết lập để điều chỉnh hoạt động của tất cả siêu anh hùng. Điều này gây ra sự phân cực trong nội bộ nhóm Avengers, tạo nên hai phe gồm Iron Man và Captain America, gây ra một trận chiến sử thi giữa những người đồng đội.',
                    trailerUrl: 'https://www.youtube.com/embed/50aEACmN5iI'
                },
                {
                    type : 'Hài, Hành động',
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    releaseDate: '30/08/2017',
                    description: 'Captain America: Civil War là câu chuyện theo sau sự kiện Avengers: Age Of Ultron, các liên minh chính phủ trên toàn thế giới thông qua một hiệp ước được thiết lập để điều chỉnh hoạt động của tất cả siêu anh hùng. Điều này gây ra sự phân cực trong nội bộ nhóm Avengers, tạo nên hai phe gồm Iron Man và Captain America, gây ra một trận chiến sử thi giữa những người đồng đội.',
                    trailerUrl: 'https://www.youtube.com/embed/50aEACmN5iI'
                },
                {
                    type : 'Hài, Hành động',
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    releaseDate: '30/08/2017',
                    description: 'Captain America: Civil War là câu chuyện theo sau sự kiện Avengers: Age Of Ultron, các liên minh chính phủ trên toàn thế giới thông qua một hiệp ước được thiết lập để điều chỉnh hoạt động của tất cả siêu anh hùng. Điều này gây ra sự phân cực trong nội bộ nhóm Avengers, tạo nên hai phe gồm Iron Man và Captain America, gây ra một trận chiến sử thi giữa những người đồng đội.',
                    trailerUrl: 'https://www.youtube.com/embed/50aEACmN5iI'
                },
                {
                    type : 'Hài, Hành động',
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    releaseDate: '30/08/2017',
                    description: 'Captain America: Civil War là câu chuyện theo sau sự kiện Avengers: Age Of Ultron, các liên minh chính phủ trên toàn thế giới thông qua một hiệp ước được thiết lập để điều chỉnh hoạt động của tất cả siêu anh hùng. Điều này gây ra sự phân cực trong nội bộ nhóm Avengers, tạo nên hai phe gồm Iron Man và Captain America, gây ra một trận chiến sử thi giữa những người đồng đội.',
                    trailerUrl: 'https://www.youtube.com/embed/50aEACmN5iI'
                },
                {
                    type : 'Hài, Hành động',
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./img/Films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    releaseDate: '30/08/2017',
                    description: 'Captain America: Civil War là câu chuyện theo sau sự kiện Avengers: Age Of Ultron, các liên minh chính phủ trên toàn thế giới thông qua một hiệp ước được thiết lập để điều chỉnh hoạt động của tất cả siêu anh hùng. Điều này gây ra sự phân cực trong nội bộ nhóm Avengers, tạo nên hai phe gồm Iron Man và Captain America, gây ra một trận chiến sử thi giữa những người đồng đội.',
                    trailerUrl: 'https://www.youtube.com/embed/50aEACmN5iI'
                },
            ]
        };

    }

    componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
    }
    
    renderCommingSoonFilmSlider = () => {
        return this.state.filmList.map((item, index) => {
            return (
                <div key = {index}>
                    <CommingSoonFilmSlider dataProvider = {item}/>
                </div>
            )
        })
    }

    renderCommingSoonFilm = () => {
        return this.state.filmList.map((item, index) => {
            return (
                <div key = {index}
                     onClick ={()=> {this.slider1.slickGoTo(index != 0 ? index: this.state.filmList.length)}}>
                    <Commingsoonflim dataProvider = {item}/>
                </div>
            )
        })
    }

    render() {
        const settingsMain = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            speed: 500,
            draggable: false,
            swipeToSlide: false,
            asNavFor: '.slider-nav',
        };

        const settingsThumbs = {
            slidesToShow: 5,
            slidesToScroll: 2,
            swipeToSlide: true,
            draggable: true,
            infinite: true,
            asNavFor: '.slider-for',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 630,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        }
        return (
            <div className={`${style.fimCommingSoonList}`}>
                    <div>
                        <Slider
                            {...settingsMain}
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider1 = slider)}
                        >
                            {this.renderCommingSoonFilmSlider()}
                        </Slider>
                        <Slider className = "container"
                            {...settingsThumbs}
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider2 = slider)}
                        >
                            {this.renderCommingSoonFilm()}
                        </Slider>
                    </div>
            </div>
        )
    }
}

export default FimCommingSoonList