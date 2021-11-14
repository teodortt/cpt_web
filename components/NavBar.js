import Head from 'next/head'

const NavBar = () => (
    <>
        <Head>
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
            <nav className={`navbar navbar-expand-lg fixed-top py-1`}>
                <div className="container">
                    <a href="#" className="navbar-brand text-uppercase font-weight-bold">
                        <img id="cpt-logo" className="cpt-logo" width="150" src="/images/logo-white-full.png" />
                    </a>
                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>

                    <div id="navbarSupportedContent" className={`collapse navbar-collapse justify-content-center`}>
                        <ul className="navbar-nav">
                            <li className="nav-item pl-3 active"><a href="#" className="nav-link">Home <span className="sr-only">(current)</span></a></li>
                            <li className="nav-item pl-3"><a href="#" className="nav-link">About Us</a></li>
                            <li className="nav-item pl-3"><a href="#" className="nav-link">Tours</a></li>
                            <li className="nav-item pl-3"><a href="#" className="nav-link">Bike Rentals</a></li>
                            <li className="nav-item pl-3"><a href="#" className="nav-link">Attractions</a></li>
                            <li className="nav-item pl-3"><a href="#" className="nav-link">FAQ</a></li>
                            <li className="nav-item pl-3"><a href="#" className="nav-link">Blog</a></li>
                            <li className="nav-item btn-cpt"><a href="#" className="nav-link text-light">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>
)
export default NavBar;