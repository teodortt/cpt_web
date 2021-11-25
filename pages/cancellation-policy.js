import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Policy = () => {

    return (
        <div>
            <NavBar />
            <div className="container my-5 py-5 justify-content-center">
                <h1 className="pt-5">Cancellation policy</h1>
                <p>
                    If a reservation for any of the services, provided on the website, is canceled due to bad weather conditions
                    such as heavy rain or snowfall, the customer can choose to postpone the tour for another day and time or receive a full refund.
                    In order to receive a full refund the customer has to notify Central Park Tours, at least 24hrs prior to the scheduled time
                    of the service booked.
                </p>
                <p>
                    If the customer fails to inform Central Park Tours, regarding his intend to cancel the reservation,
                    at least 24hrs in advance a partial refund will be issued and 10% service fee will be withheld from the refund.
                </p>
            </div>
            <Footer />
        </div >
    )
}

export default Policy;