import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ImagenesInicio() {
    return (
        <div className="ImagenesInicio" data-aos="fade-up">
            <Row xs={1} md={3} className="d-flex g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                        <Card className="border-0">
                            <Card.Img className="rounded" variant="top" src="http://drive.google.com/uc?export=view&id=1250QFzzoeQnVeCwlkSEY7aJcbmzJRJEl" />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ImagenesInicio;