import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import PicnicsBtn from '../../components/PicnicsButton'
// import ReserveMobile from '../components/ReserveMobile'
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition } from '@mantine/core';
import emailjs from 'emailjs-com';
import { notification } from 'antd';

// import StripeCheckout from '../components/makqti'

export default function Single() {

    const openNotification = placement => {
        notification.info({
            message: 'Successfully sent!',
            description:
                'Your message was successfully sent!',
            placement,
        });
    };
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_azblda7', 'template_0ni70ar', e.target, 'user_eW5yZ8izC59xnly9aF67d')
            .then((result) => {
                console.log(result.text);
                // setShow(true);
                openNotification('bottomRight')
                e.target.reset()

            }, (error) => {
                console.log(error.text);
            });
    }

    const [scroll, scrollTo] = useWindowScroll();
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
        subtotal: 0,
        total: 0,
        tax: 0,
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
            if (scrollTop >= 900 && scrollTop <= 3100) {
                square1.style.right = 500 - scrollPercent * window.innerWidth * 0.1 + 'px';
                square2.style.left = 160 - scrollPercent * window.innerWidth * 0.1 + 'px';
                square3.style.right = -80 - scrollPercent * window.innerWidth * 0.18 + 'px';
                square4.style.left = -80 - scrollPercent * window.innerWidth * 0.18 + 'px';
                square5.style.left = -80 - scrollPercent * window.innerWidth * 0.18 + 'px';

            }
        });


    }, [])

    return (
        <div>
            <div className="container" id="container" style={{ marginTop: -70 }}>
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
                            <h1 style={{ color: '#4c4a4b', textShadow: '2px 0px currentColor' }}>Picnics at the park</h1>

                            <div className="col d-flex pb-4 pt-1">
                                <span className="fa fa-star checked-r"></span>
                                <span className="fa fa-star checked-r"></span>
                                <span className="fa fa-star checked-r"></span>
                                <span className="fa fa-star checked-r"></span>
                                <span className="fa fa-star checked-r"></span>
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
                            <Transition transition="slide-up" mounted={scroll.y < 2400}>
                                {(transitionStyles) => (
                                    <div className="sidebar" id="picnincs-sidebar" style={transitionStyles}>
                                        <div className="container">
                                            <form onSubmit={sendEmail}>
                                                {/* <div onClick={hhhandle}>CLICK</div> */}
                                                <div className="row pt-4 justify-content-center">
                                                    <div className="col text-center">
                                                        <p className="book-title">Picnic Request Form</p>
                                                        <div className="form-group">

                                                        </div>
                                                        <div className="checkout-form">
                                                            <div className="form-group centered-row">
                                                                <input className="form-control" name="names" placeholder="First & Last Name" type="text" />
                                                            </div>
                                                            <div className="form-group centered-row">
                                                                <input className="form-control" name="phone-number" placeholder="Phone" type="number" />
                                                            </div>
                                                            <div className="form-group centered-row">
                                                                <input className="form-control" name="user_email" placeholder="Email" type="email" />
                                                            </div>

                                                            <div className="form-group centered-row">
                                                                <p className="t-title" style={{ fontSize: 12 }}>Number Of Guests</p>
                                                                <br></br>
                                                                <div className="btn-counter" onClick={(e) => setCount({ ...count, kids: count.kids > 1 ? count.kids - 1 : 0 })}>-</div>
                                                                <input className="counter-field" name="number_of_guests" type="number" value={count.kids} />
                                                                <div className="btn-counter" onClick={(e) => setCount({ ...count, kids: count.kids + 1 })}>+</div>
                                                            </div>
                                                            <div className="form-group">
                                                                <DatePicker
                                                                    className="form-control"
                                                                    name="date_and_time"
                                                                    selected={startDate}
                                                                    onChange={(date) => (setStartDate(date), setCount({ ...count, tourDate: date }))}
                                                                    showTimeSelect
                                                                    minDate={new Date()}
                                                                    minTime={setHours(setMinutes(new Date(), 0), 9)}
                                                                    maxTime={setHours(setMinutes(new Date(), 30), 17)}
                                                                    dateFormat="MMMM d, yyyy h:mm aa"
                                                                    customInput={<CustomInput />}

                                                                />
                                                                <input type="hidden" value={count.tourDate} name="datetime" />
                                                            </div>
                                                            <div className="form-group centered-row">
                                                                <textarea className="form-control" name="message" placeholder="Your Notes" >
                                                                </textarea>

                                                            </div>
                                                        </div>
                                                        <button className="btn-reserve">Request Now</button>

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
                            <PicnicsBtn setHours={setHours} setMinutes={setMinutes} startDate={startDate} setStartDate={setStartDate} count={count} setCount={setCount} />
                        </div>
                        {/* </div> */}


                    </div>
                </div>

                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <p className="pb-2">
                                The Team at Central Park Tours will create
                                the most magical event for you and your special guests.
                                Picnics at the park are an amazing way to break the ways of traditional dining.
                                Our amazing catering company offers delicious food and a variety of gourmet choices.
                            </p>
                            <p className="pb-2">
                                We will prepare the set up of your dreams, that will make the perfect
                                setting for your special event like a romantic day out, birthday celebration,
                                anniversary, proposal, bridal party, baby shower or just because you decided
                                to feel special, we are here for you and your outdoor event. We take our picnic
                                experiences to two parks in New York - Central Park or Astoria Park, both
                                with outstanding views of the city. This is a 2 hour experience, with full
                                set up and clean up for your convenience, all you have to do is show up and enjoy.
                            </p>
                            <p>
                                Fill out our request form for bookings, we will get back to you with a
                                catalog and an assigned event specialist that will help you create magic.
                                * All bookings are made through an invoice secure link, that your agent will send via email.
                            </p>
                            {/* <p className="pb-2">Our bicycle tour has been ranked as on the top 5 things to do in Central Park by TripAdvisor.
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
                            </p> */}
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
                                    <img className="trip-img" src="/images/sheep-meadow.png" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-left mt-4">
                                    <h3><b style={{ color: '#535150' }}>1. The Sheep Meadow</b></h3>
                                    <p>
                                        This is an iconic picnic spot. Right across from
                                        Tavern on the Green, Sheep Meadow offers stunning
                                        views of the Manhattan skyline and lush Kentycky blue grass!
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
                                    <h3><b style={{ color: '#535150' }}>2. Cherry Hill</b></h3>
                                    <p>
                                        Located right next to one of the most romantic spots in
                                        the park - Wagner Cove. The meadow near Cherry Hills
                                        offers a stunning view of the Lake and the San Remo Building.
                                    </p>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center tour-col2">
                                    <img className="trip-img" src="/images/cherry-hill.png" />
                                </div>

                            </div>

                            <img src="/images/dott.png" className="tour-circle-img" />


                            <div className="row align-items-center">

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center">
                                    <img className="trip-img mr-4" src="/images/the-ramble.png" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-left mt-4">
                                    <h3><b style={{ color: '#535150' }}>3. The Ramble</b></h3>
                                    <p>
                                        This is definitely for the adventurous!
                                        Just head to this green sanctuary and
                                        find a place to throw a blanket
                                    </p>
                                </div>
                            </div>
                            <img src="/images/dott-2.png" className="tour-circle-img" />

                            <div className="row align-items-center">

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-left tour-col1 pt-3">
                                    <h3><b style={{ color: '#535150' }}>4. The North Meadow</b></h3>
                                    <p>
                                        This spot is located in the north and perfect if
                                        you are looking to avoid the crowds.
                                        Keep in mind that Central Park is huge so
                                        make sure you plan your transportation.
                                    </p>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center tour-col2">
                                    <img className="trip-img" src="/images/north-meadow.png" />
                                </div>

                            </div>


                            {/* <div className="text-center pt-5 mt-5" style={{ color: '#535150' }}>
                                <h2>What people say</h2>
                                <h6>about this tour</h6>
                                <hr style={{ border: '3px solid #88bc2c', borderRadius: 50, width: 100 }} />

                                <div id="custCarousel2" className="carousel slide" data-ride="carousel" align="center">

                                    <div className="carousel-inner text-dark">
                                        <div className="carousel-item active">
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                                ddddfsdfsdfhiudsfbcnikjudfvijk
                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5>First slide label</h5>
                                            </div>

                                        </div>

                                        <div className="carousel-item">
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                                aaaaaaaaaaaaaaaaa
                                            </div>
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5>second slide label</h5>
                                            </div>

                                        </div>

                                        <ol className="carousel-indicators">
                                            <li data-target="#custCarousel2" data-slide-to="0" className="active"></li>
                                            <li data-target="#custCarousel2" data-slide-to="1"></li>
                                        </ol>

                                    </div>
                                    <a className="carousel-control-prev" href="#custCarousel2" data-slide="prev"> <span className="carousel-control-prev-icon"></span> </a> <a className="carousel-control-next" href="#custCarousel2" data-slide="next"> <span className="carousel-control-next-icon"></span> </a>

                                </div>
                            </div> */}


                            <div className="text-left pt-5 mt-5" style={{ color: '#535150' }}>
                                <h3 className="h1 pl-3 pb-3">FAQ</h3>

                                <div className="content">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingOne" role="tab">
                                                <h4 className="panel-title"><a className="faq-title-r collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="pull-right fa fa-plus pr-3"></i>What type of food is included in the picnic basket?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse in" id="collapseOne" role="tabpanel" aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <p>We have a wide variety of food choices as we work with the top food catering companies in Midtown Manhattan. The basic basket consists of a choice of sandwich, soda, selection of cheeses, kalamata olives, orange juice, water and soda. However, since we work with the top ranked food providers, we can go much more extravagant! Please contact our representative to discuss your perfect food choice..</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingTwo" role="tab">
                                                <h4 className="panel-title"><a className="faq-title-r collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="pull-right fa fa-plus pr-3"></i>Is It allowed to drink alcoholic beverages in Central Park?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    <p>Consuming alcoholic beverages is not permitted in Central Park. Although a lot of people do it and it definitely seems normal to our European guests, you are not allowed to have an open container in the park. You can order alcoholic beverages from our suppliers but consuming in the park is your responsibility.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingThree" role="tab">
                                                <h4 className="panel-title"><a className="faq-title-r collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="pull-right fa fa-plus pr-3"></i>What if we want to stay longer. Can we order additional items?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse" id="collapseThree" role="tabpanel" aria-labelledby="headingThree">
                                                <div className="panel-body">
                                                    <p>Certainly! Our cargo bikes are constantly in Central Park. Just contact our rep and we will coordinate everything. There will be an additional charge associated with the new items and delivery service.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingFour" role="tab">
                                                <h4 className="panel-title"><a className="faq-title-r collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour"><i className="pull-right fa fa-plus pr-3"></i>We had a great time! What type of transportation is available after the picnic?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse" id="collapseFour" role="tabpanel" aria-labelledby="headingFour">
                                                <div className="panel-body">
                                                    <p>Yes, we offer many transportation options in Central Park. In case you don’t want to walk, you can pick from a pedicab ride (links), bike rental andan electric scooter. What’s awesome is that you don’t need to come to a store to pick up your bicycle/scooter. We will dispatch one of our agents who will deliver the bicycle/scooter.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" id="headingFive" role="tab">
                                                <h4 className="panel-title"><a className="faq-title-r collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive"><i className="pull-right fa fa-plus pr-3"></i>I am planning a teambuilding event in Central Park. Can you help with that?</a></h4>
                                            </div>
                                            <div className="panel-collapse collapse" id="collapseFive" role="tabpanel" aria-labelledby="headingFive">
                                                <div className="panel-body">
                                                    <p>Yes, please contact us for more information and package deals.</p>
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