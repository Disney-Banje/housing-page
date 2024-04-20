import React from 'react';

function Offers(props) {
    return (
        <article className='page-offers'>
            <header>
                <span className="digit-number">{props.number + 1}</span>
                <h3>{props.list.title}</h3>
            </header>
            <p>{props.list.paragraph}</p>
        </article>
    );
}

export default Offers;