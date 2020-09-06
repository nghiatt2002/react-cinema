import React, { Component } from 'react';
import style from './Review.module.scss';
import NewsList from '../NewsList';

export default class Review extends Component {
    render() {
        return (
            <div className = {`${style.review}`}>
                <NewsList />
            </div>
        )
    }
}
