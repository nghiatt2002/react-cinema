import React, { Component } from 'react';
import style from './ListCinema.module.scss';

export default class ListCinema extends Component {
    render() {
        return (
            <div className={style.listCinema}>
                <div className="listContent">
                    <div className="container">
                        <h1>List Cinema</h1>
                        <div className="row homeCinemaComplex">
                            {/* Column 1 */}
                            <ul className="nav nav-tabs" id="parentListCinemas">
                                <li className="cinemaItem active">
                                    <a>
                                        <img src="https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png" alt="" />
                                    </a>
                                </li>
                                <li className="cinemaItem">
                                    <a>
                                        <img src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png" alt="" />
                                    </a>
                                </li>
                                <li className="cinemaItem">
                                    <a>
                                        <img src="https://s3img.vcdn.vn/123phim/2018/09/e520781386bd5436e94d6e15e193a005.png" alt="" />
                                    </a>
                                </li>
                                <li className="cinemaItem">
                                    <a>
                                        <img src="https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png" alt="" />
                                    </a>
                                </li>
                                <li className="cinemaItem">
                                    <a>
                                        <img src="https://s3img.vcdn.vn/123phim/2018/09/9b240f96a233bb43203ee514a21a6004.png" alt="" />
                                    </a>
                                </li>
                                <li className="cinemaItem">
                                    <a>
                                        <img src="https://s3img.vcdn.vn/123phim/2018/09/7b078639bd8fdb09dd83652d207c7b90.png" alt="" />
                                    </a>
                                </li>
                                <li className="cinemaItem">
                                    <a>
                                        <img src="https://s3img.vcdn.vn/123phim/2019/10/9ff07a03371c4a09260309faa32caa55.jpg" alt="" />
                                    </a>
                                </li>
                                <li className="cinemaItem">
                                    <a>
                                        <img src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                            {/* Column 2 */}
                            <div id="listCinemas">
                                <div className="listCinemas">
                                    <div className="cinema">
                                        <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt="" />
                                        <div className="cinema__info">
                                            <span className="cinema__name">
                                                <span className="cinema__parent">CGV</span>
                                                &nbsp;- Aeon Bình Tân</span>
                                            <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                            <span className="cinema__detail">
                                                <a href="#">chi tiết</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cinema">
                                        <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt="" />
                                        <div className="cinema__info">
                                            <span className="cinema__name">
                                                <span className="cinema__parent">CGV</span>
                                                &nbsp;- Aeon Bình Tân</span>
                                            <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                            <span className="cinema__detail">
                                                <a href="#">chi tiết</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cinema">
                                        <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt="" />
                                        <div className="cinema__info">
                                            <span className="cinema__name">
                                                <span className="cinema__parent">CGV</span>
                                                &nbsp;- Aeon Bình Tân</span>
                                            <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                            <span className="cinema__detail">
                                                <a href="#">chi tiết</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cinema">
                                        <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt="" />
                                        <div className="cinema__info">
                                            <span className="cinema__name">
                                                <span className="cinema__parent">CGV</span>
                                                &nbsp;- Aeon Bình Tân</span>
                                            <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                            <span className="cinema__detail">
                                                <a href="#">chi tiết</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cinema">
                                        <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt="" />
                                        <div className="cinema__info">
                                            <span className="cinema__name">
                                                <span className="cinema__parent">CGV</span>
                                                &nbsp;- Aeon Bình Tân</span>
                                            <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                            <span className="cinema__detail">
                                                <a href="#">chi tiết</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cinema">
                                        <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt="" />
                                        <div className="cinema__info">
                                            <span className="cinema__name">
                                                <span className="cinema__parent">CGV</span>
                                                &nbsp;- Aeon Bình Tân</span>
                                            <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                            <span className="cinema__detail">
                                                <a href="#">chi tiết</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cinema">
                                        <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt="" />
                                        <div className="cinema__info">
                                            <span className="cinema__name">
                                                <span className="cinema__parent">CGV</span>
                                                &nbsp;- Aeon Bình Tân</span>
                                            <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                            <span className="cinema__detail">
                                                <a href="#">chi tiết</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cinema">
                                        <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt="" />
                                        <div className="cinema__info">
                                            <span className="cinema__name">
                                                <span className="cinema__parent">CGV</span>
                                                &nbsp;- Aeon Bình Tân</span>
                                            <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                            <span className="cinema__detail">
                                                <a href="#">chi tiết</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cinema">
                                        <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt="" />
                                        <div className="cinema__info">
                                            <span className="cinema__name">
                                                <span className="cinema__parent">CGV</span>
                                                &nbsp;- Aeon Bình Tân</span>
                                            <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                            <span className="cinema__detail">
                                                <a href="#">chi tiết</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cinema">
                                        <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt="" />
                                        <div className="cinema__info">
                                            <span className="cinema__name">
                                                <span className="cinema__parent">CGV</span>
                                                &nbsp;- Aeon Bình Tân</span>
                                            <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                            <span className="cinema__detail">
                                                <a href="#">chi tiết</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="movieShowTimeList">
                                <div className="movie">
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

                                <div className="movie">
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

                                <div className="movie">
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

                                <div className="movie">
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

                                <div className="movie">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
