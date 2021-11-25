import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import DesktopBikeForm from '../components/Index_Bike_Form'
import DestkopPedicabForm from '../components/Index_Pedicab_Form'
import Link from 'next/link'

export default function Tours() {


  useEffect(() => {
    $(function () {
      if ($(window).width() > 991) {

        $(window).on('scroll', function () {

          if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
            $('.cpt-logo').attr("src", '/images/logo-green.png').attr("width", "90");

          } else {
            $('.navbar').removeClass('active');
            $('.cpt-logo').attr("src", '/images/logo-white-full.png').attr("width", "125");
          }
        });
      } else {
        $('.navbar').addClass('active');
        $('.cpt-logo').attr("src", '/images/logo-green.png').attr("width", "90");
      }
    });
  }, []);

  useEffect(() => {
    document.documentElement.scrollTop = 0;

  }, [])

  return (
    <div>

      <NavBar title="Tours - Central Park Tours - The Official Central Park Tour Company" />

      <div className="container-fluid bg-tours pl-0 pr-0 pt-5 text-center" style={{ position: "relative" }}>

        <div className="tours-header text-white" style={{ position: "relative" }}>

          <h1 className="tours-title" style={{ fontWeight: 900, letterSpacing: '2px', fontSize: '50px' }}>Tours</h1>

          <p className="lead mb-0 pt-3">
            <b>We are the leader in providing bike rentals and various tours in New York.</b>
          </p>
          <p className="lead mb-0">
            <b>Reserve your tour now and explore the oasis in the middle of Manhattan.</b>
          </p>
        </div>



        <section className="container text-dark tours-section">

          <div className="row justify-content-center">
            <div className="col-xs-12 col-md-9 col-lg-12">

              {/* cards */}
              <div className="card-group cards-section">

                <div className="card card-v mx-70">


                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100 card-img-top1" src="/images/bike-tour-central-park.jpg" alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100 card-img-top1" src="/images/bike3.jpg" alt="Third slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100 card-img-top1" src="/images/bike4.jpg" alt="Four slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100 card-img-top1" src="/images/bike5.jpg" alt="Five slide" />
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>

                  <div className="card-body" style={{ marginTop: -20 }}>
                    <h5 style={{ color: '#535150', fontSize: '18px' }} className="card-title text-left text-uppercase font-weight-bold pt-3 pb-1">Central Park Bike Tour</h5>

                    <div className="row pb-4">
                      <div style={{ fontSize: 12 }} className="col text-left text-uppercase">Price from <b style={{ fontSize: 18, color: '#88bc2c' }}>$59</b> usd</div>
                      <div style={{ fontSize: 12 }} className="col text-right pt-1">DURATION <b> 2h</b></div>
                    </div>

                    <p style={{ fontSize: 14, color: '#8b8b8b' }} className="text-left">
                      Our bicycle tour has been ranked as one the top 5
                      things to do in Central Park by TripAdvisor. It is the
                      only tour that covers the entire length of Central
                      Park and it provides an excellent overview of the
                      whole park.
                    </p>

                    <div className="row text-uppercase">
                      <div style={{ fontSize: 12 }} className="col text-left ">Intensity</div>
                      <div style={{ fontSize: 12 }} className="col text-right">Rating 5.0</div>
                    </div>

                    <div className="row text-uppercase pb-4">
                      <div style={{ fontSize: 12 }} className="col text-left "><b>Active</b></div>
                      <div style={{ fontSize: 16 }} className="col text-right">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                      </div>
                    </div>

                    <div className="row text-uppercase pb-4">
                      <div style={{ fontSize: 12, color: 'silver', fontWeight: 'bold' }} className="col text-left pt-3">
                        <Link href="/tours/central-park-bike-tour">View tour</Link>
                      </div>
                      <div style={{ fontSize: 12 }} className="col">
                        {/* <p className="btn-reserve">Book now</p> */}
                        <DesktopBikeForm />
                      </div>
                    </div>


                  </div>
                </div>

                <div className="card card-v mx-70">


                  <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100 card-img-top1" src="/images/pedicab1.jpg" alt="First slide" />

                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100 card-img-top1" src="/images/pedicab2.jpg" alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100 card-img-top1" src="/images/pedicab3.jpg" alt="Third slide" />
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>

                  <div className="card-body" style={{ marginTop: -20 }}>
                    <h5 style={{ color: '#535150', fontSize: '18px' }} className="card-title text-left text-uppercase font-weight-bold pt-3 pb-1">Central Park Pedicab Tour</h5>

                    <div className="row pb-4">
                      <div style={{ fontSize: 12 }} className="col text-left text-uppercase">Price from <b style={{ fontSize: 18, color: '#88bc2c' }}>$53</b> usd</div>
                      <div style={{ fontSize: 12 }} className="col text-right pt-1">DURATION <b> 1h</b></div>
                    </div>

                    <p style={{ fontSize: 14, color: '#8b8b8b' }} className="text-left">
                      Allow one of our experienced tour guides to show you the beauty
                      of the park from the back of a pedicab.
                      Sit down and relax while your tour guide tells you about the history
                      of the park, architecture and interesting trivia.
                    </p>

                    <div className="row text-uppercase">
                      <div style={{ fontSize: 12 }} className="col text-left ">Intensity</div>
                      <div style={{ fontSize: 12 }} className="col text-right">Rating 5.0</div>
                    </div>

                    <div className="row text-uppercase pb-4">
                      <div style={{ fontSize: 12 }} className="col text-left "><b>Active</b></div>
                      <div style={{ fontSize: 16 }} className="col text-right">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                      </div>
                    </div>

                    <div className="row text-uppercase pb-4">
                      <div style={{ fontSize: 12, color: 'silver', fontWeight: 'bold' }} className="col text-left pt-3">
                        <Link href="/tours/central-park-pedicab-tour">View tour</Link>
                      </div>
                      <div style={{ fontSize: 12 }} className="col">
                        <DestkopPedicabForm />
                      </div>
                    </div>


                  </div>
                </div>



              </div>
            </div>
          </div>

        </section>
        <img src="/images/cpt-cbck.png" style={{ width: '100%', marginTop: '-200px' }} />



        {/* <footer> */}
        <Footer />

      </div>

      {/* before header div </div> */}

      {/* body */}
      {/* </div> */}

      {/* html */}
    </div >
  )
}


  //force scroll to top on page refresh
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // }

  // if (typeof window === 'undefined') {
  //   global.window = {}
  // }