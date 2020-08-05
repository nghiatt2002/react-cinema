import React, { Component } from 'react';
import headerStyle from './Header.module.scss';

export default class Header extends Component {
    render() {
        return (
            <div className={headerStyle.header}>
                {/* Import các component con vào đây */}
                <h3>Header h3</h3>
                <div className={headerStyle.header.container}>
                    <h1>HEADER H1</h1>
                </div>
            </div>
        )
    }
}
