import React, { Component } from 'react'
import Filmsection from './FlimSection'
import NewsSection from './NewsSection'

export default class Home extends Component {
    render() {
        return (
            <div>
               <Filmsection />
               <NewsSection />
            </div>
        )
    }
}
