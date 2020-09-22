import {GET_TICKET_LIST, SELECT_SEAT} from '../contants/BookingTicketConstant'

const initialState = {
    listTicket: [],
    flimInfo: {},
    totalPrice: 0,
    seatSelected: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_TICKET_LIST: {
        return {...state, listTicket: action.data.danhSachGhe, flimInfo: action.data.thongTinPhim}
    }
    case SELECT_SEAT: {
        const newObj = {
            seatName: action.seatName,
            seatNameDisplay: action.seatNameDisplay
        }
        if (!action.isSelect) {
            const index = state.seatSelected.findIndex(ele=> ele.seatName == action.seatName);
            const newState = [...state.seatSelected];
            newState.splice(index, 1);
            state.seatSelected = newState;
            return {...state}
        }
        return {...state, seatSelected: [...state.seatSelected, newObj]}
    }
    default:
        return state
    }
}
