import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import db from '../../firebase'
import { onSnapshot, collection, orderBy, query } from 'firebase/firestore';
import CardActividad from './CardActividad';

function ImagenesInicio() {

    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {

    const referencia = collection(db, "imagenesInicio")
    const Query = query(referencia, orderBy("timestamp", "desc"))

    onSnapshot(Query, (snapshot) => {

        setImagenes(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
        })))
    })
  }, [])

    return (
        <div className="ImagenesInicio" data-aos="fade-up">
            <Row xs={1} md={3} className="d-flex g-4">
                
                {imagenes.map(({ id, data: { img } }) => (
                    <Col>
                        <CardActividad 
                        
                            key={id}
                            img={img}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ImagenesInicio;