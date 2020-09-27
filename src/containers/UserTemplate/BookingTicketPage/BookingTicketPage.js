import React, { Component } from 'react'
import CoupleSeat from './CoupleSeat/CoupleSeat'
import { getTicketLists } from '../../../redux/actions/BookingTicketAction';
import { connect } from 'react-redux';
import style from './BookingTicketPage.module.scss';
import SeatList from './SeatList/SeatList';
import ScreenContent from './ScreenContent/ScreenContent';
import CheckOut from './CheckOut/CheckOut';

class BookingTicketPage extends Component {
    render() {
        return (
            <div className = {`${style.bookingTicketPage} container-fuild`}>
                <div className="row m-0">
                    <div className="col-left">
                      <ScreenContent />
                      <SeatList />
                    </div>
                    <div className="col-right">
                        <CheckOut />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        this.props.dispatch(getTicketLists());
    }
}

export default connect(null)(BookingTicketPage);