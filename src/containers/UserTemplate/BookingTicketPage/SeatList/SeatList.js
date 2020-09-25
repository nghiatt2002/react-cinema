import React, { Component } from 'react';
import { connect } from 'react-redux';
import Seat from './Seat/Seat';
import style from './SeatList.module.scss';

class SeatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reLoad: true
        }
    }
    rowSeatName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', "M", 'N' ];
    renderSeat = () => {
        let cnt = 0;
        let divArr = []
        let divHtml;
        divArr = this.props.listTicket.map((item, index) => {
            if (index % 16 == 0) {
                return (
                    [
                        <span key = {index + 'span'}>{this.rowSeatName[cnt++]}</span>,
                        <Seat key = {index} seat = {item}/>
                    ]
                )
            } else {
                return (
                    <Seat  key = {index} seat = {item}/>
                )
            }
        })
        return divArr.flat();
    }

    render() {
        console.log('render seat list');
        return (
            <div className = {style.seatList}>
                 <div className="bookingTicketPage__grid">
                        {this.renderSeat()}
                </div>
                <p>{this.props.isReLoad}</p>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return ({
        listTicket: state.BookingTicketReducer.listTicket,
        flimInfo: state.BookingTicketReducer.flimInfo,
        isReLoad: state.BookingTicketReducer.isReLoad,
    })
}

export default connect(mapStatetoProps, null)(SeatList)