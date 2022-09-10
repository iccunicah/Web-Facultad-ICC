import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Row, Col, Container } from "react-bootstrap";
import '../../stylesheet/contacto.css';
import Form from 'react-bootstrap/Form';
import { useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import db from "../../firebase";
import CardContacto from "../CardContacto";

export function Contacto({ imagenNav }) {

    const [contactos, setContactos] = useState([]);

    const sendEmail = (e) => {
        
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID , e.target, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                e.target.reset();
            }, (error) => {
                
            });
    };

    useEffect(() => {

        const docs = (collection(db, "contacto"));
        const consulta = query(docs, orderBy("timestamp", "asc"))

        getDocs(consulta)
        .then((snapshot) => {

            setContactos(snapshot.docs.map((doc) => ({

                id: doc.id,
                data: doc.data()

            })))
        })   

    }, [])

    return (
        <>
            <div className='Contenido'>
                <img
                    className="rutaImagenBajo"
                    src={require(`../../assets/img/navegacion/${imagenNav}`)}
                    alt="Adorno Nav"
                />
            </div>

            <h1 className='text-center text-uppercase mx-auto m-5'>Contacto</h1>

            <Container>
            
                <Row xs={1} md={3} className="g-4">

                    {contactos.map(({ id, data: { Icon, titulo, correo, footer }}) => (

                        <Col key={id}>
                            <CardContacto 
                            
                                key={id}
                                Icono={Icon}
                                titulo={titulo}
                                correo={correo}
                                footer={footer}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            <hr className='linea'/>
            <h1 className='text-center text-uppercase m-5'>Ponte en contacto con nosotros:</h1>
            <p className='justify-content text-center text-uppercase'>No olvides llenar cada uno de los campos 🤠.</p>
            <Form className="text-center text-uppercase" onSubmit={sendEmail}>
                <Row className="row pt-5 mx-auto">
                    <Col className="col-8 form-group pt-2 mx-auto">
                        <Form.Label className="labelControl">Tema de mensaje</Form.Label>
                        <Form.Control className="text-center form-control-lg" type="text" name="subject" placeholder="Consulta Actividad" />
                    </Col>
                    <Col className="col-8 form-group pt-2 mx-auto">
                        <Form.Label className="labelControl">Nombre</Form.Label>
                        <Form.Control className="text-center form-control-lg" type="text" name="name" placeholder="Juan Sobalvarro" />
                    </Col>
                    <Col className="col-8 form-group pt-2 mx-auto">
                        <Form.Label className="labelControl">Correo Electrónico</Form.Label>
                        <Form.Control className="text-center form-control-lg" type="email" name="email" placeholder="ejemplo@unicah.edu" />
                    </Col>
                    <Col className="col-8 form-group pt-2 mx-auto">
                        <Form.Label className="labelControl">Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} name="message" />
                    </Col>
                    <div className="button_container">
                        <button className="btn boton" type="submit" value="Send">
                            <span>Enviar Correo</span>
                        </button>
                    </div>
                </Row>
            </Form>
        </>
    );
}

export default Contacto;