import Head from 'next/head'
import Image from 'next/image'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'

export default function Home() {

  const [menu, setMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [width, setWidth] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
    // console.log(scrollY);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
      setWidth(window.innerWidth);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <div>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

      <header className="header">
        <nav className={`navbar ${scrollY > 10 ? 'active' : ''} navbar-expand-lg fixed-top py-1`}>
          <div className="container">
            <a href="#" className="navbar-brand text-uppercase font-weight-bold">
              {width < 991 ? <Image className="cpt-logo" src="/images/logo.png" width={87} height={50} /> :
                <>
                  {scrollY > 10 ? <Image className="cpt-logo" src="/images/logo.png" width={87} height={50} /> :
                    <Image className="cpt-logo" width={150} height={100} src="/images/logo-white-full.png" />}
                </>
              }
            </a>
            <button onClick={() => setMenu(!menu)} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>

            <div id="navbarSupportedContent" className={`${menu ? 'show' : ''} collapse navbar-collapse justify-content-center`}>
              <ul className="navbar-nav">
                <li className="nav-item pl-3 active"><a href="#" className="nav-link">Home <span className="sr-only">(current)</span></a></li>
                <li className="nav-item pl-3"><a href="#" className="nav-link">About Us</a></li>
                <li className="nav-item pl-3"><a href="#" className="nav-link">Tours</a></li>
                <li className="nav-item pl-3"><a href="#" className="nav-link">Bike Rentals</a></li>
                <li className="nav-item pl-3"><a href="#" className="nav-link">Attractions</a></li>
                <li className="nav-item pl-3"><a href="#" className="nav-link">FAQ</a></li>
                <li className="nav-item pl-3"><a href="#" className="nav-link">Blog</a></li>
                <li className="nav-item btn-cpt"><a href="#" className="nav-link">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="container-fluid bg-cpt">
        <div className="pt-5 text-white text-center">
          <header className="py-5 mt-5">
            <h2 className="display-4">Welcome to</h2>
            <h1 className="" style={{ fontWeight: 900, letterSpacing: '2px', fontSize: '50px' }}>Central Park Tours</h1>
            <hr className="home-hr"></hr>

            <p className="lead mb-0">
              <b>The leader in providing bike rentals and various tours in New York.</b>
            </p>
            <p className="lead mb-0">
              <b>Reserve your tour now and explore the oasis in the middle of Manhattan.</b>
            </p>

          </header>

          <section className="pt-5">
            <span className="btn-explore mx-auto">
              EXPLORE THE TOURS
              <i style={{ color: '#9bd230' }} className="pl-2 fas fa-arrow-circle-down"></i>
            </span>
            <div className="pt-4 mx-auto">
              <i className="fa fa-phone fa-rotate-90" aria-hidden="true"></i>
              Book over the phone: (347) 746-8687
            </div>

          </section>


          <section className="container text-dark pt1">

            {/* <div className="row justify-content-between">
              <div className="col-4">
                <div>Check out our</div>
                <h2 style={{ fontWeight: 800 }}><b style={{ color: '#9bd230' }}>Featured </b>tours</h2>

              </div>
              <div className="col-4 font-weight-bold text-uppercase bbottom">
                View All
              </div>
            </div> */}
            <div className="ml-5 mr-5">
              <div className="d-flex justify-content-start text-1">Check out our</div>
              <div className="d-flex justify-content-start">
                <h2 style={{ fontWeight: 800 }}><b style={{ color: '#9bd230' }}>Featured </b>tours</h2>
              </div>
              <div className="d-flex justify-content-end font-weight-bold text-uppercase bbottom">View All</div>

            </div>



            {/* cards */}
            <div className="card-group pt-3">

              <div className="card card-v">
                <span className="d-flex justify-content-center">
                  <div className="mr-5 mt-3 trending">Trending</div>
                  <div className="ml-5 mt-3 font-weight-bold text-muted">$53/2h</div>
                </span>
                <small style={{ marginLeft: 180, marginTop: '-7px', color: '#babbbb' }}>per person</small>

                <Image className="card-Image-top p-3" src="/images/bike-tours.png" width={500} height={400} alt="Card image cap" />
                <div className="card-body" style={{ marginTop: -20 }}>
                  <h5 style={{ color: '#535150' }} className="card-title font-weight-bold pb-3">Central Park E-Bike Tour</h5>
                  <p className="btn-reserve text-uppercase">Reserve now</p>
                </div>
              </div>

              <div className="card card-v">
                <span className="d-flex justify-content-center">
                  <div className="mr-5 mt-3 trending">Trending</div>
                  <div className="ml-5 mt-3 font-weight-bold text-muted">$53/2h</div>
                </span>
                <small style={{ marginLeft: 180, marginTop: '-7px', color: '#babbbb' }}>per person</small>

                <Image className="card-Image-top p-3" src="/images/electric-bike.png" width={500} height={400} alt="Card image cap" />
                <div className="card-body" style={{ marginTop: -20 }}>
                  <h5 style={{ color: '#535150' }} className="card-title font-weight-bold pb-3">Central Park E-Bike Tour</h5>
                  <p className="btn-reserve text-uppercase">Reserve now</p>
                </div>
              </div>

              <div className="card card-v">
                <span className="d-flex justify-content-center">
                  {/* <div className="mr-5 mt-3 trending">Trending</div> */}
                  <div style={{ marginLeft: 180 }} className="mt-3 font-weight-bold text-muted">$53/2h</div>
                </span>
                <small style={{ marginLeft: 180, marginTop: '-7px', color: '#babbbb' }}>per person</small>

                <Image className="card-Image-top p-3" src="/images/pedicab-tours.png" width={500} height={400} alt="Card image cap" />
                <div className="card-body" style={{ marginTop: -20 }}>
                  <h5 style={{ color: '#535150' }} className="card-title font-weight-bold pb-3">Central Park E-Bike Tour</h5>
                  <p className="btn-reserve text-uppercase">Reserve now</p>
                </div>
              </div>

            </div>
            {/* end cards */}

            <div className="container" style={{ color: '#535150', letterSpacing: '1px' }}>
              <p style={{ fontSize: 25 }} className="d-flex justify-content-start pl-4 pt-5 mt-5">Our tours are top rated on Tripadvisor!</p>
              <b className="d-flex justify-content-start pl-4">SEE TESTIMONIALS</b>
            </div>

          </section>


        </div>
      </div>

    </div >
  )
}
