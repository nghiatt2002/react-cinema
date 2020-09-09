import React, { Component } from 'react'
import menuStyle from './Menu.module.scss';

export default class Menu extends Component {
    render() {
        return (
            <div className={menuStyle.Menu}>
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
        </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav> */}


                <nav className="menu__main navbar navbar-expand-sm navbar-light">
                    <img src="./img/hero-1.jpg" className="d-inline d-sm-none" height={40} alt="..." />
                    <div className="d-flex aligh-item-end">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                    <div className="d-lg-flex justify-content-around collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">MUA VÉ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    PHIM
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="menu__Movie text-light">
                                        <div>
                                            <a href="#">PHIM ĐANG CHIẾU</a>
                                            <div className="d-none d-sm-block menu__Movie--list px-3 py-1">
                                                <div className="row">
                                                    <div className="menu__Movie--item col-3">
                                                        <div className="menu__Movie--img">
                                                            <img src="./img/hero-1.jpg" className="w-100" alt="..." />
                                                            <button className="p-1"><span>MUA VÉ</span></button>
                                                        </div>
                                                        <p>movie name</p>
                                                    </div>
                                                    <div className="menu__Movie--item col-3">
                                                        <div className="menu__Movie--img">
                                                            <img src="./img/hero-1.jpg" className="w-100" alt="..." />
                                                            <button className="p-1"><span>MUA VÉ</span></button>
                                                        </div>
                                                        <p>movie name</p>
                                                    </div>
                                                    <div className="menu__Movie--item col-3">
                                                        <div className="menu__Movie--img">
                                                            <img src="./img/hero-1.jpg" className="w-100" alt="..." />
                                                            <button className="p-1"><span>MUA VÉ</span></button>
                                                        </div>
                                                        <p>movie name</p>
                                                    </div>
                                                    <div className="menu__Movie--item col-3">
                                                        <div className="menu__Movie--img">
                                                            <img src="./img/hero-1.jpg" className="w-100" alt="..." />
                                                            <button className="p-1"><span>MUA VÉ</span></button>
                                                        </div>
                                                        <p>movie name</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div>
                                            <a href="#">PHIM SẮP CHIẾU</a>
                                            <div className="d-none d-sm-block menu__Movie--list px-3 py-1">
                                                <div className="row">
                                                    <div className="menu__Movie--item col-3">
                                                        <div className="menu__Movie--img">
                                                            <img src="./img/hero-1.jpg" className="w-100" alt="..." />
                                                            <button className="p-1"><span>MUA VÉ</span></button>
                                                        </div>
                                                        <p>movie name</p>
                                                    </div>
                                                    <div className="menu__Movie--item col-3">
                                                        <div className="menu__Movie--img">
                                                            <img src="./img/hero-1.jpg" className="w-100" alt="..." />
                                                            <button className="p-1"><span>MUA VÉ</span></button>
                                                        </div>
                                                        <p>movie name</p>
                                                    </div>
                                                    <div className="menu__Movie--item col-3">
                                                        <div className="menu__Movie--img">
                                                            <img src="./img/hero-1.jpg" className="w-100" alt="..." />
                                                            <button className="p-1"><span>MUA VÉ</span></button>
                                                        </div>
                                                        <p>movie name</p>
                                                    </div>
                                                    <div className="menu__Movie--item col-3">
                                                        <div className="menu__Movie--img">
                                                            <img src="./img/hero-1.jpg" className="w-100" alt="..." />
                                                            <button className="p-1"><span>MUA VÉ</span></button>
                                                        </div>
                                                        <p>movie name</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    GÓC ĐIỆN ẢNH
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">THỂ LOẠI PHIM</a>
                                    <a className="dropdown-item" href="#">DIỄN VIÊN</a>
                                    <a className="dropdown-item" href="#">ĐẠO DIỄN</a>
                                    <a className="dropdown-item" href="#">BÌNH LUẬN PHIM</a>
                                    <a className="dropdown-item" href="#">BLOG ĐIỆN ẢNH</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SỰ KIỆN
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">ƯU ĐÃI</a>
                                    <a className="dropdown-item" href="#">PHIM HAY TRONG THÁNG</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">RẠP/GIÁ VÉ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">HỖ TRỢ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">THÀNH VIÊN</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
