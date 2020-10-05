import React, { Component } from 'react'
import carouselStyle from './Carousel.module.scss';
import CarouselForm from './CarouselForm';
import { getFilmLists } from '../../../../redux/actions/FilmSectionReducerAction';
import { connect } from 'react-redux';

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

    renderCarousel = () => {
        const dataProvider = this.mapPropstoDataProvider();
        return dataProvider.slice(0, 5).map((item, index) => {
            if (index === 0) {
                return (
                    <div className="carousel-item active" key={index}>
                        <img src="./img/hero-1.jpg" className="d-block w-100" alt="..." />
                        <div className="container carousel__Slider--Content text-left text-light d-none d-sm-block">
                            <h3><a href="#">{item.title}</a></h3>
                            <p>{item.description}</p>
                            <div className="movieCarousel__play">
                                <span className="rounded-circle border border-white p-3 text-white">PG</span>
                                <button className="p-3 text-white">
                                    <i className="fa fa-play" /><span>PLAY TRAILER</span>
                                </button>
                            </div>
                        </div>
                        <div className="movieCarousel__play--tablet d-inline d-sm-none">
                            <button className="rounded-circle p-3">
                                <i className="fa fa-play" /><span></span>
                            </button>
                        </div>
                    </div>
                )
            }
            return (
                <div className="carousel-item" key={index}>
                    <img src="./img/hero-1.jpg" className="d-block w-100" alt="..." />
                    <div className="container carousel__Slider--Content text-left text-light d-none d-sm-block">
                        <h3><a href="#">{item.title}</a></h3>
                        <p>{item.description}</p>
                        <div className="movieCarousel__play">
                            <span className="rounded-circle border border-white p-3 text-white">PG</span>
                            <button className="p-3 text-white">
                                <i className="fa fa-play" /><span>PLAY TRAILER</span>
                            </button>
                        </div>
                    </div>
                    <div className="movieCarousel__play--tablet d-inline d-sm-none">
                        <button className="rounded-circle p-3">
                            <i className="fa fa-play" /><span></span>
                        </button>
                    </div>
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
