import React, { Component } from 'react';
import style from './ScreenContent.module.scss';
import CountdownTimer from "react-component-countdown-timer";

export default class ScreenContent extends Component {
    render() {
        var settings = {
            count: 300,
            hideDay: true,
            hideHours: true,
            color: 'red'
        };
        return (
            <div className={style.screencContent}>
                <div className="d-flex justify-content-between screencContent_areas">
                    <div className="screencContent__info">
                        <div className="screencContent__logo">
                            <img className="img-fluid" src="https://s3img.vcdn.vn/123phim/2018/09/9b240f96a233bb43203ee514a21a6004.png" />
                        </div>
                        <div className="screencContent__flim">
                            <p className = "flim-text">
                                <span>DDC </span>
                                <span className = "cinena-name">- Đống Đa</span>
                            </p>
                            <p className = "hour-text">Ngày mai - 21:20 - RẠP 1</p>
                        </div>
                    </div>

                    <div className="time-left">
                        <p className = "time-left--text m-0">
                            thời gian giữ ghế
                        </p>
                        <h3 className = "time-left--hour text-center">
                            <CountdownTimer {...settings} />
                        </h3>
                    </div>
                </div>
                <div className="sreenImg">
                    <img src="./images/screen.png" alt=""/>
                </div>
            </div>

        )
    }
}
