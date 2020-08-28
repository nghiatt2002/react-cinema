import React, { Component } from 'react';
import style from './ListCinema.module.scss';

export default class ListCinema extends Component {

    render() {
        return (
            <div className="container">
                <div className={style.listCinema}>
                    <div className="listCinemaContent">
                        {/* Danh sach cac rap chieu phim */}
                        <div className="col-1">
                            <div className="nav flex-column listCinemasGroup" id="listCinemasGroup" role="tablist" aria-orientation="vertical">
                                <a className="cinemasGroupItem active" id="cgvRap" data-toggle="pill" href="#cgv-listRap" role="tab" aria-controls="cgv-listRap" aria-selected="true">
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png" alt="" />
                                </a>
                                <a className="cinemasGroupItem" id="bhdRap" data-toggle="pill" href="#bhd-listRap" role="tab" aria-controls="bhd-listRap" aria-selected="false">
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png" alt="" />
                                </a>
                                <a className="cinemasGroupItem" id="galaxyRap" data-toggle="pill" href="#galaxy-listRap" role="tab" aria-controls="galaxy-listRap" aria-selected="false">
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/e520781386bd5436e94d6e15e193a005.png" alt="" />
                                </a>
                                <a className="cinemasGroupItem" id="cnsRap" data-toggle="pill" href="#cns-listRap" role="tab" aria-controls="cns-listRap" aria-selected="false">
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png" alt="" />
                                </a>
                            </div>
                        </div>

                        {/* Danh sach cac cum rap */}
                        {/* <div className="col-3"> */}
                            <div className="col-4 tab-content listCinemas" id="listCinemas">
                                {/* DS rap CGV */}
                                <div className="tab-pane fade show active" id="cgv-listRap" role="tabpanel" aria-labelledby="cgvRap">
                                    <div className="nav flex-column" id="cgv-listRapDetail" role="tablist" aria-orientation="vertical">
                                        <div className="cinemaItem active" id="cgv1" data-toggle="tab" href="#cgv1-lichChieu" role="tab" aria-controls="cgv1-lichChieu" aria-selected="true">
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
                                        </div>
                                        <div className="cinemaItem" id="cgv2" data-toggle="tab" href="#cgv2-lichChieu" role="tab" aria-controls="cgv2-lichChieu" aria-selected="false">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">CGV</span>
                                                    &nbsp;- Pandora Tân Phú</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cinemaItem" id="cgv3" data-toggle="tab" href="#cgv3-lichChieu" role="tab" aria-controls="cgv3-lichChieu" aria-selected="false">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">CGV</span>
                                                    &nbsp;- Aeon Đồng Khởi</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cinemaItem" id="cgv4" data-toggle="tab" href="#cgv4-lichChieu" role="tab" aria-controls="cgv4-lichChieu" aria-selected="false">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">CGV</span>
                                                    &nbsp;- Aeon Đồng Khởi</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cinemaItem" id="cgv5" data-toggle="tab" href="#cgv5-lichChieu" role="tab" aria-controls="cgv5-lichChieu" aria-selected="false">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">CGV</span>
                                                    &nbsp;- Aeon Đồng Khởi</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cinemaItem" id="cgv6" data-toggle="tab" href="#cgv6-lichChieu" role="tab" aria-controls="cgv6-lichChieu" aria-selected="false">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">CGV</span>
                                                    &nbsp;- Aeon Đồng Khởi</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cinemaItem" id="cgv7" data-toggle="tab" href="#cgv7-lichChieu" role="tab" aria-controls="cgv7-lichChieu" aria-selected="false">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">CGV</span>
                                                    &nbsp;- Aeon Đồng Khởi</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* DS rap BHD */}
                                <div className="tab-pane fade show" id="bhd-listRap" role="tabpanel" aria-labelledby="bhdRap">
                                    <div className="nav flex-column" id="bhd-listRapDetail" role="tablist" aria-orientation="vertical">
                                        <div className="cinemaItem active" id="bhd1" data-toggle="tab" href="#bhd1-lichChieu" role="tab" aria-controls="bhd1-lichChieu" aria-selected="true">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">BHD</span>
                                                    &nbsp;- Aeon Đồng Khởi</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cinemaItem" id="bhd2" data-toggle="tab" href="#bhd2-lichChieu" role="tab" aria-controls="bhd2-lichChieu" aria-selected="false">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">BHD</span>
                                                    &nbsp;- Aeon Đồng Khởi</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cinemaItem" id="bhd3" data-toggle="tab" href="#bhd3-lichChieu" role="tab" aria-controls="bhd3-lichChieu" aria-selected="false">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">BHD</span>
                                                    &nbsp;- Aeon Đồng Khởi</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cinemaItem" id="bhd4" data-toggle="tab" href="#bhd4-lichChieu" role="tab" aria-controls="bhd4-lichChieu" aria-selected="false">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">BHD</span>
                                                    &nbsp;- Aeon Đồng Khởi</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* DS rap GALAXY */}
                                <div className="tab-pane fade show" id="galaxy-listRap" role="tabpanel" aria-labelledby="galaxyRap">
                                    <div className="nav flex-column" id="galaxy-listRapDetail" role="tablist" aria-orientation="vertical">
                                        <div className="cinemaItem active" id="galaxy1" data-toggle="tab" href="#galaxy1-lichChieu" role="tab" aria-controls="galaxy1-lichChieu" aria-selected="true">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2020/01/galaxy-linh-trung-15791435324335.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">Galaxy</span>
                                                    &nbsp;- Aeon Đồng Khởi</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cinemaItem" id="galaxy2" data-toggle="tab" href="#galaxy2-lichChieu" role="tab" aria-controls="galaxy2-lichChieu" aria-selected="false">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2020/01/galaxy-linh-trung-15791435324335.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">Galaxy</span>
                                                    &nbsp;- Aeon Đồng Khởi</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cinemaItem" id="galaxy3" data-toggle="tab" href="#galaxy3-lichChieu" role="tab" aria-controls="galaxy3-lichChieu" aria-selected="false">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2020/01/galaxy-linh-trung-15791435324335.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">Galaxy</span>
                                                    &nbsp;- Aeon Đồng Khởi</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cinemaItem" id="galaxy4" data-toggle="tab" href="#galaxy4-lichChieu" role="tab" aria-controls="galaxy4-lichChieu" aria-selected="false">
                                            <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2020/01/galaxy-linh-trung-15791435324335.jpg" alt=""/>
                                            <div className="cinema__info">
                                                <span className="cinema__name">
                                                    <span className="cinema__parent">Galaxy</span>
                                                    &nbsp;- Aeon Đồng Khởi</span>
                                                <span className="cinema__address">Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM</span>
                                                <span className="cinema__detail">
                                                    <a href="#">chi tiết</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}

                        {/* Danh sach lich chieu phim theo rap */}
                        <div className="col-7">
                            <div className="tab-content" id="v-pills-tabContent2">
                                {/* Lich chieu CGV theo rap */}
                                <div className="tab-pane fade show active" id="cgv1-lichChieu" role="tabpanel" aria-labelledby="cgv1" aria-selected="true">
                                    <div className="nav flex-column nav-pills" id="cgv1-lichChieuDetail" role="tablist" aria-orientation="vertical">
                                        <ul>
                                            <li>CGV1: Phim 1</li>
                                            <li>CGV1: Phim 2</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-pane fade show" id="cgv2-lichChieu" role="tabpanel" aria-labelledby="cgv2" aria-selected="false">
                                    <div className="nav flex-column nav-pills" id="cgv2-lichChieuDetail" role="tablist" aria-orientation="vertical">
                                        <ul>
                                            <li>CGV2: Phim 1</li>
                                            <li>CGV2: Phim 2</li>
                                            <li>CGV2: Phim 3</li>
                                            <li>CGV2: Phim 4</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-pane fade show" id="cgv3-lichChieu" role="tabpanel" aria-labelledby="cgv3" aria-selected="false">
                                    <div className="nav flex-column nav-pills" id="cgv3-lichChieuDetail" role="tablist" aria-orientation="vertical">
                                        <ul>
                                            <li>CGV3: Phim 1</li>
                                            <li>CGV3: Phim 2</li>
                                            <li>CGV3: Phim 3</li>
                                        </ul>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="tab-pane fade show" id="bhd1-lichChieu" role="tabpanel" aria-labelledby="bhd1" aria-selected="false">
                                    <div className="nav flex-column nav-pills" id="cgv1-lichChieuDetail" role="tablist" aria-orientation="vertical">
                                        <ul>
                                            <li>BHD1: Phim 1</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-pane fade show" id="bhd2-lichChieu" role="tabpanel" aria-labelledby="bhd2" aria-selected="false">
                                    <div className="nav flex-column nav-pills" id="cgv2-lichChieuDetail" role="tablist" aria-orientation="vertical">
                                        <ul>
                                            <li>BHD2: Phim 1</li>
                                            <li>BHD2: Phim 2</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-pane fade show" id="bhd3-lichChieu" role="tabpanel" aria-labelledby="bhd3" aria-selected="false">
                                    <div className="nav flex-column nav-pills" id="cgv3-lichChieuDetail" role="tablist" aria-orientation="vertical">
                                        <ul>
                                            <li>BHD3: Phim 1</li>
                                            <li>BHD3: Phim 2</li>
                                            <li>BHD3: Phim 3</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-pane fade show" id="bhd4-lichChieu" role="tabpanel" aria-labelledby="bhd4" aria-selected="false">
                                    <div className="nav flex-column nav-pills" id="cgv3-lichChieuDetail" role="tablist" aria-orientation="vertical">
                                        <ul>
                                            <li>BHD4: Phim 1</li>
                                            <li>BHD4: Phim 2</li>
                                            <li>BHD4: Phim 3</li>
                                            <li>BHD4: Phim 4</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Lich chieu GALAXY theo rap */}
                                <div className="tab-pane fade show" id="galaxy1-lichChieu" role="tabpanel" aria-labelledby="bhd1">
                                    <ul>
                                        <li>GALAXY1: Phim 1</li>
                                        <li>GALAXY1: Phim 2</li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade show" id="galaxy2-lichChieu" role="tabpanel" aria-labelledby="bhd2">
                                    <ul>
                                        <li>GALAXY2: Phim 1</li>
                                        <li>GALAXY2: Phim 2</li>
                                        <li>GALAXY2: Phim 3</li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade show" id="galaxy3-lichChieu" role="tabpanel" aria-labelledby="bhd3">
                                    <ul>
                                        <li>GALAXY3: Phim 1</li>
                                        <li>GALAXY3: Phim 2</li>
                                        <li>GALAXY3: Phim 3</li>
                                        <li>GALAXY3: Phim 4</li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade show" id="galaxy4-lichChieu" role="tabpanel" aria-labelledby="bhd4">
                                    <ul>
                                        <li>GALAXY4: Phim 1</li>
                                        <li>GALAXY4: Phim 2</li>
                                        <li>GALAXY4: Phim 3</li>
                                        <li>GALAXY4: Phim 4</li>
                                        <li>GALAXY4: Phim 5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}
