import React, { Component } from 'react';
import { connect } from 'react-redux';
import Seat from './Seat/Seat';
import style from './SeatList.module.scss';

class SeatList extends Component {
    rowSeatName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', "M", 'N' ];
    renderSeat = () => {
        let cnt = 0;
        return this.props.listTicket.map((item, index) => {
            if (index % 16 == 0) {
                return (
                    <>
                        <span>{this.rowSeatName[cnt++]}</span>
                        <Seat  key = {index} seat = {item}/>
                    </>
                )
            } else {
                return (
                    <Seat  key = {index} seat = {item}/>
                )
            }
        })
    }

    render() {
        return (
            <div className = {style.seatList}>
                 <div className="bookingTicketPage__grid">
                        {this.renderSeat()}
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return ({
        listTicket: state.BookingTicketReducer.listTicket,
        flimInfo: state.BookingTicketReducer.flimInfo
    })
}

export default connect(mapStatetoProps, null)(SeatList)