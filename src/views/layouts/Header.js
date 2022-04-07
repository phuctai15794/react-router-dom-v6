import React from 'react';
import logo from "../../assets/images/logo.png";

class Header extends React.Component {
    render() {
        return (
            <>
                <header>
                    <header className="header">
                        <img className="logo" src={logo} alt="logo" />
                    </header>
                </header>
            </>
        );
    }
}

export default Header;