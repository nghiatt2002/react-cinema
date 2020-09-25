import {GET_TICKET_LIST, SELECT_SEAT, RELOAD_PAGE} from '../contants/BookingTicketConstant'

const initialState = {
    listTicket: [],
    flimInfo: {},
    totalPrice: 0,
    seatSelected: [],
    total : 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_TICKET_LIST: {
        return {...state, listTicket: action.data.danhSachGhe, flimInfo: action.data.thongTinPhim}
    }
    case SELECT_SEAT: {
        let newState = [...state.seatSelected];
        const newObj = {
            seatInfo: action.seatInfo,
            seatNameDisplay: action.seatNameDisplay
        }
        if (!action.isSelect) {
            const index = state.seatSelected.findIndex(ele=> ele.seatInfo.tenGhe == action.seatInfo.tenGhe);
            newState.splice(index, 1);
            state.seatSelected = newState;
        } else {
            newState = [...newState, newObj];
        }
        const total = newState.reduce((sum, itemB) => {
            return sum + itemB.seatInfo.giaVe
        }, 0);
        state.seatSelected = newState;
        state.total = total;
        state.isReLoad = false;
        return {...state}
    }
    default:
        return state
    }
}
