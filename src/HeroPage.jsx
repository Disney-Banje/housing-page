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
                <img src="https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDF8fHxlbnwwfHx8fHw%3D" alt="Suburb house" />
            </div>
        </div>
    );
}

export default HeroPage;