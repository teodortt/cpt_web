import React, { useState, useEffect } from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import NavBar from '../components/NavBar'
import TabsComponent from '../components/TabsComponent'
import Footer from '../components/Footer'

export default function Home() {

  const recaptchaRef = React.createRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Execute the reCAPTCHA when the form is submitted
    recaptchaRef.current.execute();
  };

  const onReCAPTCHAChange = (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully so proceed with the 
    // alert
    alert(`Hey!`);
    // alert(`Hey, ${email}`);

    // Reset the reCAPTCHA so that it can be executed again if user 
    // submits another email.
    recaptchaRef.current.reset();
  }

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

  // useEffect(()=>{
  //     // carousel
  //   $('#recipeCarousel').carousel({
  //     interval: 10000
  //   })

  //   $('.carousel .carousel-item').each(function(){
  //       var minPerSlide = 3;
  //       var next = $(this).next();
  //       if (!next.length) {
  //       next = $(this).siblings(':first');
  //       }
  //       next.children(':first-child').clone().appendTo($(this));

  //       for (var i=0;i<minPerSlide;i++) {
  //           next=next.next();
  //           if (!next.length) {
  //             next = $(this).siblings(':first');
  //           }

  //           next.children(':first-child').clone().appendTo($(this));
  //         }
  //   });
  //   // end carousel
  // },[])


  useEffect(() => {
    document.documentElement.scrollTop = 1;

  }, [])

  return (
    <div>

      <NavBar />

      <div className="container-fluid bg-cpt pl-0 pr-0">


        <video autoPlay={true} muted
          className="video"
          loop id="myVideo">
          <source src="/images/intro-0-20.webm"

            type="video/mp4" />
        </video>

        <div className="pt-5 text-white text-center" style={{ position: "relative" }}>
          <div className="py-5 mt-5">
            <h2 className="display-4">Welcome to</h2>
            <h1 className="" style={{ fontFamily: "Arial Black", fontWeight: 900, letterSpacing: '0px', fontSize: '55px' }}>Central Park Tours</h1>
            <hr className="home-hr"></hr>

            <p className="lead mb-0">
              <b>The leader in providing bike rentals and various tours in New York.</b>
            </p>
            <p className="lead mb-0">
              <b>Reserve your tour now and explore the oasis in the middle of Manhattan.</b>
            </p>
          </div>

          <section className="pt-4">
            <span className="btn-explore mx-auto">
              EXPLORE THE TOURS
              <i style={{ color: '#9bd230' }} className="pl-2 fas fa-arrow-circle-down"></i>
            </span>
            <div className="pt-4 mx-auto">
              <i className="fa fa-phone fa-rotate-90" aria-hidden="true"></i>
              <span className="pl-2">Book over the phone: (347) 746-8687</span>
            </div>
          </section>

          <section className="container text-dark py-300">
            <div className="row justify-content-center">

              <div className="col-5 text-left">

                {/* <div className="ml-5 mr-5"> */}
                <div className="font-20">Check out our</div>
                <div className="">
                  <h2 style={{ fontFamily: 'Arial Black', fontSize: 45, fontWeight: 800 }}><b style={{ color: '#88bc2c' }}>Featured </b>tours</h2>
                </div>

              </div>

              <div className="px-4"></div>


              <div className="col-5 text-right">
                <br></br>
                <div className="font-weight-bold text-uppercase underlined pt-3">View All</div>
              </div>

            </div>



            <div className="row justify-content-center">
              <div className="col-xs-12 col-md-9 col-lg-12">

                {/* cards */}
                <div className="card-group pt-5">

                  <div className="card card-v mx-70">


                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img className="d-block w-100 card-img-top1" src="/images/bike-tour-central-park.jpg" alt="First slide" />

                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100 card-img-top1" src="/images/bike-tour-central-park.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100 card-img-top1" src="/images/bike-tour-central-park.jpg" alt="Third slide" />
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

                      <div className="row text-uppercase pb-4">
                        <div style={{ fontSize: 12 }} className="col text-left ">Price from <b style={{ fontSize: 18 }}>$59</b> usd</div>
                        <div style={{ fontSize: 12 }} className="col text-right pt-1">Duration <b> 2h</b></div>
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
                          View tour
                        </div>
                        <div style={{ fontSize: 12 }} className="col">
                          <p className="btn-reserve">Book now</p>
                        </div>
                      </div>


                    </div>
                  </div>

                  <div className="card card-v mx-70">


                    <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img className="d-block w-100 card-img-top1" src="/images/pedicab-tour-central-park.jpg" alt="First slide" />

                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100 card-img-top1" src="/images/pedicab-tour-central-park.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100 card-img-top1" src="/images/pedicab-tour-central-park.jpg" alt="Third slide" />
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

                      <div className="row text-uppercase pb-4">
                        <div style={{ fontSize: 12 }} className="col text-left ">Price from <b style={{ fontSize: 18 }}>$53</b> usd</div>
                        <div style={{ fontSize: 12 }} className="col text-right pt-1">Duration <b> 1h</b></div>
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
                          View tour
                        </div>
                        <div style={{ fontSize: 12 }} className="col">
                          <p className="btn-reserve">Book now</p>
                        </div>
                      </div>


                    </div>
                  </div>

                  <div className="container pt-5" >
                    <div className="row justify-content-center px-3 pt-4" style={{ color: '#535150' }}>
                      <div className="col-11 text-left">
                        <p style={{ fontSize: 20 }}>Our tours are top rated on Tripadvisor!</p>

                        <p className="see-testimonials text-uppercase"><b>SEE TESTIMONIALS</b></p>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </section>

          <section className="about">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f8" fill-opacity="1" d="M0,96L80,96C160,96,320,96,480,117.3C640,139,800,181,960,192C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

            <div className="container-fluid" style={{ background: '#f9f9f8', color: '#707171' }}>

              <div className="row justify-content-center">
                <div className="col-xs-12 col-md-4 text-left">
                  <small className="h4 font-weight-normal" style={{ color: '#535150' }}>Learn more</small>
                  <h3 className="pt-2 pb-4 h1" style={{ fontFamily: 'Arial Black', fontWeight: 900, color: '#3d3d3c', fontSize: 45 }}>About us</h3>
                  <p><b>We are thrilled to introduce you to one of the world’s most beautiful parks - Central Park.</b></p>

                  <p>Established in 2003, our company has been the leader in providing bike rentals and various
                    tours in Central Park. We offer pedicab tours, bicycle tours, bike rentals, picnic
                    arrangements and horse and carriage rides.</p>
                  <p>Feel free to take advantage of our attractions page, where you can find a detailed
                    Central Park map, top things to do in Central Park and of course get access to our
                    award winning self-guided audio tour of Central Park.</p>

                  <br></br>
                  <i>Wondering exactly how big is Central Park? Where is the Central Park zoo located at?
                    Or maybe just looking for interesting facts about the park? Please make sure you
                    check out our blog!
                  </i>
                </div>

                <div className="col-xs-12 col-md-4">
                  <img src="/images/about.png" className="pt-5 img-circle" />
                </div>

              </div>


            </div>

            {/* <div className="container-fluid" style={{ background: '#f9f9f8', color: '#707171' }}>

              <div className="fl-box">

                <div className="first text-left mx-auto">
                  <small className="h4 font-weight-normal" style={{ color: '#535150' }}>Learn more</small>
                  <h3 className="pt-2 pb-4 h1" style={{ fontFamily:'Arial Black', fontWeight: 900, color: '#3d3d3c', fontSize:45 }}>About us</h3>
                  <p><b>We are thrilled to introduce you to one of the world’s most beautiful parks - Central Park.</b></p>

                  <p>Established in 2003, our company has been the leader in providing bike rentals and various
                    tours in Central Park. We offer pedicab tours, bicycle tours, bike rentals, picnic
                    arrangements and horse and carriage rides.</p>
                  <p>Feel free to take advantage of our attractions page, where you can find a detailed
                    Central Park map, top things to do in Central Park and of course get access to our
                    award winning self-guided audio tour of Central Park.</p>

                  <br></br>
                  <i>Wondering exactly how big is Central Park? Where is the Central Park zoo located at?
                    Or maybe just looking for interesting facts about the park? Please make sure you
                    check out our blog!
                  </i>
                </div>

                <div className="second">
                  <img src="/images/about.png" className="about-img" />
                </div>

                <div className="container pt-5 d-flex text-uppercase" style={{ paddingLeft: 100 }}>
                  <div className="btn-about">Book a tour</div>
                  <a className="pl-4 pt-2" href="google.bg"><b className="text-dark">Our Blog</b></a>

                </div>

              </div>

            </div> */}

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f8" fill-opacity="1" d="M0,288L80,256C160,224,320,160,480,154.7C640,149,800,203,960,224C1120,245,1280,235,1360,229.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
          </section>

          {/* tabs section*/}
          <section>
            <div className="container text-dark">
              <h3 className="pb-1 h1" style={{ fontFamily: 'Arial Black', fontWeight: 900 }}>Latest posts</h3>
              <p>
                Learn more about upcoming events in Central Park, news,
                <br></br>
                concerts in the Summerstage, yoga in the park and many more.
              </p>
              <TabsComponent />
            </div>
          </section>

          {/* contact section */}
          <section className="container text-dark pb-5">

            <div className="row justify-content-center">

              <div className="col-xs-12 col-md-6 text-left pl-md-6">

                <small className="h4 font-weight-normal" style={{ color: '#535150' }}>Get in touch</small>
                <h3 className="pt-2 pb-4 h1" style={{ fontFamily: 'Arial Black', fontWeight: 900, color: '#3d3d3c' }}>Contact Us</h3>

                <p className="">Feel free to shoot us a message if you have any<br></br> questions about the park
                  or the services that we offer.<br></br> We can also help with arrangements for
                  picnic in<br></br> Central Park, special events, weddings, boating in<br></br> Central Park
                  and many more!</p>
                <br></br>

                <div className="d-flex align-items-center">
                  <div className="col-sm-1">
                    <i className="fas fa-map-marker-alt fa-lg" style={{ paddingLeft: '35%', paddingBottom: 70 }}></i>
                    <br></br>
                    <i className="fas fa-phone-alt fa-lg" style={{ paddingLeft: '35%' }}></i>
                  </div>


                  <div className="col-xs-12 col-sm-11">
                    <p className="font-bold">
                      Fancy Apple Bike Store
                      <br></br>
                      870 7th Ave, New York, NY, 10019
                      <br></br>
                      <a style={{ color: '#01bdd4', fontWeight: 600, textTransform: 'uppercase' }} target="_blank" href="https://goo.gl/maps/1QDYzUAbTWbSxe4e6">Get Directions</a>
                    </p>
                    <p>Office - (347) 746 - 8687
                      <br></br>
                      <a style={{ color: '#01bdd4', fontWeight: 600, textTransform: 'uppercase' }} target="_blank" href="tel:347-746-8687">Call Now</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-6">

                <form onSubmit={handleSubmit} className="contact-form">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey='6LeNHDEbAAAAAFn_EMsnUl30BrWIn41fOgjIP8ow'
                    // sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={onReCAPTCHAChange}
                  />
                  <img className="cpt-circle" src="/images/cpt-circle.png" />
                  <div className="d-flex pb-5">
                    <input type="text" className="form-control mr-3" placeholder="First name" />
                    <input type="text" className="form-control" placeholder="Last name" />
                  </div>

                  <div className="d-flex pb-4">
                    <input type="email" className="form-control mr-3" placeholder="Email" />
                    <input type="number" className="form-control" placeholder="Phone" />
                  </div>

                  <textarea className="form-control" placeholder="Message">
                  </textarea>

                  <button className="btn-contact text-uppercase mt-5">Submit Request</button>
                </form>

              </div>
            </div>

            {/* <div className="row contact-fl">

              <div className="col text-left">

                <small className="h4 font-weight-normal" style={{ color: '#535150' }}>Get in touch</small>
                <h3 className="pt-2 pb-4 h1" style={{ fontWeight: 800, color: '#3d3d3c' }}>Contact Us</h3>

                <p className="pr5">Feel free to shoot us a message if you have any<br></br> questions about the park
                  or the services that we offer.<br></br> We can also help with arrangements for
                  picnic in<br></br> Central Park, special events, weddings, boating in<br></br> Central Park
                  and many more!</p>
                <br></br>

                <div className="d-flex align-items-center">

                  <div>
                    <div className="col-sm-1">
                      <i className="fas fa-map-marker-alt fa-lg" style={{ paddingBottom: 70 }}></i>
                      <br></br>
                      <i className="fas fa-phone-alt fa-lg"></i>
                    </div>
                  </div>

                  <div>

                    <div className="col-sm-11">
                      <p className="font-bold">
                        Fancy Apple Bike Store
                        <br></br>
                        870 7th Ave, New York, NY, 10019
                        <br></br>
                        <a style={{ color: '#01bdd4', fontWeight: 600, textTransform: 'uppercase' }} target="_blank" href="https://goo.gl/maps/1QDYzUAbTWbSxe4e6">Get Directions</a>
                      </p>
                      <p>Office - (347) 746 - 8687
                        <br></br>
                        <a style={{ color: '#01bdd4', fontWeight: 600, textTransform: 'uppercase' }} target="_blank" href="tel:347-746-8687">Call Now</a>
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col">
                <form onSubmit={handleSubmit} className="contact-form">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey='6LeNHDEbAAAAAFn_EMsnUl30BrWIn41fOgjIP8ow'
                    // sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={onReCAPTCHAChange}
                  />
                  <img className="cpt-circle" src="/images/cpt-circle.png" />
                  <div className="d-flex pb-5">
                    <input type="text" className="form-control mr-3" placeholder="First name" />
                    <input type="text" className="form-control" placeholder="Last name" />
                  </div>

                  <div className="d-flex pb-4">
                    <input type="email" className="form-control mr-3" placeholder="Email" />
                    <input type="number" className="form-control" placeholder="Phone" />
                  </div>

                  <textarea className="form-control" placeholder="Message">
                  </textarea>

                  <button className="btn-contact text-uppercase mt-5">Submit Request</button>
                </form>
              </div>


            </div> */}

          </section>
          <img src="/images/cpt-cbck.png" style={{ width: '100%', marginTop: '-200px' }} />


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