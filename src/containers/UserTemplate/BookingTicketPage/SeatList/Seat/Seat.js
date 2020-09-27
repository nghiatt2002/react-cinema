import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './Seat.module.scss';
import {selectSeat} from '../../../../../redux/actions/BookingTicketAction'
import Swal from 'sweetalert2';

class Seat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 1,
            isSelect: false,
            isRemove: false,
        }
    }
    rowSeatName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', "M", 'N' ];
    handleClick = () => {
        // If seat was selected
        if (this.props.seat.daDat) {
            return;
        }
        const index = this.props.seatSelected.findIndex(ele=> ele.seatInfo.tenGhe == this.props.seat.tenGhe);
        // If count of selected seat > 10
        if (this.props.seatSelected.length >= 10) {
            if (index < 0) {
                Swal.fire('Bạn không thể chọn quá 10 ghế');
                return;
            }
        }
        const tenGhe = this.props.seat.tenGhe;
        const seatNumber = this.convertSeatName(tenGhe);
        debugger;
        if (seatNumber > 0 && seatNumber < 15 
            && this.props.seatSelected.length > 0
            && !this.state.isSelect) {
            let isValid = false;
            const preSeat = this.props.seat.maGhe - 1;
            if (this.props.seatSelected.findIndex(ele => (ele.seatInfo.maGhe === preSeat)) >= 0) {
                isValid = true;
            }
            const nextSeat = this.props.seat.maGhe + 1;
            if (this.props.seatSelected.findIndex(ele => (ele.seatInfo.maGhe === nextSeat)) >= 0) {
                isValid = true;
            }
            if (!isValid) {
                Swal.fire('Bạn không thể để 1 ghế trống');
                return;
            }
        }
        this.props.dispatch(selectSeat(this.getSeatName(tenGhe), this.props.seat, !this.state.isSelect));
        if (!this.props.seat.daDat) {
            this.setState({
                isSelect: !this.state.isSelect,
                isRemove: (index >= 0)
            })
        }
    }

    handleBlur = () => {
        this.setState({
            isRemove: false
        })
    }

    convertSeatName =(name) => {
        if (name === '') return '';
        return name%16 === 0 ? 16 : name%16;
    }

    getSeatName = (tenGhe) => {
        const seat_number = this.convertSeatName(tenGhe);
        const seat_row =  Math.floor((Number(tenGhe) - 1)/16);
        return String(this.rowSeatName[seat_row]) + String(seat_number);
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
        const {isSelect, isRemove} = this.state;
        const {loaiGhe, tenGhe, daDat, inActive, selectingSeat, small} = this.props.seat;
        return (
            <div className = {style.seat}>
                <div className={`seat-area ${loaiGhe === 'Vip' ? 'vip-seat' : ''}
                ${isSelect ? 'selecting show-text': ''}
                ${daDat? 'no-click': ''}
                ${inActive ? 'in-active': ''}
                ${selectingSeat ? 'selecting-seat': ''}
                ${small ? 'small': ''}
                `}
                onClick = {() => inActive || this.handleClick()} 
                onMouseLeave = {() => inActive || this.handleBlur()}>
                    <span className = {`box-center ${daDat ? 'booked box-center-booked': ''} ${isRemove? 'is-remove': ''}`}>
                        {
                            this.renderSeat(tenGhe, daDat)
                        }
                    </span>
                    <span className = {`seat-border  ${daDat ? 'booked seat-border-booked': ''}  ${isRemove? 'is-remove': ''}`}></span>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        seatSelected : state.BookingTicketReducer.seatSelected
    }
}

export default connect(mapStatetoProps, null)(Seat)
