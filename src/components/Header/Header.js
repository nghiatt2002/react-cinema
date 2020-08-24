import React, { Component } from 'react'
import headerStyle from './Header.module.scss';

export default class Header extends Component {
    render() {
        return (
            <div className={headerStyle.header}>
                <div className="container-fluid">
                    <div className="row header__content">
                        <div className="col-4">
                            <div className="header__logo">
                                <a href="#">
                                    <img src="./img/header/galaxy-logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header__search">
                                <form action="">
                                    <input className="headerSearch_txt" type="text" name="" id="" placeholder="Tìm tên phim, diễn viên..." />
                                    <button className="headerSearch_btn" type="submit">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="header__login">
                                <i className="headerLogin__i fa fa-user" />
                                <a href="">Đăng Nhập</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}