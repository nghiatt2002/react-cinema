import axios from 'axios';
import {GET_MOVIE_SHOWTIME_HOME} from '../Contants/MovieShowTimeContants';

export const getMovieShowTimeAxios = () => {
    return dispatch => {
        axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP04',
            method: 'GET'
        }).then(res => {
            // sau khi lấy dữ liệu từ api => dispacth đến reducer
            dispatch({
                type: GET_MOVIE_SHOWTIME_HOME,
                data: res.data
            })
        }).catch(err => {
            console.log(err.response.data);
        });
    }
}