import React,{useState} from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom';
function Booking({ tour, avgRating }) {

    const { price, reviews } = tour;
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        userID: "01", //need to set in backend
        userEmail: "test@gmail.com",
        fullName: "",
        phone:"",
        guestSize: 1,
        bookAt: "",
      });

      const handleChange = (e) => {
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value }));
     }


      const serviceFee = 10;
      const totalAmount =
        Number(price) * Number(credentials.guestSize) + serviceFee;

        //send data to server

         const handleClick = (e) => {
             e.preventDefault();

            navigate("/thank-you");

            }
    

  
    return (
        <div className='booking'>
            <div className="booking__top d-flex align-items-center justify-content-between">

                <h3>${price} <span>/per person</span>
                </h3>

                <span className="tour_rating d-flex align-items-center">
                    <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating} (
                    {reviews?.length} )
                </span>

            </div>

            {/* ===============form================ */}

            <div className="booking__form">
                <h5>Information</h5>
                <Form className='booking__info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder='Full Name ' id='fullName' required onChange={handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <input type="number" placeholder='phone' id='phone' required onChange={handleChange} />
                    </FormGroup>

                    <FormGroup className='gap-3 d-flex align-items-center'>
                        <input type="date" placeholder='date' id='BookAt' required onChange={handleChange} />

                        <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>

            {/* ====================== Booking bottom============== */}
            <div className="booking__bottom">
                <ListGroup>

                    <ListGroupItem className="px-0 border-0">
                        <h5 className="gap-1 d-flex align-items-center">
                            ${price} <i className="ri-close-fill"></i> 1 person{" "}
                        </h5>
                        <span>${price}</span>
                    </ListGroupItem>

                    <ListGroupItem className="px-0 border-0">
                        <h5>Service charges </h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>

                    <ListGroupItem className="px-0 border-0">
                        <h5>Total</h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                    
                </ListGroup>

                <Button className='mt-4 btn primary__btn w-100' onClick={handleClick}>Book Now</Button>
            </div>
        </div>
    )
}

export default Booking