import { getDefaultAgent } from 'openai/_shims/index.mjs';
import React from 'react';


function HeroPage() {
    return (
        <div className="hero-container">
            <h1 className="page-punch">Brighter Living</h1>
            <p className="description">
                The composition of the landscape is built on the contrast of architecture and nature, which do not oppose each other, but rather coexist harmoniously.
            </p>
            <div className="page-cover">
                <img src="https://i.pinimg.com/564x/d9/27/26/d9272667eef87d45da7abff30961d9c8.jpg" alt="Suburb house" />
            </div>
        </div>
    );
}

export default HeroPage;