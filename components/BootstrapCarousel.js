import React, { useState, useEffect } from 'react'
export default function BootstrapCarousel() {

    const [data, setData] = useState([]);

    function lastPosts() {
        let URL = `https://www.centralparktours.net/blog/ghost/api/v3/content/posts/?key=d0f43d7dd165f96b5a288cd583&filter=tags:events&limit=5`;
        fetch(URL)
            .then((response) => response.json())
            .then(data => setData(data.posts))
    }

    useEffect(() => {
        lastPosts();
    }, [])

    useEffect(() => {
        // carousel
        $('#recipeCarousel').carousel({
            interval: 10000
        })

        $('.carousel .v2').each(function () {
            var minPerSlide = 3;
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (var i = 0; i < minPerSlide; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }

                next.children(':first-child').clone().appendTo($(this));
            }
        });

        //with vanilla js
        //   let items = document.querySelectorAll('.carousel .carousel-item')

        // items.forEach((el) => {
        //     // number of slides per carousel-item
        //     const minPerSlide = 4
        //     let next = el.nextElementSibling
        //     for (var i=1; i<minPerSlide; i++) {
        //         if (!next) {
        //             // wrap carousel by using first child
        //             next = items[0]
        //         }
        //         let cloneChild = next.cloneNode(true)
        //         el.appendChild(cloneChild.children[0])
        //         next = next.nextElementSibling
        //     }
        // })
        // end carousel
    }, [])

    return (
        <div>
            {/* {data.map((data, i) => (
                <div key={i} className="brd my-5">

                    <img src={data.feature_image} alt="Image 1" />
                    <p className="post-title">{data.title}</p>

                    </div>

                    
            ))} */}

            {/* start */}
            <div className="container pb-5 mb-5">

                <div className="container text-center my-3">
                    {/* <h2 className="font-weight-light">Bootstrap 4 - Multi Item Carousel</h2> */}
                    <div className="row mx-auto my-auto">
                        <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
                            <div className="carousel-inner inner-v2 w-100" role="listbox">
                                <div className="carousel-item v2 active">
                                    <div className="col-md-4">
                                        <div className="text-left">
                                            <a className="text-post" href="https://google.bg/">
                                                <img className="img-post img-fluid" src="/images/bike-tour-central-park.jpg" />
                                                Electric scooters and e-bikes in New York
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item v2">
                                    <div className="col-md-4 col-xs-12">
                                        <div className="text-left">
                                            <a className="text-post" href="https://google.bg/">
                                                <img className="img-post img-fluid" src="/images/bike-tour-central-park.jpg" />
                                                Electric scooters and e-bikes in New York
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item v2">
                                    <div className="col-md-4 col-xs-12">
                                        <div className="text-left">
                                            <a className="text-post" href="https://google.bg/">
                                                <img className="img-post img-fluid" src="/images/bike-tour-central-park.jpg" />
                                                Electric scooters and e-bikes in New York
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item v2">
                                    <div className="col-md-4 col-xs-12">
                                        <div className="text-left">
                                            <a className="text-post" href="https://google.bg/">
                                                <img className="img-post img-fluid" src="/images/bike-tour-central-park.jpg" />
                                                Electric scooters and e-bikes in New York
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item v2">
                                    <div className="col-md-4 col-xs-12">
                                        <div className="text-left">
                                            <a className="text-post" href="https://google.bg/">
                                                <img className="img-post img-fluid" src="/images/bike-tour-central-park.jpg" />
                                                Electric scooters and e-bikes in New York
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item v2">
                                    <div className="col-md-4 col-xs-12">
                                        <div className="text-left">
                                            <a className="text-post" href="https://google.bg/">
                                                <img className="img-post img-fluid" src="/images/bike-tour-central-park.jpg" />
                                                Electric scooters and e-bikes in New York
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev ctrl-v2 w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon prev-v2 bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next ctrl-v2 w-auto" href="#recipeCarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon next-v2 bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            {/* end */}




        </div>
    )
}