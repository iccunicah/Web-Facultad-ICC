import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Row, Col } from "react-bootstrap";
import '../../stylesheet/contacto.css';
import Form from 'react-bootstrap/Form';

export function Contacto({imagenNav})
{
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3jl48qm', 'template_2tlxwll', e.target, 'm-_ulqYjjv5In9T_B')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <>
            <div className='Contenido'>
                <img
                    className="rutaImagenBajo"
                    src={require(`../../assets/img/navegacion/${imagenNav}`)}
                    alt="Adorno Nav"
                />
            </div>
            <h1 className='text-center text-uppercase'>Ponte en contacto con nosotros:</h1>
            <p className='justify-content text-center text-uppercase'>No olvides llenar cada uno de los campos.🤠</p>
            <Form className="text-center text-uppercase" onSubmit={sendEmail}>
                <Row className="row pt-5 mx-auto">
                    <Col className="col-8 form-group pt-2 mx-auto">
                        <Form.Label className="labelControl">Tema de mensaje</Form.Label>
                        <Form.Control className="text-center form-control-lg" type="text" name="subject" placeholder="Consulta Actividad"/>
                    </Col>
                    <Col className="col-8 form-group pt-2 mx-auto">
                        <Form.Label className="labelControl">Nombre</Form.Label>
                        <Form.Control className="text-center form-control-lg" type="text" name="name" placeholder="Juan Sobalvarro"/>
                    </Col>
                    <Col className="col-8 form-group pt-2 mx-auto">
                        <Form.Label className="labelControl">Correo Electrónico</Form.Label>
                        <Form.Control className="text-center form-control-lg" type="email" name="email" placeholder="ejemplo@unicah.edu"/>
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