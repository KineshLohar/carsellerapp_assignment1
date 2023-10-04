import React, { useState } from 'react';
import './carcard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faGasPump, faGauge, faGear, faHeart  } from '@fortawesome/free-solid-svg-icons';

const CarCard = ({car}) => {

    const [activeColor, setActiveColor] = useState(false);


    //like button toggle function
    const onLike = () => {
        setActiveColor(!activeColor);
    }
    
  return (
    <div>
        <div className="carCard">
            <img src={car['image url']} alt="car 1" className='carImg' />
            <div className='carHeading'>
                <h3>{car['car name']}</h3>
                <p>{car['model year']}</p>
            </div>
            <div className='carFeatures'>
                <p><FontAwesomeIcon icon={faUserGroup} style={{color:"#58a4ef"}}/> {car['seating capacity']} people</p>
                <p><FontAwesomeIcon icon={faGasPump} style={{color:"#58a4ef"}}/> {car['fuel type']}</p>
                <p> <FontAwesomeIcon icon={faGauge} style={{color:"#58a4ef"}}/>{car['mileage']}</p>
                <p><FontAwesomeIcon icon={faGear} style={{color:"#58a4ef"}}/> {car['transmission']}</p>
            </div>
            <hr className='seperaterHr'/>
            <div className='carFooter'>
                <p className='carPrice'>{car['price']} <span>/month</span></p>
                <div>
                    <p><FontAwesomeIcon icon={faHeart} style={{color: activeColor ? "Red" : "black"}} onClick={() => onLike()}/></p>
                    <button>Rent now</button>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default CarCard