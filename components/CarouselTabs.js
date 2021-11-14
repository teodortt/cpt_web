import { useState, useEffect } from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const CarouselTabs = () => {

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

    return (
        <Splide
            options={{
                perPage: 2,
                cover: true,
                // width: '90%',
                gap: '2.7rem',
                height: '18rem',
                lazyLoad: 'nearby',
                pagination: false,
                // arrowPath: 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z',
                breakpoints: {
                    '640': {
                        perPage: 2,
                        gap: '1rem',
                    },
                    '480': {
                        perPage: 1,
                        gap: '1rem',
                        padding: {
                            right: '2rem',
                            left: '2rem',
                        },
                    },
                },

                // type: 'loop',
                padding: {
                    right: '5rem',
                    left: '5rem',
                },
            }}
        >

            {data.map((data, i) => (
                <SplideSlide key={i} className="brd my-5">

                    <img src={data.feature_image} alt="Image 1" />
                    <p className="post-title">{data.title}</p>

                </SplideSlide>
            ))}

            {/* <SplideSlide className="brd">
            </SplideSlide> */}

        </Splide>
    )
}

export default CarouselTabs;