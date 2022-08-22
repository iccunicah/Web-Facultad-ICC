import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const actividades = [
    
    { actividad: "Toma de posesión", img: "https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi aspernatur alias iusto natus quos!" },
    { actividad: "Entrega de diplomados", img: "https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi aspernatur alias iusto natus quos!" },
    { actividad: "Otra por ahí", img: "https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi aspernatur alias iusto natus quos!" },
    { actividad: "Otra por ahí X2", img: "https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi aspernatur alias iusto natus quos!" },
    { actividad: "Otra por ahí X3", img: "https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi aspernatur alias iusto natus quos!" },
    { actividad: "Otra por ahí X4", img: "https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi aspernatur alias iusto natus quos!" },

]

function Actividades() {
  
  return (
    <Container fluid="md">
        <Row xs={1} md={3} className="g-4 mt-4 mb-4">
            {actividades.map((item) => (
                <Col>
                    <Card style={{
                        maxWidth: '366px',
                        minHeight: '241px',
                        backgroundColor: '#202136',
                        color: '#F7F8FC'
                    }}>
                        <Card.Img variant="top" src={item.img} />

                        <Card.Body>
                            <Card.Title style={{
                                color: '#DCDFEE'
                            }}>{item.actividad}</Card.Title>
                            <Card.Text>
                                {item.texto}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            
        </Row>
    </Container>    
  )
}

export default Actividades