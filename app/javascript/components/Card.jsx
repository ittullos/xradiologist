import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import LogoWhite from '../../assets/images/Xradiologist-logos_white.png'



function CardComponent({props}) {
  return (
    <Card className="card-holder"   
      style={{
        padding: 16,
        minHeight: 30,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        maxWidth: 400
      }
    }>
      <Card.Img variant="top" src={props.img} style={{             
                minWidth: 300,
                maxWidth: 300,
                maxHeight: 200,
                minHeight: 200
                }}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Card>
  )
}

export default CardComponent