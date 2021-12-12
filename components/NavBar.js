import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import React from 'react'
const NavBar = ({ title }) => {


    const router = useRouter();
    const dynamicRoute = useRouter().asPath

    const currentRoute = router.asPath;

    const [navClass, setNavClass] = React.useState('nav-link');
    const [navbarClass, setNavbarClass] = React.useState(true);
    const [navLogo, setNavLogo] = React.useState(<img id="cpt-logo" width="90" src="/images/logo-green.png" />);

    let oldScrollY = 10;

    // const [direction, setDirection] = useState('up');

    const controlDirection = () => {

        if (currentRoute === '/' || currentRoute === '/tours' || currentRoute === '/attractions' || currentRoute.includes('/attraction')) {

            if (window.scrollY > 10) {
                setNavbarClass(true);
                setNavClass('nav-link ')
                setNavLogo(<img id="cpt-logo" width="90" src="/images/logo-green.png" />)
            } else {
                setNavbarClass(false);
                setNavClass('nav-link')
                setNavLogo(<img id="cpt-logo" width="125" src="/images/logo-white-full.png" />)
            }
        } else {

            setNavLogo(<img id="cpt-logo" width="90" src="/images/logo-green.png" />)
            setNavbarClass(true);
            setNavClass('nav-link ')
        }
        oldScrollY = window.scrollY;
    }

    React.useState(() => {
        setNavClass('nav-link');
        setNavbarClass(true);
        // setNavLogo(<img id="cpt-logo" width="125" src="/images/logo-white-full.png" />);
    }, [dynamicRoute])
    React.useEffect(() => {
        window.innerWidth > 991 && window.addEventListener('scroll', controlDirection);
        return () => {
            window.removeEventListener('scroll', controlDirection);
        };
    }, []);

    // function urlAppend(value) {
    //     var current_location = window.location.href;
    //     current_location += "#about";
    //     setTimeout(() => window.location.href = current_location, 1000)
    // }

    const topZero = () => {
        document.documentElement.scrollTop = 1;
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Central Park Tours is the biggest company for guided tours in New York's Central Park. We offer bicycle tours, pedicab rides, walking tours and bicycle rentals" />
                <meta name="keywords" content="central park, bike tours, bike rentals, pedicab tours, walking tours, ny attractions, new york" />
                <meta name="geo.region" content="US-NY" />
                <meta name="geo.placename" content="New York" />
                <meta name="geo.position" content="40.7646452;-73.9822423" />
                <meta name="ICBM" content="40.7646452, -73.9822423" />
                <meta name="p:domain_verify" content="fa2b3e0c33fb4e013e4f9e6136c96a11" />
                <meta name="msvalidate.01" content="98DFA2586746E84DE25C0DD44D07B94D" />

                <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" type="text/javascript"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js" type="text/javascript"></script>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
            </Head>
            {/* before header <div> */}
            <header className="header">
                <nav className={`${navbarClass ? "navbar active" : "navbar"} navbar-expand-lg fixed-top py-1 `}>
                    <div className="container">
                        <span className="navbar-brand text-uppercase font-weight-bold">
                            <Link href="/">
                                {navLogo}
                            </Link>
                        </span>
                        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>

                        <div id="navbarSupportedContent" className={`collapse navbar-collapse justify-content-center`}>
                            <ul className="navbar-nav">
                                <li className="nav-item pl-3">
                                    <span className={`${navClass} ${currentRoute === "/" ? "text-green" : ""}`} onClick={topZero}>
                                        <Link href="/">Home</Link>
                                    </span>
                                </li>
                                <li className="nav-item pl-3">
                                    {/* {currentRoute === '/' ?
                                        <AnchorLink href="#about" onClick={urlAppend}
                                            className={`${navClass} ${currentRoute === "/#about" ? "text-green" : ""}`}
                                        >About Us
                                        </AnchorLink> : */}
                                    <span className={`${navClass} ${currentRoute === "/#about" ? "text-green" : ""}`}>
                                        <Link href="/#about">About Us</Link>
                                    </span>
                                </li>

                                <li className="dropdown nav-item pl-3">
                                    <span className={`${navClass} ${currentRoute === "/tours" ? "text-green" : ""}`}><Link href="/tours">Tours</Link></span>
                                    <span className="dropdown-content">
                                        <Link href="/tours/central-park-bike-tour">Bike</Link>
                                        <Link href="/tours/central-park-pedicab-tour">Pedicab</Link>
                                        <Link href="/tours/central-park-picnic-tour">Picnincs</Link>
                                    </span>
                                </li>

                                <li className="nav-item pl-3"><span className={`${navClass} ${currentRoute === "/bike-rentals" ? "text-green" : ""}`}><Link href="/bike-rentals">Bike Rentals</Link></span></li>
                                <li className="nav-item pl-3"><span className={`${navClass} ${currentRoute === "/attractions" ? "text-green" : ""}`}><Link href="/attractions">Attractions</Link></span></li>
                                <li className="nav-item pl-3"><span className={`${navClass} ${currentRoute === "/faq" ? "text-green" : ""}`}><Link href="/faq">FAQ</Link></span></li>
                                <li className="nav-item pl-3"><span className={navClass}><Link href="https://www.centralparktours.net/blog">Blog</Link></span></li>
                                <li className="nav-item btn-cpt">{currentRoute === '/' ? <AnchorLink href="#contact" className="nav-link text-light">Contact</AnchorLink> : <span className="nav-link text-light"><Link href="/#contact">Contact</Link></span>}</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default NavBar;