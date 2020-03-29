import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            title: "React Application",
            country: "India"
        }
    }

    render() {
        return (
            <header>
                <p className="logo">{this.state.title}</p>
                <center>
                    <input />
                </center>
            </header>
        )
    }
}

export default Header;

