import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from "../assets/images/experience.png"
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Feature-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonials/Testimonials'
import Newsletter from '../shared/Newsletter'
import Tours from './Tours'



function Home() {
  return (
    <>

      <section>

        <Container>

          <Row>
            <Col lg='6'>

              <div className='hero__content'>
                <div className="hero__subtitle d-flex align-item-center">

                  <Subtitle subtitle={"Know Before You Go"} />

                  <img src={worldImg} alt="" />



                </div>


                <h1>Traveling opens the door to Creating{""} <span className='highlight'>memories</span></h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sit consequuntur nesciunt odit omnis veritatis modi sint. Corrupti ipsam facere ut accusamus rerum hic, consequuntur aliquid ad voluptates incidunt quibusdam voluptate beatae harum laboriosam sint numquam dignissimos nihil aperiam tempora.
                </p>
              </div>

            </Col>

            <Col lg='2'>

              <div className='hero__img-box'>
                <img src={heroImg} alt="" />
              </div>

            </Col>

            <Col lg='2'>

              <div className='mt-4 hero__img-box'>
                <video src={heroVideo} alt="" controls />
              </div>

            </Col>

            <Col lg='2'>

              <div className='mt-5 hero__img-box'>
                <img src={heroImg02} alt="" />
              </div>

            </Col>

            <SearchBar />

          </Row>


        </Container>


      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'> What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>

            <ServiceList />
          </Row>
        </Container>


      </section>

      {/* ============Tour Section========== */}

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={"Explore"} />
              <h2 className='featured__tour-title'>Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

     


      {/* =============experience section ========== */}

      <section>
        <Container>
          <Row>
            <Col lg='6'>
                  
                  <div className='experience__content'>
                     <Subtitle subtitle={"Experience"}/>

                     <h2>With Our experience <br />We will serve you</h2>

                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      <br />
                      Odio tempore quod perspiciatis cum enim ullam voluptatum </p>
                  </div>

                  <div className="gap-5 counter__wrapper d-flex align-items-center">
                <div className="counter__box">
                  <span>12K+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>2K+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15+</span>
                  <h6>Years experience</h6>
                </div>
              </div>

            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} />
              </div>
            </Col>
          </Row>

        </Container>
      </section>





     

      {/* ==================gallery section========== */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>

            <Col lg="12">
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      
  

      {/* ==================testimonial section========== */}
         
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className="testimonial__title">
                What our fans say about us
              </h2>
            </Col>

            <Col lg='12'>
               <Testimonials/>
            </Col>

         
          </Row>
        </Container>
      </section>
      
     
     {/* ===========Newsletter================ */}

      <Newsletter/>


     


    </>
  )
}

export default Home