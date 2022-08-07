import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import '../MainText';
import './LandingPage.css';
import bgVid from '../../videos/CodingBackground.mp4';
import MainText from './../MainText';


function LandingPage() {

  return (
    <div className="landing-container">
      <video src={bgVid} autoPlay loop muted />
        <MainText />
      <div className="landing_button">
        {/*When the interface is complete, the this button will link to my main website portfolio!*/}
        <Button className='compile_button' buttonStyle='btn--primary' buttonSize='btn--large'></Button>
      </div>
    </div>
  )
}

export default LandingPage;