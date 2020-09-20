import React, { Component } from 'react';
import style from './Seat.module.scss'

export default class Seat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 1,
            isSelect: false,
            type: 1
        }
    }
    handleClick = () => {
        if (!this.props.seat.daDat) {
            this.setState({
                isSelect: !this.state.isSelect
            })
        }
    }

    convertSeatName =(name) => {
        return name%16 === 0 ? 16 : name%16;
    }

    renderSeat = (tenGhe, daDat) => {
        if (!daDat) {
            return (
                <span className ={`seat-value`}>
                    {this.convertSeatName(tenGhe)}
                </span>
            )
        } else {
            return (
                <span>
                    <i className="fa fa-times"></i>
                </span>
            )
        }
    }

    render() {
        const {isSelect} = this.state;
        const {loaiGhe, tenGhe, daDat} = this.props.seat;
        return (
            <div className = {style.seat}>
                <div className={`seat-area ${loaiGhe === 'Vip' ? 'vip-seat' : ''}  ${isSelect? 'selecting show-text': ''} ${daDat? 'no-click': ''}
                                `}
                 onClick = {() => this.handleClick()}>
                    <span className = {`box-center ${daDat ? 'booked box-center-booked': ''}`}>
                        {
                            this.renderSeat(tenGhe, daDat)
                        }
                    </span>
                    <span className = {`seat-border  ${daDat ? 'booked seat-border-booked': ''}`}></span>
                </div>
            </div>
        )
    }
}
