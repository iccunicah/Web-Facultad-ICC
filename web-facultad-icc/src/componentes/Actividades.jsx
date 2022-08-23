import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import db from '../firebase'
import { onSnapshot, collection, orderBy, query } from 'firebase/firestore';
import CardActividad from './CardActividad'

function Actividades() {

  const [actividades, setActividades] = useState([]);

  useEffect(() => {

    const referencia = collection(db, "actividades")
    const Query = query(referencia, orderBy("timestamp", "asc"))

    onSnapshot(Query, (snapshot) => {

        setActividades(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
        })))
    })
  }, [])
  
  return (
    <Container fluid="md">
        <Row xs={1} md={3} className="g-4 mt-4 mb-4">            

            {actividades.map(({ id, data: { actividad, img, texto  } }) => (

                <Col>
                    <CardActividad
                    
                        key={id}
                        actividad={actividad}
                        img={img}
                        texto={texto}
                    />
                </Col>

            ))}

        </Row>
    </Container>
  )
}

export default Actividades