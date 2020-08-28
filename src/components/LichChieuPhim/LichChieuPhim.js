import React, { Component } from 'react';
import style from './LichChieuPhim.module.scss';

export default class LichChieuPhim extends Component {
    render() {
        return (
            <div className={style.lichChieuPhim}>
                <div className="container">
                    <div className="lichChieuPhimContainer">

                        {/* ========================== */}
                        <div>
                            <div className="circle" />
                            <div className="circle25" />
                            <div className="circle50" />
                            <div className="circle75" />
                            <div className="circle100" />
                        </div>

                        {/* ========================== */}

                    </div>
                </div>
            </div>
        )
    }
}
