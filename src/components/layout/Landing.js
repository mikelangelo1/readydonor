import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Logo from '../../img/landing.jpg';
import Image1 from '../../img/image1.png';
import Image2 from '../../img/image2.png';
import Image3 from '../../img/image3.png';
import '../../sass/main.scss'

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <React.Fragment>
      <header className="header">
                
                <p className="lead">
                  {' '}
                  
                </p>
                <div className = "header__text-box">
                  <h1 className = "heading-primary">
                    <span className = "heading-primary--main">DONATE BLOOD</span>
                    <span className = "heading-primary--sub">SEARCH FOR BLOOD</span>
                  </h1>
                  <Link to="/learnMore" className = "btn btn--white btn--animated">Learn more</Link>
                  <Link to= "/register" className = "btn btn--white btn--animated">Sign up</Link>
                </div>
       </header>         
          
                 {/* <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>  */}
              

        <main>
          <section className = "section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className = "heading-secondary">
              our business is saving lifes
            </h2>
          </div>
          <div class="row">
             <div class="col-1-of-2">
                        <h3 class="heading-tertiary-1 u-margin-bottom-small">You can donate blood anywhere and at anytime</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui. We believe that 
                            no African should die from a shortage of essential medical products at the Hospital level, and we are on a mission to solve it. Our goal is to deliver needed medical products such as blood, blood products, oxygen, as well as vaccines to hospitals
                            across Africa. We are on a mission to save one million lives.
                        </p>

                        <h3 class="heading-tertiary-2 u-margin-bottom-small">You can search for any blood group</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                            no African should die from a shortage of essential medical products at the Hospital level, and we are on a mission to solve it. Our goal is 
                            to deliver needed medical products such as blood, blood products, oxygen, as well as vaccines to hospitals
                            across Africa. We are on a mission to save one million lives.
                        </p>
                      
                        <Link to ="" class="btn-text">Learn more &rarr;</Link>
                      </div>
                      <div class="col-1-of-2">
                        <div class="composition">

                            <img src={Image1} 
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 1"
                                 class="composition__photo composition__photo--p1"
                                  />

                            <img 
                           
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 2"
                                 class="composition__photo composition__photo--p2"
                                 src={Image2}/>

                            <img
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 3"
                                 class="composition__photo composition__photo--p3"
                                 src= {Image3} />

                           
                        </div>
                       </div>
                  </div>

          </section>

          <section className="section-features">
                
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-geolocalize-05"></i>
                            <h3 classNaem="heading-tertiary u-margin-bottom-small">Locate</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-link"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Link</h3>
                             <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-heart"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Save a life</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-category" id="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Categories
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-3">
                       <div className="card">
                           <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">Individual</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Donate blood</li>
                                        <li>Find a donor</li>
                                        <li>Locate the nearest blood bank</li>
                                    </ul>
                                </div>
                           </div>
                           <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <Link to ="" className="btn btn--white">Register</Link>
                                </div>
                            </div>
                       </div>
                    </div>


                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2">Hospital</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Never run out of blood</li>
                                        <li>All blood group available</li>
                  
                                    </ul>
                                </div>

                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">

                                    <Link to = "" className="btn btn--white">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">Blood bank</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Register your blood bank with us</li>
                                        <li>Blood always available for patients</li>
                                        <li>Link donors to your blood bank</li>
                                      
                                    </ul>
                                </div>

                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                    
                                    <Link to=""  className="btn btn--white">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </main>
      </React.Fragment>
    );
  }
}


Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
