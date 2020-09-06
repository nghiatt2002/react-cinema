import React, { Component } from 'react'
import NowShowingFlimList from '../FlimSection/NowShowing/NowShowingFlimList';
import FimCommingSoonList from '../FlimSection/CommingSoon/CommingSoonFimList/';
import Trailerpopup from '../TrailerPopup'

class Filmsection extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
           <>
                <NowShowingFlimList />
                <FimCommingSoonList /> 
                {/* <Trailerpopup/> */}
           </>
        )
    }
}

export default Filmsection