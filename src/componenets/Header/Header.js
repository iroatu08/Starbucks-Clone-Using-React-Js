import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>
        <header>
        <div className="header-container">
            <div className="left-nav">
                <div className="logo">
                <img src={process.env.PUBLIC_URL + '/image/Starbucks_Corporation_Logo_2011.svg'} />
                </div>

                <nav>
                    <ul>
                        <li>Menu</li>
                        <li>Rewards</li>
                        <li>Gift Cards</li>
                    </ul>
                </nav>
            </div>

            <div className="right-nav">
                <div className="find-store">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Find a store</span>
                </div>
                <div className="sign-in">
                    Sign in
                </div>
                <div className="join-now">
                    Join Now
                </div>
            </div>

        </div>
    </header>
        </div>
    )
}

export default Header;
