import React, { Component } from 'react'
import { connect } from 'react-redux';

class CarouselItem extends Component {
    playTrainer = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SHOW_TRAILER_POPUP',
            src: this.props.dataProvider.trailerUrl
        })
    }

    render() {
        let {type, title, description, starNumber, releaseDate, imgUrl} = this.props.dataProvider;
        return (
            <div>
                <img src="./img/hero-1.jpg" className="d-block w-100" alt="..." />
                <div className="container carousel__Slider--Content text-left text-light d-none d-sm-block">
                    <h3><a href="#" onClick = {this.playTrainer} data-toggle="modal" data-target="#trainerModal">{title}</a></h3>
                    <p>{description}</p>
                    <div className="movieCarousel__play">
                        <span className="rounded-circle border border-white p-3 text-white">PG</span>
                        <button className="p-3 text-white" onClick = {this.playTrainer} data-toggle="modal" data-target="#trainerModal" >
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
}

export default connect(null)(CarouselItem)
