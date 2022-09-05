import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CardVideos from './CardVideos';
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../../firebase';

function GridRecursos({ videoId, titulo }) {

  const [videos, setVideos] = useState([]);

  useEffect(() => {

    if(videoId){
      
      const referencia = collection(db, "recursos", videoId, "videos")

      onSnapshot(referencia, (snapshot) => {

        setVideos(snapshot.docs.map((doc) => ({

          id: doc.id,
          data: doc.data()

        })))

      })
    }
  
  }, [videoId])

  return (
    <Container className='mt-5 mb-4'>
      <h1>{titulo}</h1>
      <Row xs={1} md={3} className="g-4 mt-4 mb-4">
        
        {videos?.map(({ id, data: { tipo, enlace } }) => (
          
          <Col>
            <CardVideos 
            
              key={id}
              tipo={tipo}
              enlace={enlace}
            />
          </Col>
        ))}

      </Row>
    </Container>
  )
}

export default GridRecursos
