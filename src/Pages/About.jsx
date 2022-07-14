import React from 'react'
import Navbar from '../comp2/Navbar'

function About() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 className="text-center mt-2">
                    We're building the next evolution of digital connection
                </h1>
                <p className="text-center mt-3">
                    Meta Platforms, Inc., doing business as Meta and formerly known as Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns Facebook, Instagram, and WhatsApp, among other products and services
                </p>
            </div>
        </div>
    )
}

export default About