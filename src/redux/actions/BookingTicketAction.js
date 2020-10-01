import axios from 'axios';
import {GET_TICKET_LIST, SELECT_SEAT, RELOAD_PAGE} from '../contants/BookingTicketConstant';

export const getTicketLists = () => {
    return dispatch => {
        axios (
            {
                method: 'GET',
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=29919',
            }
        ).then(res => {
            dispatch({
                type: GET_TICKET_LIST,
                data: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export const selectSeat = (seatNameDisplay, seat, isSelect) => {
    return {
        type: SELECT_SEAT,
        seatNameDisplay: seatNameDisplay,
        seatInfo: seat,
        isSelect: isSelect
    }
}