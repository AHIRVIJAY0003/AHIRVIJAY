import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
function App(){
    Aos.init();
    return(
        <>
        <div className="logo">
            <img src="https://logos-world.net/wp-content/uploads/2025/01/UK-Logo.png"></img>
        </div>
        <div className="box1">
            <h1>UNITED KINGDOM</h1>
            <p>Wales, a congeries of Celtic kingdoms lying in Great Britain's southwest, was formally united with England by the Acts of Union of 1536 and 1542. Scotland, ruled from London since 1603, formally was joined with England and Wales in 1707 to form the United Kingdom of Great Britain.</p>
        </div>

        <div className="box2">
            <p>SCROLL DOWN</p>
            <p align='center'><FaArrowDown className="arrow"/></p>
        </div>

        <hr/>
        <h1>Welcome To our Country</h1>
        <hr/>

        <div className="parent1-2">
                <div className="child1" data-aos="fade-up"><img src='https://fullsuitcase.com/wp-content/uploads/2021/01/Tower-Bridge-in-London-UK.jpg'></img>Tower Bridge</div>
                <div className="child2" data-aos="fade-down" data-aos-duration="2000"><img src="https://media.cntraveller.com/photos/611be9e3d5b6f5a4a3def392/16:9/w_2560%2Cc_limit/Mountain-view-over-city-Edinburgh-scotland-conde-nast-traveller-28july17-iStock.jpg"></img>Edinburgh</div>
                <div className="child1" data-aos="fade-right" data-aos-duration="2000"><img src=""></img></div>
                <div className="child2" data-aos="fade-left" data-aos-duration="2000"><img src=""></img></div>
        </div>

        <div className="parent1-2">
                <div className="child1" data-aos="flip-left" data-aos-duration="2000">flip left</div>
                <div className="child2" data-aos="flip-right" data-aos-duration="2000">flip right</div>
                <div className="child1" data-aos="flip-up" data-aos-duration="2000">flip up</div>
                <div className="child2" data-aos="flip-down" data-aos-duration="2000">flip down</div>
        </div>

        <div className="parent1-2">
                <div className="child1" data-aos="zoom-in" data-aos-duration="2000">zoom in</div>
                <div className="child2" data-aos="zoom-in-up" data-aos-duration="2000">zoom in up</div>
                <div className="child1" data-aos="zoom-in-down" data-aos-duration="2000">zoom in down</div>
                <div className="child2" data-aos="zoom-out" data-aos-duration="2000">zoom out</div>
        </div>

       </>
    );
}
export default App;