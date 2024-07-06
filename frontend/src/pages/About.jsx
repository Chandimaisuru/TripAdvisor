import React from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import "../styles/about.css";
import Team from "../components/Team/Team";

const About = () => {
  return (
    <>
      {/* About the company and team section start */}
      <section className="AboutUs">
        <Container>
          <Row>
            <Col lg="12">
              <div className="content">
                <h1>About Us</h1>
                <p>
                Welcome to TripAdvisor, your gateway to unforgettable adventures and seamless travel experiences. We are a passionate team of travel enthusiasts committed to helping you explore the world with ease, confidence, and joy.Founded by avid travelers, TripAdvisor was born out of a desire to make travel accessible and enjoyable for everyone. We understand the thrill of discovering new destinations and the importance of hassle-free planning. That’s why we’ve created a platform that brings together the best travel options, expert insights, and unbeatable deals all in one place.
                </p>
              </div>
              <div className="slider">
                <h2>Our team</h2>
                <Team />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* About the company and team section end */}

      {/* Contact us section start */}
      <section className="ContactUs">
        <Container>
          <Row>
            <h1>
              <i className="ri-edit-2-fill"></i>Let's start a conversation
            </h1>
            <Col lg="6">
              <div className="ContactUs_content">
              <h2>Ask how we can help you ...</h2>
                <p>
                Have questions or need assistance with your travel plans? Our team at Sanchare is here to help! Whether you need recommendations, booking assistance, or detailed information about destinations in Sri Lanka, just ask us. We're committed to making your travel experience smooth and enjoyable. Reach out and discover how we can assist you today!
                </p>

                <h2 className="offline">Offline Location</h2>
                <p>
                  <br /> No. 45,
                  <br /> Galle Road,
                  <br /> Colombo,
                  <br /> Sri Lanka.
                </p>


                <h2>Contact Information</h2>
                <p>Email: tripadvisor@gmail.com</p>
                <p>Phone: +94 1456790</p>

                <h2>Privacy Information</h2>
                <p>
                At TrpAdvisor, we prioritize your privacy. We protect your personal information and ensure a secure browsing experience. Learn more about our data practices in our privacy policy.
                </p>
              </div>
            </Col>
            {/* Contact us section end */}

            {/* Contact form start */}
            <Col lg="6">
              <div className="ContactUs_form">
                <Form className="ContactUs_Info">
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Fist Name"
                      id="firstName"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Last Name"
                      id="lastName"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="message">
                    <input
                      type="message"
                      placeholder="Any question? Notes?"
                      id="message"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="country">
                    <select className="countryList">
                      <option value="Country">Country</option>
                    </select>
                  </FormGroup>
                  <Button className="mt-4 mb-1 btn primary__btn w-100" >Send</Button>
                </Form>
              </div>
            </Col>

            {/* Contact form end */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;