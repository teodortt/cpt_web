import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import PedicabReserveForm from '../../components/PedicabReserveForm'
// import ReserveMobile from '../components/ReserveMobile'
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
} from "@stripe/react-stripe-js";
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition } from '@mantine/core';
// import { CheckoutForm } from "./CheckoutForm";

const stripeProme = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
// import StripeCheckout from '../components/makqti'

export default function Single() {
    const [status, setStatus] = useState("");
    console.log("status", status);

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
    const [count, setCount] = useState({
        adults: 1,
        kids: 1,
        duration: 1,
        subtotal: 0,
        total: 0,
        tax: 0,
        discount: null,
        discountCode: '',
        tour: "pedicab-tour",
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
                square1.style.right = 500 - scrollPercent * window.innerWidth * 0.1 + 'px';
                square2.style.left = 160 - scrollPercent * window.innerWidth * 0.1 + 'px';
                square3.style.right = -80 - scrollPercent * window.innerWidth * 0.18 + 'px';
                square4.style.left = -80 - scrollPercent * window.innerWidth * 0.18 + 'px';
                square5.style.left = -80 - scrollPercent * window.innerWidth * 0.18 + 'px';
            }
        });

        //hide sidebar to prevent overflow on footer
        // document.addEventListener("scroll", function () {
        //     if (document.documentElement.scrollTop > 3000) document.getElementsByClassName('sidebar')[0].style.display = 'none';
        //     else {
        //         if (window.innerWidth > 1120) {
        //             document.getElementsByClassName('sidebar')[0].style.display = 'block';
        //         } else {
        //             document.getElementsByClassName('sidebar')[0].style.display = 'none';
        //         }
        //     }
        // });
    }, [])

    useEffect(() => {
        document.title = 'Central Park Bike Tour - CENTRALPARKTOURS.NET';
    })
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
                            <h1 style={{ color: '#4c4a4b', textShadow: '2px 0px currentColor' }}>Central Park Pedicab Tour</h1>

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
                                    <div className="carousel-item active"> <img src="/images/centralparkpedicabtours.jpg" alt="centralparkpedicabtours" /> </div>
                                    <div className="carousel-item"> <img src="/images/centralparkpedicabtours2.jpg" alt="centralparkpedicabtours2" /> </div>
                                    <div className="carousel-item"> <img src="/images/centralparkpedicabtours3.jpg" alt="centralparkpedicabtours3" /> </div>
                                    <div className="carousel-item"> <img src="/images/centralparkpedicabtours4.jpg" alt="centralparkpedicabtours4" /> </div>
                                    <div className="carousel-item"> <img src="/images/centralparkpedicabtours5.jpg" alt="centralparkpedicabtours5" /> </div>

                                </div>
                                {/* <!-- Left right -->  */}
                                <a className="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span className="carousel-control-prev-icon"></span> </a> <a className="carousel-control-next" href="#custCarousel" data-slide="next"> <span className="carousel-control-next-icon"></span> </a>
                                {/* <!-- Thumbnails --> */}
                                <ol className="carousel-indicators list-inline">
                                    <li style={{ marginRight: 30 }} className="list-inline-item active"> <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel"> <img src="/images/600centralparkpedicabtours.jpg" className="img-fluid" /> </a> </li>
                                    <li style={{ marginRight: 30 }} className="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img src="/images/600centralparkpedicabtours2.jpg" className="img-fluid" /> </a> </li>
                                    <li style={{ marginRight: 30 }} className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img src="/images/600centralparkpedicabtours3.jpg" className="img-fluid" /> </a> </li>
                                    <li style={{ marginRight: 30 }} className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img src="/images/600centralparkpedicabtours4.jpg" className="img-fluid" /> </a> </li>
                                    <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="4" data-target="#custCarousel"> <img src="/images/600centralparkpedicabtours5.jpg" className="img-fluid" /> </a> </li>
                                </ol>
                            </div>

                        </div>


                        <Affix position={{ bottom: 20 }}>
                            <Transition transition="slide-up" mounted={scroll.y < 3000}>
                                {(transitionStyles) => (
                                    <div className="sidebar" id="pedicab-sidebar" style={transitionStyles}>

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
                                                                minTime={setHours(setMinutes(new Date(), 0), 9)}
                                                                maxTime={setHours(setMinutes(new Date(), 30), 17)}
                                                                dateFormat="MMMM d, yyyy h:mm aa"
                                                                customInput={<CustomInput />}

                                                            />
                                                            {/* <input className="form-control" type="datetime-local" id="datepicker" /> */}
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
                                                        {/* <p className="t-title">Bike Tour - <b> 2 Hours</b></p> */}
                                                        <p className="t-title">Duration</p>

                                                        <div className="form-group centered-row">
                                                            <div className="btn-counter" onClick={(e) => setCount({ ...count, duration: count.duration > 1 ? count.duration - 1 : 1 })}>-</div>
                                                            <input className="counter-field" type="text" value={count.duration + " h"} />
                                                            <div className="btn-counter" onClick={(e) => setCount({ ...count, duration: count.duration < 2 ? count.duration + 1 : 2 })}>+</div>
                                                        </div>
                                                        <p className="text-uppercase" style={{ fontSize: 14 }}>Price from <b style={{ fontSize: 24, color: '#313030' }}>$53</b> usd</p>
                                                        {/* <button className="btn-reserve">Reserve</button> */}
                                                        <PedicabReserveForm setHours={setHours} setMinutes={setMinutes} startDate={startDate} setStartDate={setStartDate} count={count} setCount={setCount} />

                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                )}
                            </Transition>
                        </Affix>

                        {/* end sidebar */}
                        <div className="m-res text-center">
                            <PedicabReserveForm setHours={setHours} setMinutes={setMinutes} startDate={startDate} setStartDate={setStartDate} count={count} setCount={setCount} />
                        </div>
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
                            <img src="/images/dott-2.png" className="tour-circle-img" />


                            <div className="row align-items-center">

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-left tour-col1 mt-4">
                                    <h3><b style={{ color: '#535150' }}>2. The Carousel</b></h3>
                                    <p>
                                        A beloved Central Park tradition for almost 150 years.
                                        The Carousel consists of 57 hand-carved and painted Horses.
                                        Also one of the largest carousels in the USA
                                    </p>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center tour-col2">
                                    <img className="trip-img" src="/images/the-carousel.png" />
                                </div>
                            </div>

                            <img src="/images/dott.png" className="tour-circle-img" />


                            <div className="row align-items-center">

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center">
                                    <img className="trip-img mr-4" src="/images/bethesda-fountain.png" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-left mt-4">
                                    <h3><b style={{ color: '#535150' }}>3. Bethesda Fountain</b></h3>
                                    <p>
                                        One of the most beautiful spots in Central Park.
                                        Located in the perfect center of the island.
                                        It opens a mesmarizing view of the Lake and the famous row boats
                                    </p>
                                </div>
                            </div>
                            <img src="/images/dott-2.png" className="tour-circle-img" />

                            <div className="row align-items-center">

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-left tour-col1 pt-3">
                                    <h3><b style={{ color: '#535150' }}>4. Bow Bridge</b></h3>
                                    <p>
                                        One of Central Park’s most romantic spots!
                                        Connecting Bethesda Terrace with the Ramble.
                                        It is also the first and most famous cast-iron
                                        bridges in Central Park.
                                    </p>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center tour-col2">
                                    <img className="trip-img" src="/images/bow-bridge.png" />
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
                                                Me and my family took the pedicab tour in Central Park before couple of months and to
                                                be honest that was the highlight of the day. We had so much fun exploring the secrets
                                                of Central Park.
                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>Jay S</i></h5>
                                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                            </div>

                                        </div>

                                        <div className="carousel-item">
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                                Me and my fiancee decided to take the pedicab tour. It was amazing experience. We
                                                had really good time around central park and our driver was so funny and
                                                knowledgeable about the park. The…
                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>Johny BM</i></h5>
                                            </div>

                                        </div>

                                        <div className="carousel-item">
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                                Super funny tour guide with a great sense of humor. It was a 1 hour tour of the park on
                                                a pedicab/rickshaw. Dave was phenomenal. I will definitely look for him next time in
                                                New York
                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>Alicia R</i></h5>
                                            </div>

                                        </div>

                                        <div className="carousel-item">
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                                We spent only 1 day in New York. Definitely not enough but we had a short stay and we
                                                were unable to extend. Sure, Empire State, Top of the Rock and Statue of Liberty are
                                                amazing but pleas…
                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>Lorain M</i></h5>
                                            </div>

                                        </div>

                                        <div className="carousel-item">
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                                I am so delighted with the service of this company. Everything was so easy from the
                                                start. We made our reservations online. They contacted us and gave us information
                                                about everything in the…
                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>Luis F</i></h5>
                                            </div>

                                        </div>

                                        <ol className="carousel-indicators">
                                            <li data-target="#custCarousel2" data-slide-to="0" className="active"></li>
                                            <li data-target="#custCarousel2" data-slide-to="1"></li>
                                            <li data-target="#custCarousel2" data-slide-to="2"></li>
                                            <li data-target="#custCarousel2" data-slide-to="3"></li>
                                            <li data-target="#custCarousel2" data-slide-to="4"></li>

                                        </ol>

                                    </div>
                                    {/* <!-- Left right -->  */}
                                    <a className="carousel-control-prev" href="#custCarousel2" data-slide="prev"> <span className="carousel-control-prev-icon"></span> </a> <a className="carousel-control-next" href="#custCarousel2" data-slide="next"> <span className="carousel-control-next-icon"></span> </a>

                                </div>
                            </div>


                            <div className="text-left pt-5 mt-5" style={{ color: '#535150' }}>
                                <h3 className="h1 pl-3 pb-3" id="faq">FAQ</h3>

                                <div className="content">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingOne" role="tab">
                                                <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="pull-right fa fa-plus pr-3"></i>How many people can fit in a Pedicab?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse in" id="collapseOne" role="tabpanel" aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <p>Our pedicabs are three-seaters. Which means that each pedicab can comfortably fit 3 adults. In case you don’t feel comfortable, we can always dispatch another pedicab and split your group.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingTwo" role="tab">
                                                <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="pull-right fa fa-plus pr-3"></i>What’s the difference between the 1 hour and the 2 hour Central Park pedicab tour?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    <p>The 1 hour tour will cover the lower park of Central Park (where 90% of the attractions and sights are located). For people that want to further explore and spend more time in the park, we recommend the 2 hour tour. The 2 hour tour covers all major attractions in Central Park, including Belvedere Castle, The Reservoir, The Great Lawn, Swedish Cottage and many more.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingThree" role="tab">
                                                <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="pull-right fa fa-plus pr-3"></i>Where does the tour start from?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse" id="collapseThree" role="tabpanel" aria-labelledby="headingThree">
                                                <div className="panel-body">
                                                    <p>We offer 2 options to select from - you can either come to our store located at 870 7th Ave (just 2 blocks from Central Park) or you can choose to be picked up directly from the park. The second option is great, if you are already in the park and suddenly you realize how big Central Park is! In that case, you can select the option to be picked up from one of the many pick up zones in the park. We will of course point out the closest pick up zone and provide ETA of your tour guide.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingFour" role="tab">
                                                <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour"><i className="pull-right fa fa-plus pr-3"></i>Once we board the pedicab, are there any stops or places of interest, where we can get off the pedicab and explore?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse" id="collapseFour" role="tabpanel" aria-labelledby="headingFour">
                                                <div className="panel-body">
                                                    <p>Of course! We love to show you Central Park and some of its beauty is not in plain sight. For the 1 hour tour, we have 3 designated spots, where you can get off and explore on foot. Those spots are Bethesda Fountain, Cherry Hill and Strawberry Fields. You can take additional time on the stops and explore in more detail. The 2 hour tour includes 2 additional stops - Belvedere Castle and The Great Lawn.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingFive" role="tab">
                                                <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive"><i className="pull-right fa fa-plus pr-3"></i>Where is the drop-off at the end of the tour?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse" id="collapseFive" role="tabpanel" aria-labelledby="headingFive">
                                                <div className="panel-body">
                                                    <p>Generally, we finish all pedicab tours along 59th street, which is the south end of Central Park. You can talk to your tour guide, in case you want to be dropped off somewhere else. Here are some sample rates for additional pedicab taxi service
                                                        From Central Park to Times Square, will cost you around $20 per pedicab
                                                        Central Park To Grand Central will be around $25 per pedicab
                                                        Central Park to MET Museum - $15 per pedicab
                                                        Central Park to Natural History Museum - $20 per pedicab
                                                        Central Park to Penn Station - $30 per pedicab We can also drop you off at your hotel. If your hotel is located in Midtown, you can talk to your guide and he will drop you off for FREE.
                                                    </p>
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