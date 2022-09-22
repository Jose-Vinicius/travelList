import React from 'react';

export default function Card(props){
    let location = props.location
    const locationUpperCase = location.toUpperCase()

    return(
        <div className='card'>
            <div className='card__img'>
                <img src={`../..//img/${props.image}.jpg`} alt={props.title}/>
            </div>
            <section className='card__content'>
                <div className='card__content--header'>
                    <p className='card__content--header--location'>{locationUpperCase}</p>
                    <a href={props.maps} target="_blank" className='card__content--header--link'>View on Google Maps</a>
                </div>
                <h2 className="card__content--title">{props.title}</h2>
                <span className="card__content--date">{props.dates.startDate} - {props.dates.endDate}</span>
                <p className="card__content--description">{props.description}</p>
            </section>
        </div>
    )
}