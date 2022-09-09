import React from 'react'
import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';

function CardVideos({ tipo, enlace }) {
  return (
    <Card>
        <ReactPlayer
            url={enlace}
            controls={true}
            width={"100%"}
            height={"100%"}
        />
        <Card.Body>
            <Card.Title>{tipo}</Card.Title>
        </Card.Body>
    </Card>
  )
}

export default CardVideos
