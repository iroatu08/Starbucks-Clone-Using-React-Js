import React, { useState } from 'react';
import './Header.css'
import {Link} from 'react-router-dom';

const Header = () => {


    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false)
    
    return (



        
        <div>
        <header>
        <div className="header-container">
        <div className="logo">
              <Link to="/" onClick={closeMobileMenu}><img src={process.env.PUBLIC_URL + '/image/Starbucks_Corporation_Logo_2011.svg'} alt=""/></Link> 
                </div>
                {/* <span>
            <div className={click ? 'sb-mask active' : 'hidden'}></div>
            </span> */}
            <div class= {click ? 'container__overlay ' : ''}></div>
                <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
         
          
            <div className={click ? 'hidden active ' : 'hidden' }>

            <div className="left-nav">
               <nav>
                   <ul>
                       <Link to="/" onClick={closeMobileMenu}>Menu</Link>
                       <Link to="/reward" onClick={closeMobileMenu}>Rewards</Link>
                       <Link to="/giftcard" onClick={closeMobileMenu}>Gift Cards</Link>
                    
                   </ul>
               </nav>
           </div>

           <div className="right-nav">
               <div className="find-store">
                 <Link to="/location" onClick={closeMobileMenu}> <i className="fa fa-map-marker" aria-hidden="true"></i>
                   <span>Find a store</span></Link> 
               </div>
               <div className="sign-in">
                <Link to='/signin' onClick={closeMobileMenu}> Sign in</Link>  
               </div>
               <div className="join-now">
                  <Link to='/joinnow' onClick={closeMobileMenu}>Join Now</Link>
               </div>
           </div>
            </div>
           

        </div>
    </header>
        </div>
    )
}

export default Header;