import React from 'react';
import './cozy-card.scss'

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
                    <div>
                        <p>Test</p>
                    </div>
                    <div>
                        <p>Test</p>
                    </div>
                    <div>
                        <p>Test</p>
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