import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'

const Terms = () => {

    return (
        <div>
            <NavBar />
            <div className="container my-5 py-5 justify-content-center">
                <h1 className="pt-5">Terms and Conditions</h1>
                <p>
                    I agree to release, discharge and hold harmless "Central Park Tours Inc.", any tour guide or other type of independent contractor or employee working with Central Park Tours Inc. from any and all liability for damages of any kind or character that may result from participating in this rickshaw tour, bike rental or bike tour.

                    If I am supervising any minors (children under 18) I agree to take full responsibility for the participating minor/s. By doing so I agree to release, discharge and hold harmless Central Park Tours Inc., any tour guide or other type of independent contractor or employee working with Central Park Tours Inc., from any and all liability for damages of any kinds or character that may result from the minor/s participating in this rickshaw tour, bike rental or bike tour.

                    Minors under 12 old may ride their bike on the sidewalk and Central Park Tours requires that the supervising adult make sure the child/children use/s the sidewalk in areas of the park or greenway that are open to traffic.

                    The parent or guardian understands and agrees to the following conditions.
                </p>
                <h2>Minor must</h2>
                <p>
                    Always be accompanied by parent or guarding
                    Stay in and walk the bike to and from the park or greenway
                    Wear a helmet if they are under 14 years of age
                    Be at least 5 years old
                    Stay in the bike lane on any park roadway that is open
                    All customers are responsible for their bikes. Lost, stolen or missing bikes will result in a charge of $220 (US Dollars) per bike. The bikes are not designed for off road use or for jumping under any circumstances! Please be careful.

                    Important Helmets are lent outfor free and available for all customers regardless of age. If you refuse the helmet you must sign a separate refusal form that will be provided to you when you pick up the bike.

                    Important The right brake is the rear brake and the left brake is the front brake. in many countries like England and Australia it is the other way around so be aware of which so you don't throw yourself over the handlebars, serious injuries can be avoided understand the brakes before you depart
                </p>
            </div>
            <Footer />
        </div >
    )
}

export default Terms;