import { combineReducers } from "redux";
import TrailerPopupReducers from './TrailerPopupReducers';
import FilmSectionReducer from './FilmSectionReducer'

const rootReducer = combineReducers({
    TrailerPopupReducers,
    FilmSectionReducer
});

export default rootReducer;
