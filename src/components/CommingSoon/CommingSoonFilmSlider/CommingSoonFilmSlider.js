import React, { Component } from 'react'
import Slider from "react-slick";
import style from './CommingSoonFilmSlider.module.scss';
import moment from 'moment';
import 'moment/locale/vi';
import * as Utils from '../../../assets/utils/utils';

class CommingSoonFilmSlider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filmInfo : {
                type : 'Hài, Hành động',
                title : 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War',
                description: 'Captain America: Civil War là câu chuyện theo sau sự kiện Avengers: Age Of Ultron, các liên minh chính phủ trên toàn thế giới thông qua một hiệp ước được thiết lập để điều chỉnh hoạt động của tất cả siêu anh hùng. Điều này gây ra sự phân cực trong nội bộ nhóm Avengers, tạo nên hai phe gồm Iron Man và Captain America, gây ra một trận chiến sử thi giữa những người đồng đội.',
                starNumber: 5,
                releaseDate: '30/08/2017',
                imgUrl: './img/Films/mai-ben-em-endless.png'
            }
        }
    }

    render() {
        let {type, title, description, starNumber, releaseDate, imgUrl} = this.props.dataProvider;
        moment.locale('vi')
        return (
            <div className={style.commingSoonSlider}>
                <div className="commingSoonSlider__area">
                    <div className="container h-100">
                        <h3>PHIM SẮP CHIẾU</h3>
                        <div className="row h-100 align-item-center">
                            <div className="col-6 col-md-8 commingSoonSlider__area--left">
                                <p className = "commingSoonSlider__area--type">{type}</p>
                                <h4 className = "commingSoonSlider__area--title">{title}</h4>
                                <div className = "commingSoonSlider__info">
                                    <div className = "commingSoonSlider__info--star">
                                        {Utils.setStar(starNumber)}
                                    </div>
                                    <div className="commingSoonSlider__info--calendar">
                                        <i class="fa fa-calendar-alt mx-2"></i>
                                        <span className="date">{moment(releaseDate, "DD/MM/YYYY").lang('vi').format('Do MMMM YYYY')}</span>
                                    </div>
                                </div>
                                <p className= "commingSoonSlider__description">{description}</p>
                                <p className = "commingSoonSlider__moreinfo">
                                    <a href="">
                                        XEM THÊM
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                                </p>
                            </div>
                            <div className="col-6 col-md-4 commingSoonSlider__area--right">
                                <div className="commingSoonSlider__img">
                                    <a href="">
                                        <div className="overlay"></div>
                                        <img className = "img-fuild" src= {imgUrl} alt=""/>
                                        <i className="fa fa-play"></i>
                                    </a>
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
