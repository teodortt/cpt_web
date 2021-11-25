// import React, { useState, useEffect } from 'react'
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer"
// import { useRouter } from "next/router"
// const Success = () => {
//     const router = useRouter()
//     const {
//         query: { id },
//     } = router
//     return (<div>
//         <NavBar />
//         <div className="container text-center">
//             <h1 style={{ paddingTop: 300, paddingBottom: 300 }}>Order completed!
//                 <br></br>
//                 About us: {id}

//             </h1>
//         </div>
//         <Footer />
//     </div>)
// }
// export default Success;

import React, { useState, useEffect } from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import { useRouter } from "next/router"
const Success = () => {
    const router = useRouter()
    const {
        query: { tour, duration, adults, kids, subtotal, total, tax, discount, tourDate, baskets, locks },
    } = router
    return (<div>
        <NavBar />
        {tour ? <div className="container text-center px-5 " style={{ background: '#80bf2f', borderRadius: 30, marginTop: 100 }}>
            <h1 style={{ paddingTop: 10, color: 'white' }}>Order completed!  </h1>
            <br></br>
            <div className="card" style={{ minHeight: 400 }}>
                <p>{tour && (<>Tour: {tour}</>)}</p>
                <p>{duration && (<>Duration: {duration + 'h'}</>)}</p>
                <p>{adults && (<>Adults: {adults}</>)}</p>
                <p>{kids && (<>Kids: {kids}</>)}</p>
                <p>{subtotal && (<>Subtotal: ${subtotal}</>)}</p>
                <p>{total && (<>Total: ${total.slice(0, 5)}</>)}</p>
                <p>{tax && (<>Tax: ${tax.slice(0, 5)}</>)}</p>
                <p>{discount && (<>Discount: {discount}%</>)}</p>
                <p>{tourDate && (<>Date: {tourDate}</>)}</p>
                <p>{baskets && (<>Baskets: {baskets}</>)}</p>
                <p>{locks && (<>Locks: {locks}</>)}</p>
            </div>


        </div> :
            <div className="container text-center" style={{ paddingTop: 300, paddingBottom: 300 }}>
                <h1>Error 404 Page Not Found!</h1>
                <h3>This page does not exist.</h3>
            </div>
        }
        <Footer />
    </div>)
}
export default Success;