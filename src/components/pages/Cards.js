import React from 'react'
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1> Check out the Epic Cars</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/Mclaren.jpg" 
                    text="Explore with the jeep" 
                    label='Adventure'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/jeep.jpg" 
                    text="Explore with the jeep" 
                    label='Adventure'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/lambo.jpg" 
                    text="Explore with the jeep" 
                    label='Adventure'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/sls.jpg" 
                    text="Explore with the jeep" 
                    label='Adventure'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/f1.jpg" 
                    text="Explore with the jeep" 
                    label='Adventure'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/ferrari.jpg" 
                    text="Explore with the jeep" 
                    label='Adventure'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/charger.jpg" 
                    text="Explore with the jeep" 
                    label='Adventure'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/sls2.jpg" 
                    text="Explore with the jeep" 
                    label='Adventure'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Cards;