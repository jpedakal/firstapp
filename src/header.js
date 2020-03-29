import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            title: "React Application Header",
            country: "India"
        }
    }

    render() {
        const nation = this.state.country
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h1>I am from {nation}</h1>
            </div>

        )
    }
}

export default Header;

