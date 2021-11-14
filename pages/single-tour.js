import React, { useState, useEffect } from 'react'
import TourNav from '../components/TourNav'
import Footer from '../components/Footer'
import ReserveBtn from '../components/ReserveBtn'
// import ReserveMobile from '../components/ReserveMobile'
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";

// import StripeCheckout from '../components/makqti'

export default function Single() {
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
        subtotal: 0,
        total: 0,
        tax: 0
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

        //hide sidebar to prevent overflow on footer
        document.addEventListener("scroll", function () {
            if (document.documentElement.scrollTop > 3000) document.getElementsByClassName('sidebar')[0].style.display = 'none';
            else {
                if (window.innerWidth > 1150) {
                    document.getElementsByClassName('sidebar')[0].style.display = 'block';
                } else {
                    document.getElementsByClassName('sidebar')[0].style.display = 'none';

                }
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

    //   useEffect(() => {
    //     document.documentElement.scrollTop = 1;

    //   }, [])
    const hhhandle = () => {
        console.log(startDate)
    }

    return (
        <div>
            <div class="container" id="container">
                <div className="square square-2"></div>
                <div className="square square-1"></div>
                <div className="square square-4"></div>
                <div className="square square-3"></div>
                <div className="square square-5"></div>
            </div>

            <TourNav />
            <div className="container-fluid bg-single-tour pl-0 pr-0">

                {/* <StripeCheckout /> */}

                <div class="container" style={{ paddingTop: '200px', paddingBottom: '100px' }}>
                    <div class="row">
                        <div class="col-md-12 col-lg-8">
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


                            <div id="custCarousel" class="carousel slide" data-ride="carousel" align="center">
                                {/* <!-- slides --> */}
                                <div class="carousel-inner">
                                    <div class="carousel-item active"> <img src="/images/centralparkbiketour.png" alt="Hills" /> </div>
                                    <div class="carousel-item"> <img src="/images/centralparkbiketour.png" alt="Hills" /> </div>
                                    <div class="carousel-item"> <img src="/images/centralparkbiketour.png" alt="Hills" /> </div>
                                    <div class="carousel-item"> <img src="/images/centralparkbiketour.png" alt="Hills" /> </div>
                                    <div class="carousel-item"> <img src="/images/centralparkbiketour.png" alt="Hills" /> </div>
                                    {/* <div class="carousel-item"> <img src="https://i.imgur.com/weXVL8M.jpg" alt="Hills"/> </div>
                    <div class="carousel-item"> <img src="https://i.imgur.com/Rpxx6wU.jpg" alt="Hills"/> </div>
                    <div class="carousel-item"> <img src="https://i.imgur.com/83fandJ.jpg" alt="Hills"/> </div>
                    <div class="carousel-item"> <img src="https://i.imgur.com/JiQ9Ppv.jpg" alt="Hills"/> </div> */}
                                </div>
                                {/* <!-- Left right -->  */}
                                <a class="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span class="carousel-control-prev-icon"></span> </a> <a class="carousel-control-next" href="#custCarousel" data-slide="next"> <span class="carousel-control-next-icon"></span> </a>
                                {/* <!-- Thumbnails --> */}
                                <ol class="carousel-indicators list-inline">
                                    <li style={{ marginRight: 30 }} class="list-inline-item active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#custCarousel"> <img src="https://i.imgur.com/weXVL8M.jpg" class="img-fluid" /> </a> </li>
                                    <li style={{ marginRight: 30 }} class="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img src="https://i.imgur.com/Rpxx6wU.jpg" class="img-fluid" /> </a> </li>
                                    <li style={{ marginRight: 30 }} class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img src="https://i.imgur.com/83fandJ.jpg" class="img-fluid" /> </a> </li>
                                    <li style={{ marginRight: 30 }} class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img src="https://i.imgur.com/JiQ9Ppv.jpg" class="img-fluid" /> </a> </li>
                                    <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="4" data-target="#custCarousel"> <img src="https://i.imgur.com/JiQ9Ppv.jpg" class="img-fluid" /> </a> </li>
                                </ol>
                            </div>

                        </div>

                        <div className="sidebar">
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
                                                    onChange={(date) => setStartDate(date)}
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
                                                <p className="t-title">Kids (6 - 16)</p>
                                                <div className="btn-counter" onClick={(e) => setCount({ ...count, kids: count.kids > 1 ? count.kids - 1 : 0 })}>-</div>
                                                <input className="counter-field" type="number" value={count.kids} />
                                                <div className="btn-counter" onClick={(e) => setCount({ ...count, kids: count.kids + 1 })}>+</div>
                                            </div>
                                            <p className="t-title">Duration <b> 2h</b></p>
                                            <p className="text-uppercase pb-3" style={{ fontSize: 14 }}>Price from <b style={{ fontSize: 24, color: '#313030' }}>$59</b> usd</p>
                                            {/* <button className="btn-reserve">Reserve</button> */}
                                            <ReserveBtn setHours={setHours} setMinutes={setMinutes} startDate={startDate} setStartDate={setStartDate} count={count} setCount={setCount} />

                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                        {/* end sidebar */}
                        {/* <div className={`mobile-reserve-btn text-center ${open ? 'm-checkout' : ''}`} onClick={() => setOpen(true)}> */}
                        <div className="m-res text-center">
                            <ReserveBtn setHours={setHours} setMinutes={setMinutes} startDate={startDate} setStartDate={setStartDate} count={count} setCount={setCount} />
                        </div>
                        {/* </div> */}


                    </div>
                </div>

                <div className="container py-5">
                    <div className="row">
                        <div class="col-md-12 col-lg-8">
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
                            {/* <div class="container" id="container">
                                <div class="square square-1"></div>
                                <div class="square square-2"></div>
                            </div> */}
                            <img src="/images/dott-2.png" className="attr-image" />


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

                            <img src="/images/dott.png" className="attr-image" />


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
                            <img src="/images/dott-2.png" className="attr-image" />

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

                                <div id="custCarousel2" class="carousel slide" data-ride="carousel" align="center">

                                    {/* <!-- slides --> */}
                                    <div class="carousel-inner text-dark">
                                        <div class="carousel-item active">
                                            {/* <img src="/images/centralparkbiketour.png" alt="Hills"/>  */}
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                                ddddfsdfsdfhiudsfbcnikjudfvijk
                                            </div>
                                            <div class="carousel-caption d-none d-md-block text-dark">
                                                <h5>First slide label</h5>
                                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                            </div>

                                        </div>

                                        <div class="carousel-item">
                                            {/* <img src="/images/centralparkbiketour.png" alt="Hills"/> */}
                                            <div style={{ width: 400, height: 300, justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                                aaaaaaaaaaaaaaaaa
                                            </div>
                                            <div class="carousel-caption d-none d-md-block text-dark">
                                                <h5>second slide label</h5>
                                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                            </div>

                                        </div>

                                        <ol class="carousel-indicators">
                                            <li data-target="#custCarousel2" data-slide-to="0" class="active"></li>
                                            <li data-target="#custCarousel2" data-slide-to="1"></li>
                                        </ol>

                                    </div>
                                    {/* <!-- Left right -->  */}
                                    <a class="carousel-control-prev" href="#custCarousel2" data-slide="prev"> <span class="carousel-control-prev-icon"></span> </a> <a class="carousel-control-next" href="#custCarousel2" data-slide="next"> <span class="carousel-control-next-icon"></span> </a>

                                </div>
                            </div>


                            <div className="text-left pt-5 mt-5" style={{ color: '#535150' }}>
                                <h3 className="h1 pl-3 pb-3">FAQ</h3>

                                <div class="content">
                                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div class="panel panel-default">
                                            <div class="panel-heading" id="headingOne" role="tab">
                                                <h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i class="pull-right fa fa-plus pr-3"></i>How big is Central Park?</a></h4>
                                            </div>
                                            <div class="panel-collapse collapse in" id="collapseOne" role="tabpanel" aria-labelledby="headingOne">
                                                <div class="panel-body">
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading" id="headingTwo" role="tab">
                                                <h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i class="pull-right fa fa-plus pr-3"></i>How long does is take to cycle around Central Park?</a></h4>
                                            </div>
                                            <div class="panel-collapse collapse" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo">
                                                <div class="panel-body">
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading" id="headingThree" role="tab">
                                                <h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i class="pull-right fa fa-plus pr-3"></i>How fit do I need to be for the bike tour?</a></h4>
                                            </div>
                                            <div class="panel-collapse collapse" id="collapseThree" role="tabpanel" aria-labelledby="headingThree">
                                                <div class="panel-body">
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