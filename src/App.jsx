import React from 'react'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Title from "./components/Title/Title.jsx";
import About from "./components/About/About.jsx";
import Campus from "./components/Campus/Campus.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
import {useState} from "react";

const App = () => {

    const [playerState, setPlayerState] = useState(false);


    return (
        <div>
            <Navbar/>
            <Hero/>
            <div
                className="container">
                <Title
                    subTitle='Our Program'
                    title='What we Offer'
                />
                <Programs/>
                <About setPlayerState={setPlayerState}/>
                <Title
                    subTitle='Galley'
                    title='Campus Photos'
                />
                <Campus/>

                <Title
                    subTitle='Testimonials'
                    title='What Student Says'
                />

                <Testimonials/>

                <Title
                    subTitle='Contact US'
                    title='Get in Touch'
                />

                <Contact/>
                <Footer />
            </div>
            <VideoPlayer playerState={playerState} setPlayerState={setPlayerState} />
        </div>
    )
}
export default App
