import React from "react";
import Card from "react-bootstrap/Card";
import { Timestamp } from "firebase/firestore";

function CardActividad({ actividad, img, texto, inscripcion, timestamp }) {
  return (
    <Card
      style={{
        maxWidth: "366px",
        backgroundColor: "#202136",
        color: "#F7F8FC",
      }}>
      <Card.Img
        style={{
          /* minHeight: '342px', */
          minHeight: "15vw",
          maxHeight: "342px",
          objectFit: "cover",
        }}
        variant="top"
        src={img}
      />

      {actividad && texto && (
        <Card.Body
          style={{
            color: "#DCDFEE",
          }}>
          <Card.Title className="fs-4">{actividad}</Card.Title>

          <Card.Text>{texto}</Card.Text>

          {inscripcion && (
            <Card.Body>
              <Card.Link
                href={inscripcion}
                target="_blank"
                className="text-info fs-5">
                ¡Inscríbete!
              </Card.Link>

              <Card.Text>
                Fecha {""}
                <span>
                  {new Timestamp(timestamp.seconds, timestamp.nanoseconds)
                    .toDate()
                    .toDateString()}
                </span>
              </Card.Text>
            </Card.Body>
          )}
        </Card.Body>
      )}
    </Card>
  );
}

export default CardActividad;
