import React, { Component } from 'react'
import NowShowingFlimList from '../NowShowing/NowShowingFlimList/';
import FimCommingSoonList from '../CommingSoon/CommingSoonFimList/CommingSoonFimList';
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
                <Trailerpopup/>
           </>
        )
    }
}

export default Filmsection