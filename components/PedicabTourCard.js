import Link from 'next/link'
import DestkopPedicabForm from './Index_Pedicab_Form'
const PedicabTourCard = () => {

    return (

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

                <div className="row pb-4">
                    <div style={{ fontSize: 12 }} className="col text-left text-uppercase">Price from <b style={{ fontSize: 18, color: '#88bc2c' }}>$53</b> usd</div>
                    <div style={{ fontSize: 12 }} className="col text-right pt-1">DURATION <b> 1h</b></div>
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
                        <Link href="/tours/central-park-pedicab-tour">View tour</Link>
                    </div>
                    <div style={{ fontSize: 12 }} className="col">
                        {/* <p className="btn-reserve">Book now</p> */}
                        <DestkopPedicabForm />
                    </div>
                </div>


            </div>
        </div>
    )
}
export default PedicabTourCard;