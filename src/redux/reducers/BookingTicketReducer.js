import {GET_TICKET_LIST} from '../contants/BookingTicketConstant'

const initialState = {
    listTicket: [],
    flimInfo: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_TICKET_LIST: {
        return {...state, listTicket: action.data.danhSachGhe, flimInfo: action.data.thongTinPhim}
    }
    default:
        return state
    }
}
