import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function AttractionList() {


  useEffect(() => {
    $(function () {
      if ($(window).width() > 991) {

        $(window).on('scroll', function () {

          if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
            $('#cpt-logo').attr("src", '/images/logo-green.png').attr("width", "100");

          } else {
            $('.navbar').removeClass('active');
            $('#cpt-logo').attr("src", '/images/logo-white-full.png').attr("width", "150");
          }
        });
      } else {
        $('.navbar').addClass('active');
        $('#cpt-logo').attr("src", '/images/logo-green.png').attr("width", "100");
      }
    });
  });

  useEffect(() => {
    document.documentElement.scrollTop = 1;

  }, [])

  return (
    <div>

      <NavBar />

      <div className="container-fluid bg-tours pl-0 pr-0">


        {/* <video autoPlay={true} muted
          className="video"
          loop id="myVideo">
          <source src="/images/intro-0-20.webm"

            type="video/mp4" />
        </video> */}

        <div className="pt-5 text-white text-center" style={{ position: "relative" }}>
          <div className="py-5 mt-5">

            <h1 className="" style={{ fontWeight: 900, letterSpacing: '2px', fontSize: '50px' }}>Attractions in Central Park</h1>

            <p className="lead mb-0 pt-3">
              <b>Below you will find a list of all major attractions located in Central Park.
                <br></br>
                Each attractions is ranked by popularity and accessibility.
                <br></br>
                You will also find various interesting facts about Central Park
                and small tips and tricks.</b>
            </p>
          </div>


          <section className="container text-dark attractions-section pt-4">

            <div className="row justify-content-center align-items-center py-5">

              <div className="col-sm-6">
                <div className="circle-right">1</div>
                <img src="/images/hamilton-monument.png" className="attr-image" width='100%' />
              </div>

              <div className="col-sm-6 text-left">
                <h2 class="text-uppercase pb-4" style={{ color: '#4c4a4b', fontWeight: 800 }}>Hamiltion Monument</h2>

                <p>
                  Alexander Hamilton is one of the Founding Father of the US. The statue that was place in the Park was carved by Carl H. Conrads in 1880, and was donated by one of Hamilton’s sons — John C. Hamilton.

                  The easiest way to see his portrait is to just take a look at a $10 bill. Considered to be a legal and financial mastermind, he is credited for introducing the US dollar, as well as establishing the National bank and the US Treasury.

                  He was George Washington's most trusted confidant during the American war of Independence.
                  <a href="/" className="readmore"> Read More</a>

                  <div className="row d-flex pt-3 align-items-center">
                    <div className="col-sm-4">
                      <b>Accessibility 80%</b>
                    </div>


                    <div className="col-sm-8">

                      <div className="ml-5 slide_percentage">
                        <div className="slider_1"></div>
                      </div>

                    </div>
                  </div>

                  <div className="row d-flex pt-3 align-items-center">
                    <div className="col-sm-4">
                      <b>Popularity 30%</b>
                    </div>


                    <div className="col-sm-8">

                      <div className="ml-5 slide_percentage">
                        <div className="slider_2"></div>
                      </div>

                    </div>
                  </div>

                  <div className="row d-flex pt-3 align-items-center">
                    <p className="col-sm-6 text-uppercase" style={{ fontWeight: '600' }}>You'll see on</p>
                    <p className="col-sm-6 text-uppercase" style={{ fontWeight: '700' }}>Bike tour, Pedicab tour</p>

                  </div>

                </p>
              </div>

            </div>

            <div class="row justify-content-center">
              <img style={{ marginTop: '-50px' }} src="/images/dott-2.png" className="attr-image" width='60%' />
            </div>

            <div className="row justify-content-center align-items-center py-5">


              <div className="col-sm-6 text-left col1">
                <h2 class="text-uppercase pb-4" style={{ color: '#4c4a4b', fontWeight: 800 }}>Alice in Wonderland</h2>

                <p>
                  Central Park is an amazing place for people of all ages, full of places and "characters" that can feel close to literally everyone!
                  Alice of Wonderland is probably the most famous fairytale character taking residence in Central Park. She has been around since 1959.
                  She is depicted in bronze, having a tea party hosted by the Matt Hater.
                  <a href="/" className="readmore"> Read More</a>


                  <div className="row d-flex pt-3 align-items-center">
                    <div className="col-sm-4">
                      <b>Accessibility 80%</b>
                    </div>


                    <div className="col-sm-8">

                      <div className="ml-5 slide_percentage">
                        <div className="slider_1"></div>
                      </div>

                    </div>
                  </div>

                  <div className="row d-flex pt-3 align-items-center">
                    <div className="col-sm-4">
                      <b>Popularity 30%</b>
                    </div>


                    <div className="col-sm-8">

                      <div className="ml-5 slide_percentage">
                        <div className="slider_2"></div>
                      </div>

                    </div>
                  </div>

                  <div className="row d-flex pt-3 align-items-center">
                    <p className="col-sm-6 text-uppercase" style={{ fontWeight: '600' }}>You'll see on</p>
                    <p className="col-sm-6 text-uppercase" style={{ fontWeight: '700' }}>Bike tour, Pedicab tour</p>

                  </div>

                </p>
              </div>

              <div className="col-sm-6 col2">

                <div className="circle-left">2</div>
                <img src="/images/alice-in-wonderland.jpg" className="attr-image" width='100%' />

              </div>

            </div>

            <div class="row justify-content-center">
              <img style={{ marginTop: '-50px' }} src="/images/dott.png" className="attr-image" width='60%' />
            </div>

          </section>



          {/* <footer> */}
          <Footer />

        </div>

        {/* before header div </div> */}

        {/* body */}
      </div>

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