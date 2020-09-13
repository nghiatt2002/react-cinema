import React, { Component } from 'react';
import style from './MovieDetailPage.module.scss';

export default class MovieDetailPage extends Component {
    render() {
        return (
            <div>
                <div className={style.movieDetailStyle}>
                    <div className="movieDetailContent">
                        <div className="detailMain">
                            <div className="detailTop">
                                <div className="detailTop__content">
                                    <div className="detailTop__blur">
                                        <img className="detailTop__poster" src="https://s3img.vcdn.vn/123phim/2020/09/ac-nu-bloodlust-lady-c18-15994496728312.png" alt=""/>
                                    </div>
                                    <div className="detailTop__gradient"></div>
                                    <div className="detailTop_movieInfo movieInfo__maxWidth">
                                        
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm-4 col-xs-4 movieInfo__poster">
                                                    <div className="imagePoster" style={{backgroundImage: "url('https://s3img.vcdn.vn/mobile/123phim/2020/09/ac-nu-bloodlust-lady-c18-15994496809693_215x318.png')"}}></div>
                                                </div>
                                                <div className="col-sm-6 movieInfo__detailGroup">
                                                    <div>
                                                        <span className="movieInfo__date">11.09.2020</span>
                                                        <br />
                                                    </div>
                                                    <div>
                                                        <span className="movieInfo__detail">
                                                            <span className="movieInfo__age">C18</span>
                                                            <span>Ác Nữ - Bloodlust Lady</span>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="movieInfo__time">116 phút - 0 IMDb - 2D/Digital</span>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="col-sm-2 movieInfo_circleStar">
                                                    
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="detailContent">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
