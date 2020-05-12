import React, { Component } from 'react';
import Mid from './Mid';
import bola from './bola.png'

class Top extends Component {
    render() {
        return (
            <div className="top_menu">
                <header>
                    <img src={bola} id='logo'></img>
                </header>
                <Mid />
            </div>
        );
    }
} export default Top;