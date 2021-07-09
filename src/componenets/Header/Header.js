import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <header>
        <div className="header-container">
            <div className="left-nav">
                <div className="logo">
              <Link to="/" ><img src={process.env.PUBLIC_URL + '/image/Starbucks_Corporation_Logo_2011.svg'} alt=""/></Link> 
                </div>

                <nav>
                    <ul>
                        <Link to="/">Menu</Link>
                        <Link to="/reward">Rewards</Link>
                        <Link to="/giftcard">Gift Cards</Link>
                     
                    </ul>
                </nav>
            </div>

            <div className="right-nav">
                <div className="find-store">
                  <Link to="/location"> <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Find a store</span></Link> 
                </div>
                <div className="sign-in">
                 <Link to='/signin'> Sign in</Link>  
                </div>
                <div className="join-now">
                   <Link to='/joinnow' >Join Now</Link>
                </div>
            </div>

        </div>
    </header>
        </div>
    )
}

export default Header;
