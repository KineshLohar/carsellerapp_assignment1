import React from 'react'
import CarCard from '../CarCard/CarCard.jsx';
import './carslist.css';


const CarsList = ({carsData, searchTerm}) => {

  return (
    <section id="carslist">
        {
            //filtering the data according to search function and then mapping the result
            carsData.filter((val) => {
              if(searchTerm === ""){
                return val;
              } else if(val['car name'].toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
            }).map((eachCar,index) => {               //maping the results and returning card component
                return(
                    <CarCard car={eachCar} key={index}/>
                )
                
            })
        }
    </section>
  )
}

export default CarsList;