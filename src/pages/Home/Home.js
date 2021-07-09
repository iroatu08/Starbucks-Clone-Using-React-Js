import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'; 


const Home = () => {
    return (
        <div>
        

       
        <div class="main-container">
            <section class="announcement">
                <span>
                    Facial coverings are now optional in our stores for our fully vaccinated customers,
                    following CDC guidance, except where local regulations require it by law. 
                   <Link to="/learnmore">Learn more</Link>
                </span>
            </section>

            <section class="rewards left-right-section">
                <div class="text">
                    <h1>FREE COFFEE IS A TAP AWAY</h1>
                    <h3>Join now to start earning Rewards.*</h3>
                    <div class="cta">
                    <Link  to="/joinnow"> Join Now</Link>   
                    </div>
                </div>

                <div class="image">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71056.png" alt=""
                        srcset="" />
                </div>

            </section>

            <section class="chill left-right-section">

                <div class="image">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72037.jpg" alt=""
                        srcset="" />
                </div>
                <div class="text">
                    <h1>DELIGHTFULLY CHILL</h1>
                    <h3>Refresh your day with the bright, tropical flavors of our Star Drink and Kiwi Starfruit
                        Starbucks Refreshers® beverage.
                    </h3>
                    <div class="cta">
                        Order iced beverage
                    </div>
                </div>

            </section>

            <section>
                <div class="top-bottom-section">
                    <div class="section-container">
                        <div class="image">
                            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70203.jpg" alt=""
                                srcset="" />
                        </div>
                        <div class="text">
                            <h1>Order and pick up. Easy as that.</h1>
                            <h3>Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you.</h3>
                           
                               <div class="cta-container">
                                   <div class="cta">
                                    See pickup options
                                   </div>
                               </div>
                           
                        </div>

                    </div>
                </div>

                <div class="top-bottom-section">
                    <div class="section-container">
                        <div class="image">
                            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72045.jpg" alt=""
                                srcset="" />
                        </div>
                        <div class="text">
                            <h1>Floating into summer like…</h1>
                            <h3>Keep the laid-back vibes going. Order Starbucks drinks on Uber Eats.**</h3>
                            <div class="cta-container">
                                <div class="cta">
                                    Order now
                                </div>
                            </div>
                           
                        </div>


                    </div>
                </div>
            </section>
            
            <section class="stories left-right-section"> 
                <div class="text">
                    <h1>Creating positive change</h1>
                    <h3>We believe coffee can help fuel connection and strengthen communities. See how our partners (employees) are uplifting neighborhoods everywhere.</h3>
                    <div class="cta">
                        See how
                    </div>
                </div>

                <div class="image">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71657.jpg" alt=""
                        srcset="" />
                </div>
            </section>

            <section class="heading">
                <div class="top-heading">
                    <div class="text">
                       <span>*At participating stores. Some restrictions apply. See  <a href="http://"> starbucks.com/rewards.</a></span>
                    </div>
                    
                </div>

                
            </section>

            <section class="heading">
                <div class="bottom-heading">
                    <div class="text">
                        <span>
                            **Menu limited.  Restricted delivery area.  Available in participating locations only.  Fees subject to change.  Prices for Starbucks® items purchased through Uber Eats may be higher than posted in stores or as marked.  See the Uber Eats app for details.
                        </span>
                    </div>
                 
                </div>
            </section>
        </div>


        </div>

        
        
    )
}

export default Home;
