import React, { Component } from 'react';
import style from './Film.module.scss';

class Film extends Component {
    constructor(props) {
        super(props)

        this.state = {
         
        }
    }

    setStar = (number) => {
        let imgArr = [];
        for(let i=0; i< number; i++) {
            let img = <img className = 'd-inline smallStar' src="./img/Films/star1.png"/>
            imgArr = [...imgArr, img];
        }
        return imgArr;
    }

    render() {
        let {title, infoFilm, imgUrl, point, starNumber} = this.props;
        return (
            <div className = {style.film}>
              <a className ="filmDetail" href="">
                  <div className = "filmThumbnail" >
                        <span className = "film__avgPoint">
                          <p className = "avgpoint m-0">
                              {point}
                          </p>
                          <p className = "m-0">
                              {this.setStar(starNumber)}
                          </p>
                        </span>
                  </div>
                  <div className = "film__hoverInfo">
                  </div>
                  <div className="film__playButton">
                    <button className = "playButton">
                            <span>
                                <i className="fa fa-play"></i>
                            </span>
                        </button>
                  </div>
              </a>
              <div className = "fimInfo">
                  <div className="nameFilm--noHover">
                        <span className = "ageType">C18</span>
                        <span className = "filmTitle ml-2">{title}</span>
                  </div>
                  <div className="infoFim">
                        <span className = "time d-block">{infoFilm}</span>
                  </div>
                  <div className="nameFilm--hover">
                    <a href="" className = "buyNow">MUA VÉ</a>
                  </div>
              </div>
            </div>
        )
    }
}

export default Film
