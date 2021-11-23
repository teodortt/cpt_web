import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import ReserveForm from '../../components/ReserveForm'
// import ReserveMobile from '../components/ReserveMobile'
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
} from "@stripe/react-stripe-js";
// import { CheckoutForm } from "./CheckoutForm";
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition } from '@mantine/core';

const stripeProme = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);


// import StripeCheckout from '../components/makqti'

export default function Single() {
    const [status, setStatus] = useState("");
    console.log("status", status);
    const [indicator, setIndicator] = useState(1);

    const [scroll, scrollTo] = useWindowScroll();


    // debugger;
    if (status === "success") {
        return <div>Thank you for your purchase!</div>;
    }

    if (status.includes("Something went wrong")) {
        return <div>Something went wrong</div>;
    }

    const [price, setPrice] = useState(7);
    const [open, setOpen] = useState(false);

    const [val, setValue] = useState(1);

    const handleValue = (e) => {
        setValue(e.target.value)
        console.log('valueeeee' + val)
        setCount({ ...count, adults: count.adults + 1 })
        console.log(count)
    }
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 9));
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    const [count, setCount] = useState({
        adults: 1,
        kids: 1,
        subtotal: 0,
        total: 0,
        tax: 0,
        discount: null,
        discountCode: '',
        tour: "bike-tour",
        tourDate: startDate,
    })

    const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
        return (
            <div>
                <img src="/images/calendar.png" width="25" className="mr-1" />
                <label onClick={onClick} ref={ref}>
                    {value}
                </label>
            </div>
        );
    });

    useEffect(() => {

        var container = document.getElementById('container');
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;
        var scrollArea = 100 - windowHeight;
        var square1 = document.getElementsByClassName('square')[0];
        var square2 = document.getElementsByClassName('square')[1];
        var square3 = document.getElementsByClassName('square')[2];
        var square4 = document.getElementsByClassName('square')[3];
        var square5 = document.getElementsByClassName('square')[4];

        // update position of square 1 and square 2 when scroll event fires.
        window.addEventListener('scroll', function () {
            var scrollTop = window.pageYOffset;
            var scrollPercent = scrollTop / scrollArea || 0;
            if (scrollTop >= 1050 && scrollTop <= 3100) {
                //     square1.style.display = 'block';
                //     square2.style.display = 'block';
                //     square3.style.display = 'block';
                //     square4.style.display = 'block';
                //     square5.style.display = 'block';

                // if (square5.style.right.slice(0, 3) < 230) square5.style.left = -80 - scrollPercent * window.innerWidth * 0.18 + 'px';

                square1.style.right = 500 - scrollPercent * window.innerWidth * 0.1 + 'px';
                square2.style.left = 160 - scrollPercent * window.innerWidth * 0.1 + 'px';
                square3.style.right = -80 - scrollPercent * window.innerWidth * 0.18 + 'px';
                square4.style.left = -80 - scrollPercent * window.innerWidth * 0.18 + 'px';
                square5.style.left = -80 - scrollPercent * window.innerWidth * 0.18 + 'px';
                // } else {
                //     square1.style.display = 'none';
                //     square2.style.display = 'none';
                //     square3.style.display = 'none';
                //     square4.style.display = 'none';
                //     square5.style.display = 'none';

            }
        });

    }, [])
    //   useEffect(() => {
    //     $(function () {
    //       if ($(window).width() > 991) {

    //         $(window).on('scroll', function () {

    //           if ($(window).scrollTop() > 10) {
    //             $('.navbar').addClass('active');
    //             $('#cpt-logo').attr("src", '/images/logo-green.png').attr("width", "100");

    //           } else {
    //             $('.navbar').removeClass('active');
    //             $('#cpt-logo').attr("src", '/images/logo-white-full.png').attr("width", "150");
    //           }
    //         });
    //       } else {
    //         $('.navbar').addClass('active');
    //         $('#cpt-logo').attr("src", '/images/logo-green.png').attr("width", "100");
    //       }
    //     });
    //   });

    useEffect(() => {
        document.documentElement.scrollTop = 1;

    }, [])
    const hhhandle = () => {
        console.log(startDate)
    }

    return (
        <div>
            <div className="container" id="container">
                <div className="square square-2"></div>
                <div className="square square-1"></div>
                <div className="square square-4"></div>
                <div className="square square-3"></div>
                <div className="square square-5"></div>
            </div>

            <NavBar />
            <div className="container-fluid bg-single-tour pl-0 pr-0">

                {/* <StripeCheckout /> */}

                <div className="container" style={{ paddingTop: '200px', paddingBottom: '100px' }}>
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <h1 style={{ color: '#4c4a4b', textShadow: '2px 0px currentColor' }}>Central Park Bike Tour</h1>

                            <div className="col d-flex pb-4 pt-1">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="pl-2">5.0</span>
                                <div style={{ fontSize: 12 }} className="col"><u>457 Reviews</u></div>
                            </div>


                            <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">
                                {/* <!-- slides --> */}
                                <div className="carousel-inner">
                                    <div className="carousel-item active"> <img src="/images/centralparkbiketour.png" alt="Hills" /> </div>
                                    <div className="carousel-item"> <img src="/images/centralparkbiketours10.jpg" alt="Hills" /> </div>
                                    <div className="carousel-item"> <img src="/images/centralparkbiketours3.jpg" alt="Hills" /> </div>
                                    <div className="carousel-item"> <img src="/images/centralparkbiketours5.jpg" alt="Hills" /> </div>
                                    <div className="carousel-item"> <img src="/images/centralparkbiketours6.jpg" alt="Hills" /> </div>
                                </div>
                                {/* <!-- Left right -->  */}
                                <a className="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span className="carousel-control-prev-icon"></span> </a> <a className="carousel-control-next" href="#custCarousel" data-slide="next"> <span className="carousel-control-next-icon"></span> </a>
                                {/* <!-- Thumbnails --> */}
                                <ol className="carousel-indicators list-inline">
                                    <li style={{ marginRight: 30 }} className="list-inline-item active"> <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel"> <img src="/images/600centralparkbiketour.png" className="img-fluid" /> </a> </li>
                                    <li style={{ marginRight: 30 }} className="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img src="/images/600centralparkbiketours10.jpg" className="img-fluid" /> </a> </li>
                                    <li style={{ marginRight: 30 }} className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img src="/images/600centralparkbiketours3.jpg" className="img-fluid" /> </a> </li>
                                    <li style={{ marginRight: 30 }} className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img src="/images/600centralparkbiketours5.jpg" className="img-fluid" /> </a> </li>
                                    <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="4" data-target="#custCarousel"> <img src="/images/600centralparkbiketours6.jpg" className="img-fluid" /> </a> </li>
                                </ol>
                            </div>

                        </div>

                        <Affix position={{ bottom: 20 }}>
                            <Transition transition="slide-up" mounted={scroll.y < 3000}>
                                {(transitionStyles) => (
                                    <div className="sidebar" style={transitionStyles}>
                                        <div className="container">
                                            <form>
                                                {/* <div onClick={hhhandle}>CLICK</div> */}
                                                <div className="row pt-4 justify-content-center">
                                                    <div className="col text-center">
                                                        <p className="book-title">Book Now</p>
                                                        <div className="form-group">
                                                            <DatePicker
                                                                className="form-control"
                                                                selected={startDate}
                                                                onChange={(date) => (setStartDate(date), setCount({ ...count, tourDate: date }))}
                                                                showTimeSelect
                                                                minDate={new Date()}
                                                                // minTime={setHours(setMinutes(new Date(), 0), 10)}
                                                                // maxTime={setHours(setMinutes(new Date(), 0), 17)}
                                                                filterTime={filterPassedTime}
                                                                includeTimes={[
                                                                    setHours(setMinutes(new Date(), 0), 10),
                                                                    setHours(setMinutes(new Date(), 0), 14),
                                                                    setHours(setMinutes(new Date(), 0), 17),
                                                                ]}

                                                                dateFormat="MMMM d, yyyy h:mm aa"
                                                                customInput={<CustomInput />}

                                                            />
                                                        </div>
                                                        <div className="form-group centered-row">
                                                            <p className="t-title">Adults (16+)</p>
                                                            <div className="btn-counter" onClick={(e) => setCount({ ...count, adults: count.adults > 1 ? count.adults - 1 : 0 })}>-</div>
                                                            <input className="counter-field" type="number" value={count.adults} />
                                                            <div className="btn-counter" onClick={(e) => setCount({ ...count, adults: count.adults + 1 })}>+</div>

                                                        </div>
                                                        <div className="form-group centered-row">
                                                            <p className="t-title">Kids (5+)</p>
                                                            <div className="btn-counter" onClick={(e) => setCount({ ...count, kids: count.kids > 1 ? count.kids - 1 : 0 })}>-</div>
                                                            <input className="counter-field" type="number" value={count.kids} />
                                                            <div className="btn-counter" onClick={(e) => setCount({ ...count, kids: count.kids + 1 })}>+</div>
                                                        </div>
                                                        <p className="t-title">Bike Tour - <b> 2 Hours</b></p>
                                                        <p className="text-uppercase pb-3" style={{ fontSize: 14 }}>Price from <b style={{ fontSize: 24, color: '#313030' }}>$59</b> usd</p>
                                                        {/* <button className="btn-reserve">Reserve</button> */}
                                                        <ReserveForm setHours={setHours} setMinutes={setMinutes} startDate={startDate} setStartDate={setStartDate} count={count} setCount={setCount} />

                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                )}
                            </Transition>
                        </Affix>
                        {/* end sidebar */}
                        {/* <div className={`mobile-reserve-btn text-center ${open ? 'm-checkout' : ''}`} onClick={() => setOpen(true)}> */}
                        <div className="m-res text-center">
                            <ReserveForm setHours={setHours} setMinutes={setMinutes} startDate={startDate} setStartDate={setStartDate} count={count} setCount={setCount} />
                        </div>
                        {/* </div> */}


                    </div>
                </div>

                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <p className="pb-2">Our bicycle tour has been ranked as on the top 5 things to do in Central Park by TripAdvisor.
                                It is the only tour that cover the entire length of Central Park and it provides an exellent
                                overview of the whole park.
                            </p>
                            <p className="pb-2">
                                The tour takes approximately 2 hours and it includes various stops along the way. On those stops,
                                you can park bicycle and go for a short stroll along some of the most stunning views of Central Park.
                            </p>

                            <p>
                                Including Bethesda Terrace, Strawberry Fields, The Bow Bridge, Balto and many more. In addition,
                                you will also visit some of the hidden places in Central Park - the Ravine, the secret waterfall,
                                and of course our teams's favorite - the Central Park Ramble!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Top attractiions */}
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 text-center">
                            <h2>Top attractions</h2>
                            <h6>covered on this tour</h6>
                            <hr style={{ border: '3px solid #88bc2c', borderRadius: 50, width: 100 }} />
                        </div>

                        {/* <div className="container"> */}
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

                            <div className="row align-items-center">

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center">
                                    <img className="trip-img" src="/images/balto.png" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-left mt-4">
                                    <h3><b style={{ color: '#535150' }}>1. Balto Statue</b></h3>
                                    <p>
                                        This is the famous Balto Statue in Central Park.
                                        The statue is placed on a rock along the main
                                        road it was permanently installed there in 1925.
                                    </p>
                                </div>
                            </div>

                            {/* scroll object */}
                            {/* <div className="container" id="container">
                                <div className="square square-1"></div>
                                <div className="square square-2"></div>
                            </div> */}
                            <img src="/images/dott-2.png" className="tour-circle-img" />


                            <div className="row align-items-center">

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-left tour-col1 mt-4">
                                    <h3><b style={{ color: '#535150' }}>2. Strawberry Fields</b></h3>
                                    <p>
                                        This is the famous Balto Statue in Central Park.
                                        The statue is placed on a rock along the main
                                        road it was permanently installed there in 1925.
                                    </p>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center tour-col2">
                                    <img className="trip-img" src="/images/strawberry-fields.png" />
                                </div>

                            </div>

                            <img src="/images/dott.png" className="tour-circle-img" />


                            <div className="row align-items-center">

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center">
                                    <img className="trip-img mr-4" src="/images/tavern-on-the-green.png" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-left mt-4">
                                    <h3><b style={{ color: '#535150' }}>3. Tavern on the green</b></h3>
                                    <p>
                                        An iconic restaurant located in a former shepfold.
                                        Very elegant dining place often frequented by celebrities,
                                        actors and artists.
                                    </p>
                                </div>
                            </div>
                            <img src="/images/dott-2.png" className="tour-circle-img" />

                            <div className="row align-items-center">

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-left tour-col1 pt-3">
                                    <h3><b style={{ color: '#535150' }}>4. Columbis circle</b></h3>
                                    <p>
                                        This is the famous Balto Statue in Central Park.
                                        The statue is placed on a rock along the main
                                        road it was permanently installed there in 1925.
                                    </p>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center tour-col2">
                                    <img className="trip-img" src="/images/strawberry-fields.png" />
                                </div>

                            </div>


                            <div className="text-center pt-5 mt-5" style={{ color: '#535150' }}>
                                <h2>What people say</h2>
                                <h6>about this tour</h6>
                                <hr style={{ border: '3px solid #88bc2c', borderRadius: 50, width: 100 }} />

                                <div id="custCarousel2" className="carousel slide" data-ride="carousel" align="center">

                                    {/* <!-- slides --> */}
                                    <div className="carousel-inner text-dark">
                                        <div className="carousel-item active">
                                            {/* <img src="/images/centralparkbiketour.png" alt="Hills"/>  */}
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center', color: '#555555' }}>
                                                Daniel was a fantastic guide for our bike tour through Central Park.
                                                Learned a lot about much of the history of the park and got a nice
                                                workout in at the same time. Especially recommend for the fall foliage.
                                                Date of experience: November 2019
                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>andylee87</i></h5>
                                            </div>

                                        </div>

                                        <div className="carousel-item">
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center', color: '#555555' }}>
                                                We did the bike tour in Central Park and believe me if you want to see
                                                the whole park better rent a bike. We had a tour guide and we want to
                                                thank him for every interesting thing we learned from him. He was so
                                                funny and still really profe…
                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>Luis D</i></h5>
                                            </div>

                                        </div>

                                        <div className="carousel-item">
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center', color: '#555555' }}>
                                                We booked the bike tour and it was absolutely amazing experience.
                                                The guide was so nice and friendly. He was very knowledgeable and
                                                told us many stories about the stuff we saw. The bikes were in good
                                                condition and everything went smooth.
                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>Leticia C</i></h5>
                                            </div>

                                        </div>

                                        <div className="carousel-item">
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center', color: '#555555' }}>
                                                I thought that the tour will be only information and history of the park,
                                                but I was proven wrong. It turned out that the tour was amazing with a
                                                great variety of information. From movies, celebrities' penthouses to
                                                history and architecture, everything was great.
                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>Samanta R</i></h5>
                                            </div>

                                        </div>

                                        <div className="carousel-item">
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center', color: '#555555' }}>
                                                Had the pleasure to participate in a group bike tour organized by Central Park Tours.
                                                Me and my husband did the tour last week and we were accompanied by a guide and a
                                                few other people. The tour was superb! Guide was amazing and the weather…
                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>Miranda Shneyder</i></h5>
                                            </div>

                                        </div>

                                        <ol className="carousel-indicators">
                                            <li data-target="#custCarousel2" data-slide-to="0" className={indicator === 1 ? 'active' : ''}></li>
                                            <li data-target="#custCarousel2" data-slide-to="1" className={indicator === 2 ? 'active' : ''}></li>
                                            <li data-target="#custCarousel2" data-slide-to="2" className={indicator === 3 ? 'active' : ''}></li>
                                            <li data-target="#custCarousel2" data-slide-to="3" className={indicator === 4 ? 'active' : ''}></li>
                                            <li data-target="#custCarousel2" data-slide-to="4" className={indicator === 5 ? 'active' : ''}></li>
                                            {/* <li data-target="#custCarousel2" data-slide-to="5" className={indicator === 6 ? 'active' : ''}></li> */}

                                        </ol>

                                    </div>
                                    {/* <!-- Left right -->  */}
                                    <a className="carousel-control-prev" href="#custCarousel2" data-slide="prev" > <span className="carousel-control-prev-icon"></span> </a> <a className="carousel-control-next" href="#custCarousel2" data-slide="next" > <span className="carousel-control-next-icon"></span> </a>

                                </div>
                            </div>


                            <div className="text-left pt-5 mt-5" style={{ color: '#535150' }}>
                                <h3 className="h1 pl-3 pb-3" id="faq">FAQ</h3>

                                <div className="content">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingOne" role="tab">
                                                <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="pull-right fa fa-plus pr-3"></i>How big is Central Park?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse in" id="collapseOne" role="tabpanel" aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <p>Central Park is 843 acres! It spans from 59th street in Midtown all the way to 110 street in Uptown and from 5th Ave on the east all the way to Central Park West. It is a very large public park and people visiting often forget how large the park is. If you want to walk around the entire park, make sure you plan for the entire day.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingTwo" role="tab">
                                                <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="pull-right fa fa-plus pr-3"></i>How long does is take to cycle around Central Park?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    <p>It takes approximately 2 hours to cycle around the entire park. That is of course for average cyclists. There are professional cyclists who can do the loop for less than 30 minutes. There are a few uphils in Central Park (mostly in the north park of the park) but generally it is fairly easy terrain.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingThree" role="tab">
                                                <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="pull-right fa fa-plus pr-3"></i>How fit do I need to be for the bike tour?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse" id="collapseThree" role="tabpanel" aria-labelledby="headingThree">
                                                <div className="panel-body">
                                                    <p>An average level of experience is required, although beginner bikers and even kids are perfectly fine doing the 2 hour tour around the park. There might be 1 or 2 uphills where you can walk the bike if you feel tired. How many people will be on the tour: We like to keep our groups small and personal. There shouldn't be more than 8-10 people per group. You can also request a private group tour, if you have a larger group and would like to have a private tour.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingFour" role="tab">
                                                <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour"><i className="pull-right fa fa-plus pr-3"></i>Where does the bike tour start from?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse" id="collapseFour" role="tabpanel" aria-labelledby="headingFour">
                                                <div className="panel-body">
                                                    <p>Our bike tours start from our store located at 870 7th Ave, New York, NY, It is only a few blocks from the entrance of the park. Don’t worry considering our close proximity to Central Park, you will not be biking in the crazy NYC traffic. We will walk the bikes on the sidewalk until we get to the entrance of the park.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingFive" role="tab">
                                                <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive"><i className="pull-right fa fa-plus pr-3"></i>How many stops are on the tour?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse" id="collapseFive" role="tabpanel" aria-labelledby="headingFive">
                                                <div className="panel-body">
                                                    <p>The bike tour includes more than 6 stops inside the park. Your tour guide will show you all sights in Central Park, including the hidden ones. The best thing is that after a brief explanation, you can take a short stroll while the guide stays with the bikes.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>




                        </div>
                        {/* </div> */}


                    </div>
                </div>

            </div>
            <Footer />

        </div>
    )
}