import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'

import '../styles/tour.css'
import tourData from '../assets/data/tours';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import Newsletter  from '../shared/Newsletter';
import { Col, Container,Row } from 'reactstrap';


function Tours() {

  const [pageCount,setPageCount] = useState(0);
  const [page,setPage] =useState(0);

  useEffect (() =>{
    const pages = Math.ceil(5/4); //later we will use backend count
    setPageCount(pages);

  }, [page])
  return (
    <>
    
     <CommonSection title={"All tours"}/>

     <section>
       <Container>
        <Row>
            <SearchBar/>
        </Row>
       </Container>
     </section>

     <section className='pt-0'>
       <Container>
        <Row>
           {tourData ?.map(tour =>(
             <Col lg='3'className='mb-4' key={tour.id}>
               <TourCard tour={tour}/>
             </Col>
           ))}

           <Col lg='12'>
               <div className='gap-3 mt-4 pagination d-flex align-items-center justify-content-center'>
                {[...Array(pageCount).keys()].map(number =>(
                  <span key={number} onClick={()=> setPage(number)}
                  className={page === number ? "active__page" : ""}
                  >
                    {number + 1}

                  </span>
                ))          
                
                }

               </div>
           </Col> 
        </Row>
       </Container>
     </section>
     <Newsletter/>
    
    </>
  )
}

export default Tours