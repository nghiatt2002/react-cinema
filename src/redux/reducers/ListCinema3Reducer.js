import {LayDSPhim} from '../types/ListCinema3Type';

const initialState = {
    dsPhim: [
        {
             biDanh: "phim-khong-ten"
            ,danhGia: 10
            ,hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/phim-khong-ten_gp01.jpg"
            ,maNhom: "GP01"
            ,maPhim: 1314
            ,moTa: "AngryBird Cosplay"
            ,ngayKhoiChieu: "2020-02-06T00:00:00"
            ,tenPhim: "Phim Không tên"
            ,trailer: "AngryBird Cosplay"
        }
    ]
}

export const ListCinema3Reducer = (state = initialState, action) => {
    switch (action.type) {

    case LayDSPhim:
        return { ...state, dsPhim: action.dsPhim}

    default:
        return state
    }
}