/* eslint-disable react/prop-types */
import {useState,useContext} from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/config';
import { AuthContext } from '../../context/AuthContext';

function Booking({ tour, avgRating}) {

    // eslint-disable-next-line react/prop-types
    const { price, reviews,title  } = tour;
    const navigate = useNavigate();

    const {user} =useContext(AuthContext)

    const [booking, setBooking] = useState({
        userID: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullName: "",
        phone:"",
        guestSize: 1,
        bookAt: "",
      });

      const handleChange = (e) => {
        setBooking((prev) => ({...prev, [e.target.id]: e.target.value }));
     }


      const serviceFee = 10;
      const totalAmount =
        Number(price) * Number(booking.guestSize) + serviceFee;

        //send data to server

         const handleClick = async(e) => {
             e.preventDefault();

             console.log(booking)

             try {
                if(!user || user== undefined || user== null){
                    return alert('please login')
                }
                const res = await fetch(BASE_URL+"/booking", {
                    method: "post",
                    headers: {
                      "content-type": "application/json",
                    },
                    credentials: "include",
            
                    body: JSON.stringify(booking),
                  });
            
                  const result = await res.json();
                  if (!res.ok){
                  return alert(result.message);
                  }
                 
                  navigate("/thank-you");
             } catch (error) {
                alert(error.message)
             }

          
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