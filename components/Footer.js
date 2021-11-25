import Link from 'next/link'
const Footer = () => (
    <footer className="footer" id="footer">
        <div className="container bottom_border">
            <div className="row">
                <div className=" col-sm-4 col-md col-sm-4  col-12 col text-left">
                    <h5 className="headin5_amrc col_white_amrc pt2">INFORMATION</h5>
                    {/* <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                    <ul className="footer_ul_amrc">
                        <li><Link href="/scholarship">Apply for a scholarship</Link></li>
                        <p>Audio Tours - Soon!</p>
                        <p>Calendar - Soon!</p>
                    </ul>
                </div>

                <div className=" col-sm-4 col-md  col-6 col text-left">
                    <h5 className="headin5_amrc col_white_amrc pt2">TOURS</h5>
                    <ul className="footer_ul_amrc">
                        <li><Link href="/tours/central-park-bike-tour">Bike tour</Link></li>
                        <li><Link href="/tours/central-park-pedicab-tour">Pedicab tour</Link></li>
                        {/* <li><Link href="/tours">E-Scooter tour</Link></li> */}
                        <li><Link href="/bike-rentals">Bike rentals</Link></li>
                        <li><Link href="/tours/central-park-picnic-tour">Picnics</Link></li>
                    </ul>
                </div>

                <div className=" col-sm-4 col-md  col-6 col text-left">
                    <h5 className="headin5_amrc col_white_amrc pt2">LEGAL</h5>
                    <ul className="footer_ul_amrc">
                        <li><Link href="/cancellation-policy">Cancellation policy</Link></li>
                        <li><Link href="/terms-and-conditions">Terms and conditions</Link></li>
                    </ul>
                </div>

                <div className=" col-sm-4 col-md  col-12 col text-left">
                    <h5 className="headin5_amrc col_white_amrc pt2">CONTACT</h5>
                    <ul className="footer_ul2_amrc">
                        <li>
                            <p>
                                <i className="fas fa-map-marker-alt"></i>
                            </p>
                            <p style={{ paddingLeft: '20px', marginTop: '-33px' }}> Fancy Apple Bike Store
                                <br></br>
                                870 7th Ave, New York, NY, 10019
                            </p>
                        </li>
                        <li>
                            <p><i className="fa fa-phone fa-rotate-90 mr-1"></i>  Office - (347) 746 - 8687  </p>

                        </li>
                    </ul>

                    <ul style={{ listStyleType: 'none' }} className="d-flex social_f">
                        <li className="btn-link checked"><Link className="m-1" href="http://fb.com/centralparktours"><i className="fab fa-facebook-f"></i></Link></li>
                        <li className="btn-link checked"><Link className="m-1" href="http://twitter.com/centralparktour"><i className="fab fa-twitter"></i></Link></li>
                        <li className="btn-link checked"><Link className="m-1" href="http://instagram.com/centralparktours"><i className="fab fa-instagram"></i></Link></li>
                    </ul>

                </div>
            </div>
            <img src="/images/logo-silver.png" width="100" />
        </div>

        <div className="container">
            <p className="text-center pt-3">©2021 Central Park Tours Inc. Created with <i style={{ color: 'red' }} className="fas fa-heart"></i>  in NYC.</p>
        </div>

    </footer>
)

export default Footer;