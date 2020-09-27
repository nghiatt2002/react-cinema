import { event } from 'jquery';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './CheckOut.module.scss';

class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailActive: false,
            phoneActive: false,
            radioCheck: ''
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
    renderSeatSelected = () => {
       return this.props.seatSelected.map((item, index) => {
            return (
                <span className="mr-2" key = {index}>{item.seatNameDisplay}</span>
            )
        })
    }
    checkRadioHandle = (value) => {
        this.setState({
            radioCheck: value
        })
    }
    render() {
        return (
            <div className={style.checkout}>
                <div className="checkout-area">
                    <div className="checkout-info">
                        <div className="total-price">
                            <h2>{(this.props.total).toLocaleString()} đ</h2>
                        </div>
                        <div className="film-info">
                            <p className="film-title">
                                Greenland: Thảm Hoạ Thiên Thạch
                        </p>
                            <p className="cinema-name mb-0">
                                DDC - Đống Đa
                        </p>
                            <p className="cinema-hour">
                                Hôm nay 20/09/2020 - 21:25 - RẠP 2
                        </p>
                        </div>
                        <div className="seat-info">
                            <div className="seat-name">
                                <span className="mr-2">Ghế</span>
                                {this.renderSeatSelected()}
                            </div>
                            <div className="price">
                            {(this.props.total).toLocaleString()} đ
                        </div>
                        </div>
                        <div className="checkout-form form-group">
                            <div className={`checkout-form-area ${this.state.emailActive ? 'has-text' : ''}`}>
                                <input id="email" name="email" className="checkout-input form-control" type="text" onChange={this.onType} />
                                <label className="checkout-label" htmlFor="email">E-Mail</label>
                            </div>
                        </div>
                        <div className="checkout-form form-group">
                            <div className={`checkout-form-area ${this.state.phoneActive ? 'has-text' : ''}`}>
                                <input id="phone" name="phone" className="checkout-input form-control" type="text" onChange={this.onType} />
                                <label className="checkout-label" htmlFor="phone">Phone</label>
                            </div>
                        </div>
                        <div className="checkout-promotion">
                            <div className="promotion-form">
                                <input id="promotion" name="promotion" className="promotion-input form-control"
                                    type="text" placeholder="Nhập tại đây..." />
                                <label className="promotion-label" htmlFor="promotion">Mã giảm giá</label>
                            </div>
                            <div className="promotion-btn">
                                <button className="btn btn-success">Áp dụng</button>
                            </div>
                        </div>
                        <div className="checkout-medthod">
                            <label htmlFor="" className="checkout-medthod--label">Hình thức thanh toán</label>
                            <p className="checkout-medthod-err d-none">Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.</p>
                            <div className="checkout-medthod__select">
                                <div className="chooseethod">
                                    <input type="radio" checked = {this.state.radioCheck === 'ZAlOPAY'} value="ZAlOPAY" onChange = {() => {this.checkRadioHandle('ZAlOPAY')}} />
                                    <img src="./images/zalo.jpg" alt="" />
                                    <div className="d-flex  align-items-center method-title">
                                        <p>Thanh toán qua ZaloPay</p>
                                    </div>
                                </div>
                                <div className="chooseethod">
                                    <input type="radio" checked = {this.state.radioCheck === 'CCPAY'} value="CCPAY" onChange = {() => {this.checkRadioHandle('CCPAY')}}/>
                                    <img src="./images/ccCard.png" alt="" />
                                    <div className="d-flex align-items-center method-title">
                                        <p>Visa, Master, JCP</p>
                                    </div>
                                </div>
                                <div className="chooseethod">
                                    <input type="radio" checked = {this.state.radioCheck === 'ATMPAY'} value="ATMPAY" onChange = {() => {this.checkRadioHandle('ATMPAY')}}/>
                                    <img src="./images/ccCard.png" alt="" />
                                    <div className="d-flex align-items-center method-title">
                                        <p>ATM nội địa</p>
                                    </div>
                                </div>
                                <div className="chooseethod">
                                    <input type="radio" checked = {this.state.radioCheck === 'STORES'} value="STORES"  onChange = {() => {this.checkRadioHandle('STORES')}}/>
                                    <img src="./images/store.png" alt="" />
                                    <div className="d-flex align-items-center method-title">
                                        <p>Thanh toán tại cửa hàng tiện ích</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pay-area">
                        <div className="pay-area--notice">
                            <p>Vé đã mua không thể đổi hoặc hoàn tiền</p>
                            <p>Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập</p>
                        </div>
                        <div className = "pay-display">
                            <div className = "pay-price px-3">
                                {this.renderSeatSelected()}
                            </div>
                            <button className="pay-btn">
                                Đặt vé
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        seatSelected : state.BookingTicketReducer.seatSelected,
        total: state.BookingTicketReducer.total
    }
}

export default connect(mapStatetoProps)(CheckOut)