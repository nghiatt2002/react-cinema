import React, { Component } from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import style from './MovieDetailShowTime.module.scss';

export default class MovieDetailShowTime extends Component {
    render() {
        return (
            <div className="container">
                <div className={style.movieDetailShowTimeStyle}>
                    <div className="movieDetailShowTimeContent">
                        <Tabs forceRenderTabPanel defaultTab="cgv-list-rap" vertical className="vertical-tabs" onChange={(tabId) => { console.log(tabId) }}>
                            <div className="row no-gutter">
                                <div className="col-md-4 columnFirst">
                                    <TabList className="cinemasGroup">
                                        <Tab className="cinemasGroupItem" tabId="cgv" tabFor="cgv-list-rap">
                                            <div className="cinemasGroupItemFlex">
                                                <img className="cinemaImg" src="https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png" alt="" />
                                                <span className="cinemaName">CGV Cinema</span>
                                            </div>
                                        </Tab>
                                        <Tab className="cinemasGroupItem" tabId="bhd" tabFor="bhd-list-rap">
                                            <div className="cinemasGroupItemFlex">
                                                <img className="cinemaImg" src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png" alt="" />
                                                <span className="cinemaName">BHD Cinema</span>
                                            </div>
                                        </Tab>
                                        <Tab className="cinemasGroupItem" tabId="galaxy" tabFor="galaxy-list-rap">
                                            <div className="cinemasGroupItemFlex">
                                                <img className="cinemaImg" src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png" alt="" />
                                                <span className="cinemaName">Galay Cinema</span>
                                            </div>
                                        </Tab>
                                    </TabList>
                                </div>
                                <div className="col-md-8 columnSecond">
                                    <TabPanel tabId="cgv-list-rap">
                                        <Tabs>
                                            <TabList className="listDayOfWeek">
                                                <Tab className="dateSelect" tabId="cgv" tabFor="thu2">
                                                    Thứ 2
                                                </Tab>
                                                <Tab className="dateSelect" tabId="bhd" tabFor="thu3">
                                                    Thứ 3
                                                </Tab>
                                                <Tab className="dateSelect" tabId="galaxy" tabFor="thu4">
                                                    Thứ 4
                                                </Tab>
                                                <Tab className="dateSelect" tabId="galaxy" tabFor="thu5">
                                                    Thứ 5
                                                </Tab>
                                                <Tab className="dateSelect" tabId="galaxy" tabFor="thu6">
                                                    Thứ 6
                                                </Tab>
                                                <Tab className="dateSelect" tabId="galaxy" tabFor="thu7">
                                                    Thứ 7
                                                </Tab>
                                                <Tab className="dateSelect" tabId="galaxy" tabFor="thu8">
                                                    Thứ 8
                                                </Tab>
                                            </TabList>
                                            <TabPanel tabId="thu2">
                                                <div className="movieItem">
                                                    <div className="movieInfo">
                                                        <img className="movieImage" src="./images/cinema.jpg" alt="" />
                                                        <div className="wrapInfo">
                                                            <p>
                                                                <span className="movieAgeType">C18</span>
                                                                <span className="movieName">AAA</span>
                                                            </p>
                                                            <p className="movieTime">100 phút - TIX 7.5 - IMDb 7</p>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="movieItem">
                                                    <div className="movieInfo">
                                                        <img className="movieImage" src="./images/cinema.jpg" alt="" />
                                                        <div className="wrapInfo">
                                                            <p>
                                                                <span className="movieAgeType">C18</span>
                                                                <span className="movieName">AAA</span>
                                                            </p>
                                                            <p className="movieTime">100 phút - TIX 7.5 - IMDb 7</p>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="movieItem">
                                                    <div className="movieInfo">
                                                        <img className="movieImage" src="./images/cinema.jpg" alt="" />
                                                        <div className="wrapInfo">
                                                            <p>
                                                                <span className="movieAgeType">C18</span>
                                                                <span className="movieName">AAA</span>
                                                            </p>
                                                            <p className="movieTime">100 phút - TIX 7.5 - IMDb 7</p>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="movieItem">
                                                    <div className="movieInfo">
                                                        <img className="movieImage" src="./images/cinema.jpg" alt="" />
                                                        <div className="wrapInfo">
                                                            <p>
                                                                <span className="movieAgeType">C18</span>
                                                                <span className="movieName">AAA</span>
                                                            </p>
                                                            <p className="movieTime">100 phút - TIX 7.5 - IMDb 7</p>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel tabId="thu3">
                                                <div className="movieItem">
                                                    <div className="movieInfo">
                                                        <img className="movieImage" src="./images/cinema.jpg" alt="" />
                                                        <div className="wrapInfo">
                                                            <p>
                                                                <span className="movieAgeType">C18</span>
                                                                <span className="movieName">AAA</span>
                                                            </p>
                                                            <p className="movieTime">100 phút - TIX 7.5 - IMDb 7</p>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel tabId="thu4">
                                                <div className="movieItem">
                                                    <div className="movieInfo">
                                                        <img className="movieImage" src="./images/cinema.jpg" alt="" />
                                                        <div className="wrapInfo">
                                                            <p>
                                                                <span className="movieAgeType">C18</span>
                                                                <span className="movieName">AAA</span>
                                                            </p>
                                                            <p className="movieTime">100 phút - TIX 7.5 - IMDb 7</p>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </Tabs>
                                    </TabPanel>
                                    <TabPanel tabId="bhd-list-rap">B</TabPanel>
                                    <TabPanel tabId="galaxy-list-rap">C</TabPanel>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
