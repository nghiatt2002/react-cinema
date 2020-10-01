import React, { Component } from 'react';
import style from './NowShowingFlimList.module.scss';
import Film from '../NowShowingFilm/NowShowingFilm';
import Slider from "react-slick";
import { connect } from 'react-redux';
import { getFilmLists } from '../../../../../../redux/actions/FilmSectionReducerAction';


class NowShowingFlimList extends Component {
    constructor(props) {
        super(props);
    
    }

    mapPropstoDataProvider = () => {
        let dataProvider = this.props.listFilm.map((item) => {
            return ({
                title: item.tenPhim,
                infoFilm: '0 phút',
                imgUrl: item.hinhAnh,
                ageType: 'C18',
                point: item.danhGia,
                starNumber: (item.danhGia * 5) /10,
                trailerUrl: item.trailer
            })
        })
        return dataProvider;
    }

    renderFilm = () => {
        const dataProvider = this.mapPropstoDataProvider();

        return dataProvider.map((item, index) => {
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
            className: "outline-none",
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

const mapStatetoProps = (state) => {
    return ({
        listFilm: state.FilmSectionReducer.listFilm
    });
}
export default connect(mapStatetoProps)(NowShowingFlimList)
