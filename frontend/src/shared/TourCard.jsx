import React from 'react'
import './tour-card.css'
import { Card,CardBody } from 'reactstrap';
import {Link} from 'react-router-dom';
import calculateAvgRating from "../utils/avgRating"; 

function TourCard({tour}) {

const {id,title, photo, price, featured, reviews, city  } = tour;

const {totalRating, avgRating} = calculateAvgRating(reviews);

  return (
     <div className='tour__card'>

         <Card>
            <div className='tour__img'>
                <img src={photo} alt="tour-img" />
               {featured && <span>Featured</span>}

            </div>
            

            <CardBody>

             <div className='card__top d-flex align-items-center justify-content-between'>
                
                <span className='gap-1 tour__location d-flex align-items-center'>
                <i className="ri-map-pin-line"></i>
                {city}
                </span>

                <span className='gap-1 tour__rating d-flex align-items-center'>
                <i className="ri-star-s-fill"></i>

            {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews.length})</span>
              )}
                
                </span>
            </div>

            <h5 className="tour__title">
            <Link to={`/tours/${id}`}>{title}</Link>
            </h5>

            <div className="mt-3 card__bottom d-flex align-items-center justify-content-between">
            <h5>
              ${price} <span> /per person</span>
            </h5>

            <button className="booking__btn">
              <Link to={`/tours/${id}`}>Book Now</Link>
            </button>
          </div>

         </CardBody>

         </Card>

        
     </div>
  )
}

export default TourCard