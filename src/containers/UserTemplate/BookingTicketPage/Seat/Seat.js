import React, { Component } from 'react';
import style from './Seat.module.scss'

export default class Seat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 1,
            isSelect: false,
            type: 1
        }
    }
    handleClick = () => {
        this.setState({
            isSelect: !this.state.isSelect
        })
    }
    render() {
        const {isSelect} = this.state;
        return (
            <div className = {style.seat}>
                <div className={`seat-area vip-seat ${isSelect? 'selecting show-text': ''}`}
                 onClick = {() => this.handleClick()}>
                    <span className = "box-center">
                        <span className ="seat-value">
                            {this.state.value}
                        </span>
                    </span>
                    <span className = "seat-border"></span>
                </div>
            </div>
        )
    }
}
