import React, { Component } from 'react'
import menuStyle from './Menu.module.scss';
import { getFilmLists } from '../../../../redux/actions/FilmSectionReducerAction';
import { connect } from 'react-redux';

class Menu extends Component {

    mapPropstoDataProvider = () => {
        let dataProvider = this.props.listFilm.map((item) => {
            return ({
                title: item.tenPhim,
                imgUrl: item.hinhAnh,
                ageType: 'C18',
                trailerUrl: item.trailer,
                description: item.moTa
            })
        })
        return dataProvider;
    }

    renderFilm = () => {
        const dataProvider = this.mapPropstoDataProvider();
        return dataProvider.slice(0, 4).map((item, index) => {
            return (
                <div className="menu__Movie--item col-3">
                    <div className="menu__Movie--img">
                        <img src="./img/hero-1.jpg" className="w-100" alt="..." />
                        <button className="p-1"><span>MUA VÉ</span></button>
                    </div>
                    <p>{item.title}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div className={menuStyle.Menu}>
                <nav className="menu__main navbar navbar-expand-sm navbar-light">
                    <img src="./img/hero-1.jpg" className="d-inline d-sm-none" height={40} alt="..." />
                    <form className="d-inline d-sm-none header__form">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for anything" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-search" /></span>
                            </div>
                        </div>
                    </form>
                    <button className="d-inline d-sm-none navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="d-lg-flex justify-content-around collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item d-inline d-sm-none">
                                <a className="nav-link" href="#">ĐĂNG NHẬP / ĐĂNG KÝ</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">MUA VÉ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    PHIM
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="menu__Movie d-none d-sm-block text-light">
                                        <div>
                                            <a href="#">PHIM ĐANG CHIẾU</a>
                                            <div className="menu__Movie--list px-3 py-1">
                                                <div className="row">
                                                    {this.renderFilm()}
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <a href="#">PHIM SẮP CHIẾU</a>
                                            <div className="menu__Movie--list px-3 py-1">
                                                <div className="row">
                                                    {this.renderFilm()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-inline d-sm-none">
                                        <a className="dropdown-item" href="#">PHIM ĐANG CHIẾU</a>
                                        <a className="dropdown-item" href="#">PHIM SẮP CHIẾU</a>
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
                            <li className="nav-item">
                                <a className="nav-link" href="#">RẠP/GIÁ VÉ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">HỖ TRỢ</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" data-toggle="modal" data-target="#modalLRForm">ĐĂNG NHẬP</a>
                                {/* <a className="nav-link" href="#">THÀNH VIÊN</a> */}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

    componentDidMount = () => {
        this.props.dispatch(getFilmLists());
    }
}

const mapStatetoProps = (state) => {
    return ({
        listFilm: state.FilmSectionReducer.listFilm
    });
}

export default connect(mapStatetoProps)(Menu)
