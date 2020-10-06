import React, { Component } from 'react'
import carouselStyle from './Carousel.module.scss';
import CarouselForm from './CarouselForm';
import { getFilmLists } from '../../../../redux/actions/FilmSectionReducerAction';
import { connect } from 'react-redux';
import CarouselItem from './CarouselItem';

class Carousel extends Component {
    mapPropstoDataProvider = () => {
        let dataProvider = this.props.listFilm.map((item) => {
            return ({
                title: item.tenPhim,
                imgUrl: item.hinhAnh,
                ageType: 'C18',
                trailerUrl: item.trailer,
                description: item.moTa
            })
        })
        return dataProvider;
    }

    playTrainer = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SHOW_TRAILER_POPUP',
            src: this.props.dataProvider.trailerUrl
        })
    }

    renderCarousel = () => {
        const dataProvider = this.mapPropstoDataProvider();
        return dataProvider.slice(0, 5).map((item, index) => {
            if (index === 0) {
                return (
                    <div className="carousel-item active" key={index}>
                        <CarouselItem dataProvider = {item} />
                    </div>
                )
            }
            return (
                <div className="carousel-item" key={index}>
                    <CarouselItem dataProvider = {item} />
                </div>
            )
        })
    }

    renderCarouselIndicators = () => {
        const dataProvider = this.mapPropstoDataProvider();
        let i = -1;
        return dataProvider.slice(0, 5).map((item, index) => {
            i++;
            if (i === 0) {
                return (
                    <li data-target="#carouselSlider" data-slide-to={i} className="active" />
                )
            }
            return (
                <li data-target="#carouselSlider" data-slide-to={i} />
            )
        })
    }

    render() {
        console.log("asdasdsad : ", this.props.listFilm);
        return (
            <div className={carouselStyle.Carousel}>
                <div className="carousel__Main">
                    <div id="carouselSlider" className="carousel__Slider carousel slide carousel-fade">
                        <ol className="container carousel-indicators">
                            {this.renderCarouselIndicators()}
                        </ol>
                        <div className="carousel-inner">
                            {this.renderCarousel()}
                            <div>
                                <a className="carousel-control-prev" href="#carouselSlider" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselSlider" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <CarouselForm/> */}
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        this.props.dispatch(getFilmLists());
    }
}

const mapStatetoProps = (state) => {
    return ({
        listFilm: state.FilmSectionReducer.listFilm
    });
}

export default connect(mapStatetoProps)(Carousel)
