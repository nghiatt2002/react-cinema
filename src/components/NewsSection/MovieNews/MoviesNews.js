import React, { Component } from 'react';
import style from './MoviesNews.module.scss';
import NewsList from '../NewsList';

export default class MoviesNews extends Component {
    render() {
        return (
            <div className = {`${style.movieNews}`}>
                <NewsList />
            </div>
        )
    }
}
