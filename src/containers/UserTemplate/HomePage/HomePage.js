import React, { Component } from 'react'
import MovieShowTime from './MovieShowTime/MovieShowTime';
import Filmsection from './FlimSection/FilmSection'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                {/* <MovieShowTime /> */}
                <Filmsection />
            </div>
        )
    }
}
