import React, { Component } from 'react';
import style from './Film.module.scss';

class Film extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className = {style.film}>
              <a className ="filmDetail" href="">
                  <div className = "filmThumbnail" >
                  </div>
                  <div className = "film__hoverInfo">
                    <button className = "playButton">
                        <img className = "w-100" src="./img/play-video.png" alt=""/>
                    </button>
                  </div>
              </a>
              <div className = "fimInfo">
                  <div className="nameFilm--noHover">
                        <span className = "ageType">C18</span>
                        <span className = "filmTitle ml-2">Cá Sấu Tử Thần - Black Water: Abyss - (C18)</span>
                        <span className = "time d-block">100 Phút</span>
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
