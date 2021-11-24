import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import React from 'react'
const NavBar = ({ title }) => {


    const router = useRouter();
    const currentRoute = router.pathname;

    const [navClass, setNavClass] = React.useState('');
    const [navLogo, setNavLogo] = React.useState('');

    function catchRoute() {
        if (currentRoute === '/' || currentRoute === '/tours' || currentRoute === '/attractions') {
            setNavClass('nav-link')
            setNavLogo('cpt-logo')
        } else {
            setNavClass('nav-link black-text')
            setNavLogo('cpt-logo-wh')
        }
    }

    React.useEffect(() => {
        catchRoute();
    }, [currentRoute])

    return (
        <>
            <Head>
                <title>{title}</title>
                {/* <title>Central Park Tours - The Official Central Park Tour Company</title> */}
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet" />
                {/* <link href="/bootstrap.min.css" rel="stylesheet" />
            <script src="/jquery-3.3.1.slim.min.js" type="text/javascript"></script>
            <script src="/bootstrap.bundle.min.js" type="text/javascript"></script>
            <link rel="stylesheet" href="/css/all.css" /> */}
                <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" type="text/javascript"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js" type="text/javascript"></script>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
            </Head>
            {/* before header <div> */}
            <header className="header">
                <nav className={`navbar navbar-expand-lg fixed-top py-1 ${currentRoute === '/' ? '' : 'active'}`}>
                    <div className="container">
                        <span className="navbar-brand text-uppercase font-weight-bold">
                            <Link href="/">
                                {currentRoute === '/' ? <img id="cpt-logo" className={navLogo} width="125" src="/images/logo-white-full.png" /> : <img id="cpt-logo" className={navLogo} width="90" src="/images/logo-green.png" />}
                            </Link>
                            {/* <img id="cpt-logo" className="cpt-logo" width="125" src={currentRoute === '/' ? '/images/logo-white-full.png' : '/images/logo-green.png'} /> */}
                        </span>
                        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>

                        <div id="navbarSupportedContent" className={`collapse navbar-collapse justify-content-center`}>
                            <ul className="navbar-nav">
                                <li className={currentRoute === '/' ? 'nav-item pl-3 active-l' : 'nav-item pl-3'}><span className={navClass}><Link href="/">Home</Link></span></li>
                                <li className={currentRoute === '/#about' ? 'nav-item pl-3 active-l' : 'nav-item pl-3'}>{currentRoute === '/' ? <AnchorLink href="#about" className={navClass}>About Us</AnchorLink> : <span className={navClass}><Link href="/#about">About Us</Link></span>}</li>
                                {/* <li className={currentRoute === '/tours' ? 'nav-item pl-3 active-l' : 'nav-item pl-3'}>
                                    <span className={navClass}><Link href="/tours">Tours</Link></span>
                                </li> */}
                                <li className={currentRoute === '/tours' ? 'dropdown nav-item pl-3 active-l' : 'dropdown nav-item pl-3'}>
                                    <span className={navClass}><Link href="/tours">Tours</Link></span>
                                    <span className="dropdown-content">
                                        <Link href="/tours/central-park-bike-tour">Bike</Link>
                                        <Link href="/tours/central-park-pedicab-tour">Pedicab</Link>
                                        <Link href="/tours/central-park-picnic-tour">Picnincs</Link>
                                    </span>
                                </li>

                                <li className={currentRoute === '/bike-rentals' ? 'nav-item pl-3 active-l' : 'nav-item pl-3'}><span className={navClass}><Link href="/bike-rentals">Bike Rentals</Link></span></li>
                                <li className={currentRoute === '/attraction' ? 'nav-item pl-3 active-l' : 'nav-item pl-3'}><span className={navClass}><Link href="/attractions">Attractions</Link></span></li>
                                <li className={currentRoute === '/single-tour#faq' ? 'nav-item pl-3 active-l' : 'nav-item pl-3'}><span className={navClass}><Link href="/faq">FAQ</Link></span></li>
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