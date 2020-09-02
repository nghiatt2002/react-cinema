import React, { Component } from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import style from './ListCinema3.module.scss';

import axios from 'axios';


export default class ListCinema3 extends Component {

    componentDidMount() {
        axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01',
            method: 'GET'
        }).then(res => {
            // sau khi lấy dữ liệu từ api => dispacth reducer danhsachPhim
            console.log(res.data);
        }).catch(err => {
            console.log(err.response.data);
        })
    }

    // link tham khảo:
    // https://reactcommunity.org/react-tabs/
    // https://www.npmjs.com/package/react-web-tabs
    render() {
        return (
            <div className="container">
                <div className={style.listCinema}>
                    <div className="listCinemaContent">
                        <Tabs forceRenderTabPanel defaultTab="cgv-list-rap" vertical className="vertical-tabs" onChange={(tabId) => { console.log(tabId) }}>
                            {/* column 1 */}
                            <TabList className="listCinemasGroup">
                                <Tab className="cinemasGroupItem" tabId="cgv" tabFor="cgv-list-rap">
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png" alt="" />
                                </Tab>
                                <Tab className="cinemasGroupItem" tabId="bhd" tabFor="bhd-list-rap">
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png" alt="" />
                                </Tab>
                                <Tab className="cinemasGroupItem" tabId="galaxy" tabFor="galaxy-list-rap">
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/e520781386bd5436e94d6e15e193a005.png" alt="" />
                                </Tab>
                            </TabList>

                            {/* CGV */}
                            <TabPanel tabId="cgv-list-rap">
                                <Tabs vertical>
                                    {/* column 2 */}
                                    <TabList className="listCinemas scrollbar" defaultTab="cgv1">
                                        <Tab className="cinemaItem" tabId="cgv1" tabFor="cgv1-lich-chieu">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">CGV</span>
                                                    &nbsp;- Aeon Bình Tân</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </Tab>
                                        <Tab className="cinemaItem" tabId="cgv2" tabFor="cgv2-lich-chieu">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">CGV</span>
                                                    &nbsp;- Aeon Bình Tân</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </Tab>
                                        <Tab className="cinemaItem" tabId="cgv3" tabFor="cgv3-lich-chieu">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">CGV</span>
                                                    &nbsp;- Aeon Bình Tân</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </Tab>
                                        <Tab className="cinemaItem" tabId="cgv4" tabFor="cgv4-lich-chieu">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">CGV</span>
                                                    &nbsp;- Aeon Bình Tân</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </Tab>
                                        <Tab className="cinemaItem" tabId="cgv4" tabFor="cgv4-lich-chieu">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">CGV</span>
                                                    &nbsp;- Aeon Bình Tân</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </Tab>
                                        <Tab className="cinemaItem" tabId="cgv5" tabFor="cgv5-lich-chieu">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">CGV</span>
                                                    &nbsp;- Aeon Bình Tân</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </Tab>
                                        <Tab className="cinemaItem" tabId="cgv6" tabFor="cgv6-lich-chieu">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">CGV</span>
                                                    &nbsp;- Aeon Bình Tân</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </Tab>
                                    </TabList>

                                    {/* column 3 - start */}
                                    <TabPanel tabId="cgv1-lich-chieu">
                                        <div className="movieShowTimeList scrollbar">
                                            <div className="movieItem">
                                                <div className="movieInfo">
                                                    <img className="movieImage" src="https://s3img.vcdn.vn/mobile/123phim/2020/08/ham-quy-behind-you-c18-15976394035712_60x60.jpg" />
                                                    <div className="wrapInfo">
                                                        <p>
                                                            <span className="movieAgeType">C18</span>
                                                            <span className="movieName">Hầm quỷ - Behind You</span>
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

                                            <div className="movieItem">
                                                <div className="movieInfo">
                                                    <img className="movieImage" src="https://s3img.vcdn.vn/mobile/123phim/2020/08/ham-quy-behind-you-c18-15976394035712_60x60.jpg" />
                                                    <div className="wrapInfo">
                                                        <p>
                                                            <span className="movieAgeType">C18</span>
                                                            <span className="movieName">Hầm quỷ - Behind You</span>
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

                                            <div className="movieItem">
                                                <div className="movieInfo">
                                                    <img className="movieImage" src="https://s3img.vcdn.vn/mobile/123phim/2020/08/ham-quy-behind-you-c18-15976394035712_60x60.jpg" />
                                                    <div className="wrapInfo">
                                                        <p>
                                                            <span className="movieAgeType">C18</span>
                                                            <span className="movieName">Hầm quỷ - Behind You</span>
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
                                                                <a href="#" className="showTimeDetail">
                                                                    <span className="movie-time">18:05</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel tabId="cgv2-lich-chieu">
                                        <ul>
                                            <li>CGV2 - Phim 1</li>
                                            <li>CGV2 - Phim 2</li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId="cgv3-lich-chieu">
                                        <ul>
                                            <li>CGV3 - Phim 1</li>
                                            <li>CGV3 - Phim 2</li>
                                            <li>CGV3 - Phim 3</li>
                                        </ul>
                                    </TabPanel>
                                    {/* column 3 - end */}
                                </Tabs>
                            </TabPanel>

                            {/* BHD */}
                            <TabPanel tabId="bhd-list-rap">
                                <Tabs vertical>
                                    {/* column 2 */}
                                    <TabList defaultTab="bhd1">
                                        <Tab tabId="bhd1" tabFor="bhd1-lich-chieu">BHD 1</Tab>
                                        <Tab tabId="bhd2" tabFor="bhd2-lich-chieu">BHD 2</Tab>
                                        <Tab tabId="bhd3" tabFor="bhd3-lich-chieu">BHD 3</Tab>
                                    </TabList>

                                    {/* column 3 - start */}
                                    <TabPanel tabId="bhd1-lich-chieu">
                                        <ul>
                                            <li>BHD1 - Phim 1</li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId="bhd2-lich-chieu">
                                        <ul>
                                            <li>BHD2 - Phim 1</li>
                                            <li>BHD2 - Phim 2</li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId="bhd3-lich-chieu">
                                        <ul>
                                            <li>BHD3 - Phim 1</li>
                                            <li>BHD3 - Phim 2</li>
                                            <li>BHD3 - Phim 3</li>
                                        </ul>
                                    </TabPanel>
                                    {/* column 3 - end */}
                                </Tabs>
                            </TabPanel>


                            {/* GALAXY */}
                            <TabPanel tabId="galaxy-list-rap">
                                <Tabs vertical>
                                    {/* column 2 */}
                                    <TabList defaultTab="bhd1">
                                        <Tab tabId="galaxy1" tabFor="galaxy1-lich-chieu">GALAXY 1</Tab>
                                        <Tab tabId="galaxy2" tabFor="galaxy2-lich-chieu">GALAXY 2</Tab>
                                        <Tab tabId="galaxy3" tabFor="galaxy3-lich-chieu">GALAXY 3</Tab>
                                    </TabList>

                                    {/* column 3 - start */}
                                    <TabPanel tabId="galaxy1-lich-chieu">
                                        <ul>
                                            <li>GALAXY1 - Phim 1</li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId="galaxy2-lich-chieu">
                                        <ul>
                                            <li>GALAXY2 - Phim 1</li>
                                            <li>GALAXY2 - Phim 2</li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId="galaxy3-lich-chieu">
                                        <ul>
                                            <li>GALAXY3 - Phim 1</li>
                                            <li>GALAXY3 - Phim 2</li>
                                            <li>GALAXY3 - Phim 3</li>
                                        </ul>
                                    </TabPanel>
                                    {/* column 3 - end */}
                                </Tabs>
                            </TabPanel>

                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
