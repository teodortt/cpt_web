import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link"

const SampleNextArrow = () => (
    <img style={{ width: 30, height: 30 }} src="/images/right.png" />
)
const SamplePrevArrow = () => (
    <img src="/images/left.png" />
)

export function Things() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    const [data, setData] = React.useState([]);

    function lastPosts() {
        let URL = `https://www.centralparktours.net/blog/ghost/api/v3/content/posts/?key=d0f43d7dd165f96b5a288cd583&filter=tags:things-to-do&limit=5`;
        fetch(URL)
            .then((response) => response.json())
            .then(data => setData(data.posts))
    }

    React.useEffect(() => {
        lastPosts();
    }, [])

    return (
        <div style={{ background: '', paddingTop: '20px', paddingBottom: '150px' }}>
            <Slider {...settings}>

                {data.map((data, i) => (
                    <div className="pr-2 pl-2" key={i}>
                        <img clasName="post-img" style={{ width: '100%', height: 230, borderRadius: 20 }} src={data.feature_image} alt={data.title} />
                        <h5><Link href={data.url}>{data.title}</Link></h5>
                    </div>


                ))}

            </Slider>
        </div>
    );
}
