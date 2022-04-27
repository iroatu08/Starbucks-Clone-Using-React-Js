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

            <section class="reward left-right-section">
            
            <div class="image">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-77814.jpg" alt=""
                        srcset="" />
                </div>

                <div class="text">
                    <strong>Sign up for Starbucks<sup>®</sup> Rewards</strong>
                    <h3>Starting 4/22, get 25 Stars when you bring your clean, reusable cup into the café. Stars can quickly add up to Rewards.*</h3>
                    <div class="cta">
                    <Link  to="/joinnow"> Join Now</Link>   
                    </div>
                </div>

              
            </section>

            <section class="planet left-right-section">
            <div class="text">
                    <strong>Planet-positive tips</strong>
                    <h3>April is earth month, but our commitment to reducing our environmental impact is year round. Try these tips on your next Starbucks visit.
                    </h3>
                    <div class="cta">
                        Learn how
                    </div>
                </div>
                <div class="image">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-77659.jpg" alt=""
                        srcset="" />
                </div>
                

            </section>

            <section class="iced left-right-section">
            
            <div class="image">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-77232.jpg" alt=""
                        srcset="" />
                </div>

                <div class="text">
                    <strong>Iced shaken awakening</strong>
                    <h3>Introducing our new Iced Toasted Vanilla Oatmilk Shaken Espresso with rich, creamy layers and nondairy goodness.</h3>
                    <div class="cta">
                    <Link  to="/joinnow"> Order Now</Link>   
                    </div>
                </div>

              
            </section>

            <section class="taste left-right-section">
            <div class="text">
                    <strong>Taste of tomorrow</strong>
                    <h3>The trailblazing Starbucks Odyssey Blend™ boldly envisions a more sustainable future for the coffee industry.
                    </h3>
                    <div class="cta">
                        Order how
                    </div>
                </div>
                <div class="image">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-77700.jpg" alt=""
                        srcset="" />
                </div>
                

            </section>

            <section class="earning left-right-section">
            
            <div class="image">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75418.jpg" alt=""
                        srcset="" />
                </div>

                <div class="text">
                    <strong>Earning 4,500 Bonus Stars is Super Starifying</strong>
                    <h3>Earn more Stars and even more Rewards with a <b>$0 intro annual fee for your first year</b> with the Starbucks<sup>®</sup> Rewards Visa<sup>®</sup> Card. Plus your Stars won’t expire – an exclusive Starbucks benefit for cardmembers. Now that’s Super Starifying.</h3>
                    <div class="cta">
                    <Link  to="/joinnow"> Learn more</Link>   
                    </div>
                </div>

              
            </section>

            <section class="picnic left-right-section">
            <div class="text">
                    <strong>Let us bring the picnic to you</strong>
                    <h3>Order your Starbucks<sup>®</sup> favorites on Uber Eats today.**
                    </h3>
                    <div class="cta">
                        Order now
                    </div>
                </div>
                <div class="image">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-77836.jpg" alt=""
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
