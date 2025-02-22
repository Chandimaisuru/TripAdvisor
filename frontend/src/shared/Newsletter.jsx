
import './newsletter.css'
import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

function Newsletter() {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                   <div className='newsletter__content'>
                   <h2>Subscribe now to get useful traveling information.</h2>

                   <div className='newsletter__input'>
                    <input type="email" placeholder='Enter your email' />
                    <button className='newsletter__btn btn'>Subscribe</button>

                   </div>
                        
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sint maxime deserunt eum reiciendis dignissimos!
                    </p>
                   </div>
                </Col>

                <Col lg='6'>
                     <div className="newsletter__img">
                       <img src={maleTourist} alt="" /> 
                     </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter