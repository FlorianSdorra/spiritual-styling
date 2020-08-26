import React from 'react';
import './cozy-card.scss';

import logo from '../assets/images/logo.png';
import india from '../assets/images/narayan-gopalan.png';

const CozyCard = () => {
    return(
        <div className="cozy-card">
            <div className="top">
                <div className="tile">
                    <p>Ritual Energy Care</p>
                </div>
                <div className="tile">
                    <p>Meditation</p>
                </div>
            </div>
            <div className="middle">
                <div className="egg"></div>
                <div className="corners">
                    <img src={logo} alt="logo" className="logo"></img>
                    <div className="bottom-left">
                        <p>"LOVE is the abscence of JUDGEMENT."</p>
                    </div>
                    <div className="top-right">
                        <p>Florian Sdorra</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="tile">
                    <p>Affirmation</p>
                </div>
                <div className="tile">
                    <p>Luxury Things</p>
                </div>
            </div>
        </div>
    )
}

export default CozyCard;