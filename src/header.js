import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            title: "React Application",
            country: "India"
        }
    }

    render() {
        const mystyles = {
            header: {
                backgroundColor: 'teal'
            },
            logo: {
                fontSize: '30px',
                color: '#fff',
                textAlign: 'center'
            }
        }

        return (
            <header style={mystyles.header}>
                <p style={mystyles.logo}>{this.state.title}</p>
                <center>
                    <input />
                </center>
            </header>
        )
    }
}

export default Header;

