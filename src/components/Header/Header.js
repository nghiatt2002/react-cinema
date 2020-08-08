import React, { Component } from 'react';
import headerStyle from './Header.module.scss';

export default class Header extends Component {
    render() {
        return (
            <div className={headerStyle.header}>
                {/* Import các component con vào đây */}
                <h3>Header h3</h3>
                <div className="container">
                    <h1>HEADER H1</h1>
                    <div className="left">
                        <h2>HEADER H2</h2>
                        <div className="left-p">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, velit?</p>
                        </div>
                    </div>
                    <div className = "right">
                        <h2>HEADER H2</h2>
                    </div>
                </div>
            </div>
        )
    }
}
