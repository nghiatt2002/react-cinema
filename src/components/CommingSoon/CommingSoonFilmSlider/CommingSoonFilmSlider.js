import React, { Component } from 'react'
import Slider from "react-slick";
import style from './CommingSoonFilmSlider.module.scss'

class CommingSoonFilmSlider extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className={style.commingSoonSlider}>
                <div className="commingSoonSlider__area">
                    <div className="container h-100">
                        <h3>PHIM SẮP CHIẾU</h3>
                        <div className="row h-100 align-item-center">
                            <div className="col-6 commingSoonSlider__area--left">
                                <p className = "commingSoonSlider__area--type">Hài, Hành động</p>
                                <h4 className = "commingSoonSlider__area--title">Nội Chiến Siêu Anh Hùng - Captain America: Civil War</h4>
                                <div className = "commingSoonSlider__info">
                                    <div className = "commingSoonSlider__info--star">
                                        <img src="./img/Films/star1.png" alt=""/>
                                        <img src="./img/Films/star1.png" alt=""/>
                                        <img src="./img/Films/star1.png" alt=""/>
                                        <img src="./img/Films/star1.png" alt=""/>
                                        <img src="./img/Films/star1.png" alt=""/>
                                    </div>
                                    <div className="commingSoonSlider__info--calendar">
                                        <i class="fa fa-calendar-alt mx-2"></i>
                                        <span className="date">30 September, 2017</span>
                                    </div>
                                </div>
                                <p className= "commingSoonSlider__description">
                                Captain America: Civil War là câu chuyện theo sau sự kiện Avengers: Age Of Ultron, các liên minh chính phủ trên toàn thế giới thông qua một hiệp ước được thiết lập để điều chỉnh hoạt động của tất cả siêu anh hùng. Điều này gây ra sự phân cực trong nội bộ nhóm Avengers, tạo nên hai phe gồm Iron Man và Captain America, gây ra một trận chiến sử thi giữa những người đồng đội.                                </p>
                                <p className = "commingSoonSlider__moreinfo">
                                    <a href="">
                                        XEM THÊM
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                                </p>
                            </div>
                            <div className="col-6 commingSoonSlider__area--right">
                                <div className="commingSoonSlider__img">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommingSoonFilmSlider
