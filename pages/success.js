import React, { useState, useEffect } from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import { useRouter } from "next/router"
const Success = () => {
    const router = useRouter()
    const {
        query: { id },
    } = router
    return (<div>
        <NavBar />
        <div className="container text-center">
            <h1 style={{ paddingTop: 300, paddingBottom: 300 }}>Order completed!
                <br></br>
                About us: {id}

            </h1>
        </div>
        <Footer />
    </div>)
}
export default Success;