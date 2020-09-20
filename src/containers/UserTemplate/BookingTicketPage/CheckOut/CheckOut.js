import { event } from 'jquery';
import React, { Component } from 'react';
import style from './CheckOut.module.scss';

export default class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailActive: false,
            phoneActive: false,
        }
    }

    onType = (event) => {
        switch (event.target.name) {
            case 'email': {
                this.setState({
                    emailActive: String(event.target.value).length > 0
                })
                break;
            }
            case 'phone': {
                this.setState({
                    phoneActive: String(event.target.value).length > 0
                })
                break;
            }
        }
    }
    render() {
        return (
            <div className = {style.checkout}>
                <div className="checkout-area">
                    <div className="total-price">
                        <h2>0 đ</h2>
                    </div>
                    <div className="film-info">
                        <p className="film-title">
                            Greenland: Thảm Hoạ Thiên Thạch
                        </p>
                        <p className = "cinema-name mb-0">
                            DDC - Đống Đa
                        </p>
                        <p className = "cinema-hour">
                            Hôm nay 20/09/2020 - 21:25 - RẠP 2
                        </p>
                    </div>
                    <div className="seat-info">
                        <div className="seat-name">
                            <span className = "mr-2">Ghế</span>
                        </div>
                        <div className="price">
                            0đ
                        </div>
                    </div>
                    <div className="checkout-form form-group">
                        <div className={`checkout-form-area ${this.state.emailActive ? 'has-text': ''}`}>
                            <input id = "email" name = "email" className = "checkout-input form-control" type="text" onChange = {this.onType}/>
                            <label className="checkout-label" for = "email">E-Mail</label>
                        </div>
                    </div>
                    <div className="checkout-form form-group">
                        <div className={`checkout-form-area ${this.state.phoneActive ? 'has-text': ''}`}>
                            <input id = "phone" name = "phone" className = "checkout-input form-control" type="text" onChange = {this.onType}/>
                            <label className="checkout-label" for = "phone">Phone</label>
                        </div>
                    </div>
                    <div className="checkout-promotion">
                        <div className="promotion-form">
                            <input id = "promotion" name = "promotion" className = "promotion-input form-control"
                             type="text" placeholder= "Nhập tại đây..." />
                            <label className="promotion-label" for = "promotion">Phone</label>
                        </div>
                        <div className="promotion-btn">
                            <button className = "btn btn-success">Áp dụng</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
