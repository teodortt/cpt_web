import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { Events } from "./posts_events";
import { Tours } from "./posts_tours";
import { Things } from "./posts_thing_to_do";


// import dynamic from 'next/dynamic'
// const CarouselTabs = dynamic(() => import('./CarouselTabs'),
//   { ssr: false }
// )
const { TabPane } = Tabs;

const TabsComponent = () => {
  const [keys, setKey] = useState('1');

  function callback(key) {
    // console.log(key);
    setKey(key);
  }




  //   useEffect(()=>{
  //     // carousel
  //   $('#recipeCarousel').carousel({
  //     interval: 10000
  //   })

  //   $('.carousel .carousel-item').each(function(){
  //       var minPerSlide = 3;
  //       var next = $(this).next();
  //       if (!next.length) {
  //       next = $(this).siblings(':first');
  //       }
  //       next.children(':first-child').clone().appendTo($(this));

  //       for (var i=0;i<minPerSlide;i++) {
  //           next=next.next();
  //           if (!next.length) {
  //             next = $(this).siblings(':first');
  //           }

  //           next.children(':first-child').clone().appendTo($(this));
  //         }
  //   });

  //   //with vanilla js
  // //   let items = document.querySelectorAll('.carousel .carousel-item')

  // // items.forEach((el) => {
  // //     // number of slides per carousel-item
  // //     const minPerSlide = 4
  // //     let next = el.nextElementSibling
  // //     for (var i=1; i<minPerSlide; i++) {
  // //         if (!next) {
  // //             // wrap carousel by using first child
  // //             next = items[0]
  // //         }
  // //         let cloneChild = next.cloneNode(true)
  // //         el.appendChild(cloneChild.children[0])
  // //         next = next.nextElementSibling
  // //     }
  // // })
  //   // end carousel
  // },[])



  return (
    <Tabs
      defaultActiveKey="1"
      onChange={callback}
    >
      {/* <TabPane tab={<button className={`btn-tab py-1 ${width > 600 ? 'py-2 mx-3' : 'py-1 mx-1'} ${keys === '1' ? 'active-t' : ''} text-uppercase`}>Recent</button>} key="1"> */}
      <TabPane tab={<button className={`btn-tab py-2 mx-3  ${keys === '1' ? 'active-t' : ''} text-uppercase`}>Recent</button>} key="1">
        {/* Content of Tab Pane 1 */}

        <Events />

      </TabPane>

      <TabPane tab={<button className={`btn-tab py-2 mx-3 ${keys === '2' ? 'active-t' : ''} text-uppercase`}>Events</button>} key="2">
        {/* Content of Tab Pane 2 */}
        {/* splide js carousel */}
        <div className="pb-5 mb-5">

          <Tours />
        </div>

      </TabPane>

      <TabPane tab={<button className={`btn-tab py-2 mx-3 ${keys === '3' ? 'active-t' : ''} text-uppercase`}>Things to do</button>} key="3">
        {/* Content of Tab Pane 3 */}
        <div className="pb-5 mb-5">

          <Things />
        </div>
      </TabPane>
    </Tabs >
  );
}

export default TabsComponent
