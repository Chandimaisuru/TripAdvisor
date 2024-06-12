
import React, { useRef, useState } from 'react'
import "../styles/tour-details.css"
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
import avatar from "../assets/images/avatar.jpg"
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'

function TourDetails() {
  const {id} = useParams()

  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)


  // this is an static later we will call our Api------------
  const tour = tourData.find(tour => tour.id === id)

  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour 

  const { totalRating, avgRating } = calculateAvgRating(reviews)

  //-------------format data---------------
  const options = { day: "numeric", month: "long", year: "numeric" };

  //----------submit request----------------

  const submitHandler = e => {
     e.preventDefault();
     const reviewText = reviewMsgRef.current.value;
     alert(`${reviewText}, ${tourRating}`);
     
  }
  return (
    <>
      <section>

        <Container>
          <Row>
            <Col lg='8'>
              <div className='tour__content'>
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className='gap-4 d-flex align-items-center'>

                    <span className='gap-1 tour__rating d-flex align-items-center'>
                      <i className="ri-star-s-fill" style={{ "color": "var(--secondary-color)" }}></i>

                      {calculateAvgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews?.length})</span>

                      )}

                    </span>

                    <span>
                      <i className='ri-map-pin-fill'></i> {address}
                    </span>

                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <i className="ri-map-pin-fill"></i> {city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-fill"></i> ${" "}
                      {price} / per person
                    </span>
                    <span>
                      <i className="ri-pin-distance-fill"></i> {distance} km
                    </span>
                    <span>
                      <i className="ri-group-2-fill"></i> {maxGroupSize}{" "}
                      people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* ================tour revies section */}

                <div className="mt-4 tour__reviews">
                  <h4>Reviews({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className='gap-3 mb-4 d-flex align-items-center rating__group'>


                      <span onClick={() => setTourRating(1)}>  1 <i className="ri-star-s-fill"></i></span>



                      <span onClick={() => setTourRating(2)}>  2 <i className="ri-star-s-fill"></i></span>

                      <span onClick={() => setTourRating(3)}> 3 <i className="ri-star-s-fill"></i></span>

                      <span onClick={() => setTourRating(4)}> 4 <i className="ri-star-s-fill"></i></span>

                      <span onClick={() => setTourRating(5)}> 5 <i className="ri-star-s-fill"></i></span>

                    </div>

                    <div className="review__input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Share your thoughts"
                        required
                      />
                      <button
                        className="text-white btn primary__btn"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__review">
                      {reviews?.map((reviews) => (
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{reviews.username}</h5>
                                <p>
                                  {new Date(reviews.createdAt).toLocaleDateString(
                                    "en-US",
                                    options
                                  )}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {reviews.rating} <i className="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>{reviews.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                    
                </div>
              </div>
            </Col>

            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating}/>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter/>


    </>
  )
}

export default TourDetails