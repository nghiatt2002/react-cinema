import React, { Component } from 'react'
import CoupleSeat from './CoupleSeat/CoupleSeat'
import Seat from './Seat/Seat'

export default class BookingTicketPage extends Component {
    render() {
        return (
            <div className = "container">
                <Seat />
                <CoupleSeat value1 = "1" value2 = "2"/>
            </div>
        )
    }
}
