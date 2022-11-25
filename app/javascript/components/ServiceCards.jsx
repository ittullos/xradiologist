import React from 'react'
import Card from '../components/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { serviceCardData } from "../data/service_cards"


function ServiceCards() {
  return (
    <Row gutter={40} className="px-5 mx-5">
    {(serviceCardData).map((cardData, key) => 
      <Col className="text-center center-card"
        xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }}
        lg={{ span: 6 }} xl={{ span: 6 }}>
          <Card props={cardData} key={key}/>
      </Col>
    )}
  </Row>
  )
}



export default ServiceCards
