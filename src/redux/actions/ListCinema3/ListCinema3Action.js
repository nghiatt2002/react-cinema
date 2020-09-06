import axios from 'axios';
import {LayDSPhim} from '../../types/ListCinema3Type';

export const layDanhSachPhimAxios = () => {
    return dispatch => {
        axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        }).then(res => {
            // sau khi lấy dữ liệu từ api => dispacth reducer danhsachPhim
            dispatch({
                type: LayDSPhim,
                dsPhim: res.data
            })
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}