import {GET_MOVIE_SHOWTIME_HOME} from '../Contants/MovieShowTimeContants';

const initialState = {
    cinemaSystemInfo: [],
    movieShowTimeInfo: [],
}

export const MovieShowTimeReducer = (state = initialState, action) => {
    console.log("type: " + action.type);
    switch (action.type) {

        case GET_MOVIE_SHOWTIME_HOME:
            return { ...state, movieShowTimeInfo: action.data }

        default:
            return state
    }
}
