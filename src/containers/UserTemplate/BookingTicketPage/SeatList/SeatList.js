import React, { Component } from 'react';
import { connect } from 'react-redux';
import Description from '../Description/Description';
import Seat from './Seat/Seat';
import style from './SeatList.module.scss';

class SeatList extends Component {
    constructor(props) {
        super(props);
        this.loadSeatFinished = false;
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
                        <span className = "first-class" key = {index + 'span'}>{this.rowSeatName[cnt++]}</span>,
                        <Seat key = {index} seat = {item}/>
                    ]
                )
            } else {
                return (
                    <Seat  key = {index} seat = {item}/>
                )
            }
        })
        this.loadSeatFinished = true;
        return divArr.flat();
    }

    renderDescription = () => {
        if (this.props.listTicket.length === 0) return;
        return (<Description />);
    }

    render() {
        return (
            <div className = {style.seatList}>
                 <div className="bookingTicketPage__grid">
                        {this.renderSeat()}
                </div>
                {this.renderDescription()}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return ({
        listTicket: state.BookingTicketReducer.listTicket,
        flimInfo: state.BookingTicketReducer.flimInfo,
    })
}

export default connect(mapStatetoProps, null)(SeatList)