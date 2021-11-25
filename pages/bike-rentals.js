import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import BikeRentalsForm from '../components/BikeRentalsReserveForm'
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
    const [scroll, scrollTo] = useWindowScroll();

    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 9));
    const [count, setCount] = useState({
        adults: 1,
        kids: 1,
        baskets: 0,
        locks: 0,
        duration: 1,
        subtotal: 0,
        total: 0,
        tax: 0,
        discount: null,
        discountCode: '',
        tour: "bike-rental",
        tourDate: startDate,
        name: '',
        email: '',
        phone: ''
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

    useEffect(() => {
        document.documentElement.scrollTop = 1;

    }, [])

    return (
        <div>
            <div className="container" id="container">
                <div className="square square-2"></div>
                <div className="square square-1"></div>
                <div className="square square-4"></div>
                <div className="square square-3"></div>
                <div className="square square-5"></div>
            </div>

            <NavBar title="Bike Rentals - Central Park Tours - The Official Central Park Tour Company" />
            <div className="container-fluid bg-single-tour pl-0 pr-0">

                {/* <StripeCheckout /> */}

                <div className="container" style={{ paddingTop: '200px', paddingBottom: '100px' }}>
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <h1 style={{ color: '#4c4a4b', textShadow: '2px 0px currentColor' }}>Central Park Bike Rental</h1>

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
                                    <div className="carousel-item"> <img src="/images/centralparkbiketour.png" alt="Hills" /> </div>
                                    <div className="carousel-item"> <img src="/images/centralparkbiketour.png" alt="Hills" /> </div>
                                    <div className="carousel-item"> <img src="/images/centralparkbiketour.png" alt="Hills" /> </div>
                                    <div className="carousel-item"> <img src="/images/centralparkbiketour.png" alt="Hills" /> </div>
                                    {/* <div className="carousel-item"> <img src="https://i.imgur.com/weXVL8M.jpg" alt="Hills"/> </div>
                    <div className="carousel-item"> <img src="https://i.imgur.com/Rpxx6wU.jpg" alt="Hills"/> </div>
                    <div className="carousel-item"> <img src="https://i.imgur.com/83fandJ.jpg" alt="Hills"/> </div>
                    <div className="carousel-item"> <img src="https://i.imgur.com/JiQ9Ppv.jpg" alt="Hills"/> </div> */}
                                </div>
                                {/* <!-- Left right -->  */}
                                <a className="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span className="carousel-control-prev-icon"></span> </a> <a className="carousel-control-next" href="#custCarousel" data-slide="next"> <span className="carousel-control-next-icon"></span> </a>
                                {/* <!-- Thumbnails --> */}
                                <ol className="carousel-indicators list-inline">
                                    <li style={{ marginRight: 30 }} className="list-inline-item active"> <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel"> <img src="https://i.imgur.com/weXVL8M.jpg" className="img-fluid" /> </a> </li>
                                    <li style={{ marginRight: 30 }} className="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img src="https://i.imgur.com/Rpxx6wU.jpg" className="img-fluid" /> </a> </li>
                                    <li style={{ marginRight: 30 }} className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img src="https://i.imgur.com/83fandJ.jpg" className="img-fluid" /> </a> </li>
                                    <li style={{ marginRight: 30 }} className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img src="https://i.imgur.com/JiQ9Ppv.jpg" className="img-fluid" /> </a> </li>
                                    <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="4" data-target="#custCarousel"> <img src="https://i.imgur.com/JiQ9Ppv.jpg" className="img-fluid" /> </a> </li>
                                </ol>
                            </div>

                        </div>

                        <Affix position={{ bottom: 20 }}>
                            <Transition transition="slide-up" mounted={scroll.y < 2900}>
                                {(transitionStyles) => (
                                    <div className="sidebar" id="brental-sidebar" style={transitionStyles}>

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
                                                        <div className="form-group centered-row">
                                                            <p className="t-title">Baskets</p>
                                                            <div className="btn-counter" onClick={(e) => setCount({ ...count, baskets: count.baskets > 1 ? count.baskets - 1 : 0 })}>-</div>
                                                            <input className="counter-field" type="number" value={count.baskets} />
                                                            <div className="btn-counter" onClick={(e) => setCount({ ...count, baskets: count.baskets + 1 })}>+</div>
                                                        </div>
                                                        <div className="form-group centered-row">
                                                            <p className="t-title">Locks</p>
                                                            <div className="btn-counter" onClick={(e) => setCount({ ...count, locks: count.locks > 1 ? count.locks - 1 : 0 })}>-</div>
                                                            <input className="counter-field" type="number" value={count.locks} />
                                                            <div className="btn-counter" onClick={(e) => setCount({ ...count, locks: count.locks + 1 })}>+</div>
                                                        </div>
                                                        {/* <p className="t-title">Bike Tour - <b> 2 Hours</b></p> */}
                                                        <p className="t-title">Duration</p>

                                                        <div className="form-group centered-row">
                                                            <div className="btn-counter" onClick={(e) => setCount({ ...count, duration: count.duration > 1 ? count.duration - 1 : 1 })}>-</div>
                                                            <input className="counter-field" style={{ width: '100px' }} type="text" value={count.duration < 4 ? count.duration + " h" : 'All day'} />
                                                            <div className="btn-counter" onClick={(e) => setCount({ ...count, duration: count.duration < 4 ? count.duration + 1 : 4 })}>+</div>
                                                        </div>
                                                        <p className="text-uppercase" style={{ fontSize: 14 }}>Price from <b style={{ fontSize: 24, color: '#313030' }}>$15</b> usd</p>
                                                        {/* <button className="btn-reserve">Reserve</button> */}
                                                        <BikeRentalsForm setHours={setHours} setMinutes={setMinutes} startDate={startDate} setStartDate={setStartDate} count={count} setCount={setCount} />

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
                            <BikeRentalsForm setHours={setHours} setMinutes={setMinutes} startDate={startDate} setStartDate={setStartDate} count={count} setCount={setCount} />
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
                                    <img className="trip-img" src="/images/the-ramble.png" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-left mt-4">
                                    <h3><b style={{ color: '#535150' }}>1. Explore The Ramble</b></h3>
                                    <p>
                                        Connected by the Bow Bridge, the Ramble is a
                                        36-acre woodland with winding pathways and lush greenery.
                                        The most famous bird-watching spot in Central Park
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
                                    <h3><b style={{ color: '#535150' }}>2. The waterfall in the Ravine</b></h3>
                                    <p>
                                        Located in the north end of Central Park.
                                        The Ravine is One of the few left secrets in the park.
                                        Very few people know about it and the fact that there is a waterfall there.
                                    </p>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center tour-col2">
                                    <img className="trip-img" src="/images/the-ravine.png" />
                                </div>

                            </div>

                            <img src="/images/dott.png" className="tour-circle-img" />


                            <div className="row align-items-center">

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center">
                                    <img className="trip-img mr-4" src="/images/sheep-meadow.png" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-left mt-4">
                                    <h3><b style={{ color: '#535150' }}>3. Picnic on Sheep Meadow</b></h3>
                                    <p>
                                        This is the most famous picnic area in Central Park.
                                        Perfect place to park your bike and enjoy the stunning
                                        views of New York City. Make sure you bring plenty of water with you.
                                    </p>
                                </div>
                            </div>
                            <img src="/images/dott-2.png" className="tour-circle-img" />

                            <div className="row align-items-center">

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-left tour-col1 pt-3">
                                    <h3><b style={{ color: '#535150' }}>4. Explore Belvedere Castle</b></h3>
                                    <p>
                                        Located just 2 minutes away from the Shakespeare Garden,
                                        Belvedere castle is a famous lookout place, overlooking
                                        the Great Lawn and Turtle Pond. There is also a bike rack near the castle
                                    </p>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center tour-col2">
                                    <img className="trip-img" src="/images/belvedere-castle.png" />
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
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center', color: '#555555' }}>
                                                Amazing service, great tours and highly reasonable.
                                                This is the best way to explore Central Park.
                                                I will recommend this way to my friends who are
                                                coming to visit me. We really loved it…
                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>Ian M</i></h5>
                                            </div>

                                        </div>

                                        <div className="carousel-item">
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center', color: '#555555' }}>
                                                We rented a few bikes from this place a couple of days ago. Bikes were in good condition . Staff was helpful and they even gave us additional hour for free. Central Park is only a few…
                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>Gloria E</i></h5>
                                            </div>

                                        </div>
                                        <div className="carousel-item">
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center', color: '#555555' }}>
                                                We got really good bikes, with maps, baskets, helmets and locks all almost brand new. We have tried several other renting places in NY and this is absolutely the very best. Very nice and…                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>PGHDA</i></h5>
                                            </div>

                                        </div>
                                        <div className="carousel-item">
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center', color: '#555555' }}>
                                                Lots of different size, good quality bikes available. Five of us turned up with very little warning and they provided us with bikes, helmets and baskets and a map. Very helpful and friendly.                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>Jillian W</i></h5>
                                            </div>

                                        </div>
                                        <div className="carousel-item">
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center', color: '#555555' }}>
                                                Really happy and friendly staff with some great quality bicycles! The team at Central park even offered us a complimentary bike delivery to our hotel (which was only a couple of blocks…                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5><i>Zdravko Ivanov</i></h5>
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
                                                <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="pull-right fa fa-plus pr-3"></i>How big is Central Park?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse in" id="collapseOne" role="tabpanel" aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingTwo" role="tab">
                                                <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="pull-right fa fa-plus pr-3"></i>How long does is take to cycle around Central Park?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingThree" role="tab">
                                                <h4 className="panel-title"><a className="faq-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="pull-right fa fa-plus pr-3"></i>How fit do I need to be for the bike tour?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse" id="collapseThree" role="tabpanel" aria-labelledby="headingThree">
                                                <div className="panel-body">
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
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