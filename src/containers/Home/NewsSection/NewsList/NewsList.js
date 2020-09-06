import React, { Component } from 'react';
import style from './NewsList.module.scss';
import News from '../News';

export default class NewsList extends Component {
    render() {
        return (
            <div className = {`${style.newsList} container`}>
                <div className="row mb-4 mx-0">
                    <div className="col-12 col-sm-6">
                        <News />
                    </div>
                    <div className="col-12 col-sm-6">
                        <News />
                    </div>
                </div>
                <div className="row mx-0">
                    <div className="col-12 col-sm-4 pr-0 order-sm-0 order-2">
                        <News type = "2"/>
                        <hr/>
                        <News type = "2"/>
                        <hr/>
                        <News type = "2"/>
                        <hr/>
                        <News type = "2"/>
                        <hr/>
                        <News type = "2"/>
                    </div>
                    <div className="col-12 col-sm-4 order-sm-1 order-0">
                        <News center_box = {true}/>
                    </div>
                    <div className="col-12 col-sm-4 order-sm-2 order-1">
                        <News className = "mb-2" type = "1"/>
                        <News type = "1"/>
                    </div>
                </div>
            </div>
        )
    }
}
