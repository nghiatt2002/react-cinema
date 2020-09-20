import axios from 'axios';
import {GET_TICKET_LIST} from '../contants/BookingTicketConstant';

export const getTicketLists = () => {
    return dispatch => {
        axios (
            {
                method: 'GET',
                url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=29919',
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