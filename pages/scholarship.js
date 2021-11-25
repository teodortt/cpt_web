import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'

const Scholarship = () => {

    return (
        <div>
            <NavBar />
            <div className="container my-5 py-5">
                <p>
                    Central Park’s Scavenger Hunt Scholarship
                    Apply Now For A $1,000 Award Toward Your Education.
                    We are aware of the constantly increasing costs of college education in the United States. That is why Central Park Tours is committed to helping students alleviate some of the costs, by providing a $1,000 scholarship award.
                </p>
                <p>
                    Central Park Tours is currently designing a FREE scavenger hunt in Central Park. Eligible students should submit their ideas and suggestions in a written format explaining and elaborating on different tasks, puzzles, games and so on, all within Central Park.
                </p>
                <p>
                    The scavenger hunt will be available in a web format on our website. Try to incorporate creative ways to include history, sights, attractions and architecture of the park. Students are encouraged to improvise and unleash their creativity.
                    scholarship
                    scholarship-2
                    Eiligibility
                    Who Can Apply ?
                    To qualify students must:
                </p>

                <p>● Enrolled full-time in high school as a senior or be a part-time or full-time student in a college, graduate school, trade school, or coding bootcamp.</p>

                <p>● Have an overall average GPA of at least 3.0.</p>

                <p>● Citizens, permanent residents and international students are all welcome to participate in the scholarship.</p>

                <p>● Submit a 1000 word essay on the prompt specified below.</p>


                <h3>Application</h3>

                <p>Apply now for a $1,000 award toward your education.</p>

                <p>Please submit your essays to:</p>
                <h3><Link href="scholarships@centralparktours.net">scholarships@centralparktours.net</Link></h3>
                <br></br>

                Please submit your application for the Fall semester no later than May 1, or for the
                Spring semester no later than November 1. The winning student for the Fall semester
                award will be notified on May 31, and the winning student for the Spring semester
                award will be notified on November 30. Payment will be made out directly to the
                winning student.
            </div>
            <Footer />
        </div >
    )
}

export default Scholarship;