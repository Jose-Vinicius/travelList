import React from 'react'

import NavBar from './NavBar'
import Card from './Card'

import Data from '../../data/dados';

const places = Data.map((place) => {
    return(
       <Card 
            key={place.id}
            {...place}
       />

    )
})

export default function Main(Data){
    return(
        <>
            <NavBar />
            <div className="card__container">
                {places}
            </div>
        </>
    )
}