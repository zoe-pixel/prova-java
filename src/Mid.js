import React, { Component } from 'react';
import Bot from './Bot'

class Mid extends Component {
    render() {
        return (
            <div className="mid_menu">
                <nav>
                    <ul className="ul_menu">
                        <li><button href="/">Ideias</button></li>
                        <li><button href="/">Utilidades</button></li>
                        <li><button href="/">Propriedades</button></li>
                    </ul>
                </nav>
                <div id='vazio'>

                </div>
                <Bot />
            </div>
        );
    }
} export default Mid;
