import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'
import wetherImg from'../assets/images/weather.png'
import guidImg from'../assets/images/guide.png'
import customizationImg from'../assets/images/customization.png'


const servicesData =[
    {
        imgUrl:wetherImg ,
        title: "Calculate Weather",
        desc: "Calculate the weather around your places of visit",
      },
      {
        imgUrl:guidImg,
        title: "Best Tour Guide",
        desc: "High experience and realiable tour guide services",
      },
      {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Customize your tours according to your needs and budget",
      },
]


function ServiceList() {
  return (
    <>
       {servicesData.map((item,index) =>(
            <Col lg='3' key={index}>
                <ServiceCard item = {item}/>
            </Col>
        ))}
       
    </>
  );
};

export default ServiceList