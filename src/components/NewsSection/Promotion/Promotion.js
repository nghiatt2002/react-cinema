import React, { Component } from 'react'
import NewsList from '../NewsList';
import style from './Promotion.module.scss';

export default class Promotion extends Component {
    render() {
        return (
            <div className = {`${style.promotion}`}>
                <NewsList />
            </div>
        )
    }
}
