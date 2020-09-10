import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import style from './MovieShowTime.module.scss';

import { getMovieShowTimeAxios } from '../../redux/actions/MovieShowTimeAction';

export default function MovieShowTime(props) {
    // giống như mapStateToProps lấy dữ liệu từ reducer
    let movieShowTimeInfo = useSelector(state => state.MovieShowTimeReducer.movieShowTimeInfo);

    // thay thế this.props.dispatch
    let dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect thay thế cho didMount');
        // dispatch 1 action
        dispatch(getMovieShowTimeAxios());
    }, []);


    // render column danh sach cac loai rap
    let renderCinemaGroups = () => {
        // console.log(movieShowTimeInfo);
        return movieShowTimeInfo.map((item, index) => {
            console.log(item)
            return (
                <Tab className="cinemasGroup__item" tabFor={item.maHeThongRap} key={index} >
                    <img src={item.logo} alt={item.logo} />
                </Tab>
            );
        })
    };

    // render column ds rap chieu theo cum
    let renderCinema = (cinema) => {
        return cinema.map((item, index) => {
            return (
                <Tab className="cinemaItem" tabFor={item.maCumRap} key={index}>
                    <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                    <div className="cinema__info">
                        <span className="cinema__name">{item.tenCumRap}</span>
                        <span className="cinema__address">{item.diaChi}</span>
                        <span className="cinema__detail">
                            <a href="#">chi tiết</a>
                        </span>
                    </div>
                </Tab>
            )
        })
    };

    let renderFilm = (listFilm) => {
        console.log('DS Phim: ', listFilm)
        return listFilm.map((phim, index) => {
            return (
                <div className="movieItem" key={index}>
                    <div className="movieInfo">
                        <img className="movieImage" src={phim.hinhAnh} alt={phim.hinhAnh} />
                        <div className="wrapInfo">
                            <p>
                                <span className="movieAgeType">C18</span>
                                <span className="movieName">{phim.tenPhim}</span>
                            </p>
                            <p className="movieTime">86 phút - TIX 6.2 - IMDb 0</p>
                        </div>
                        <div className="movieSessions">
                            <div className="movieListTime">
                                <div className="movieType">2D Digital</div>
                                <div className="movieSession">
                                    <a href="#" className="showTimeDetail">
                                        <span className="movie-time">18:05</span>
                                    </a>
                                    <a href="#" className="showTimeDetail">
                                        <span className="movie-time">18:05</span>
                                    </a>
                                    <a href="#" className="showTimeDetail">
                                        <span className="movie-time">18:05</span>
                                    </a>
                                    <a href="#" className="showTimeDetail">
                                        <span className="movie-time">18:05</span>
                                    </a>
                                    <a href="#" className="showTimeDetail">
                                        <span className="movie-time">18:05</span>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    let renderlistMovies =(cinema) => {
        return cinema.map((item, index) => {
            return (
                <TabPanel tabId={item.maCumRap} key={index}>
                    <div className="movieShowTimeList scrollbarY">
                        {renderFilm(item.danhSachPhim)}
                    </div>
                </TabPanel>
            )
        })
    }

    // render column 2 & 3
    let renderCinemaAndShowTime = () => {
        return movieShowTimeInfo.map((cinema, index) => {
            return (
                <TabPanel tabId={cinema.maHeThongRap} key={index}>
                    {/* <div> */}
                        <Tabs vertical>
                            <div className="row no-gutter">
                                <div className="col-md-5 col-lg-4">
                                    <TabList className="listCinemas scrollbarY">
                                        {renderCinema(cinema.lstCumRap)}
                                    </TabList>
                                </div>
                                <div className="col-md-7 col-lg-8">
                                    {renderlistMovies(cinema.lstCumRap)}
                                </div>
                            </div>
                        </Tabs>
                    {/* </div> */}
                </TabPanel>
            )
        })
    }

    return (
        <div className="container">
            <div className={style.movieShowTimeStyle}>
                <div className="movieShowTimeContent">
                    <Tabs vertical>
                        <div className="row no-gutter">
                            <div className="col-md-12 col-lg-1 columnFirst scrollbarY scrollbarX">
                                <TabList className="cinemasGroup">
                                    {renderCinemaGroups()}
                                    {renderCinemaGroups()}
                                </TabList>
                            </div>
                            <div className="col-md col-lg-11">
                                {renderCinemaAndShowTime()}
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

