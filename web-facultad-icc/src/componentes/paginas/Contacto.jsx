import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import CardContacto from "../CardContacto";
import { Row, Col, Container, Button } from "react-bootstrap";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import db from "../../firebase";
import '../../stylesheet/contacto.css';
import * as yup from 'yup';

export function Contacto({ imagenNav }) {

    const [contactos, setContactos] = useState([]);
    const [status, setStatus] = useState(false);

    // schema del formulario
    const schema = yup.object({

        subject: yup.string()
        .min(5, "Este campo debe contener al menos 5 caracteres.")
        .required("Este campo es obligatorio."),

        name: yup.string()
        .matches(/^[a-zA-Z\s]*$/, 'En este campo solamente se pueden incluir letras.')
        .min(5, "Nombre debe contener al menos 5 caracteres.")
        .required('Este campo es obligatorio.'),

        email: yup.string()
        .email("Formato incorrecto del correo electrónico.")
        .required('Este campo es obligatorio.'),

        message: yup.string()
        .min(5, "Mensaje debe contener al menos 5 caracteres.")
        .required('Este campo es obligatorio.'),
        
    }).required();

    // funciones de react-hook-form
    const { register, handleSubmit, reset, formState: { errors} } = useForm({
        resolver: yupResolver(schema)
    })

    // funcion para enviar el correo
    const sendEmail = (data) => {

        const templateParams = {

            subject: data.subject,
            name: data.name,
            email: data.email,
            message: data.message
        }
        
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID , templateParams, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            
            if(result.status === 200){
              
                setStatus(true);
                reset(); // para limpiar todos los campos del formulario, una vez que se haya enviado el correo
            } 

        }, (error) => {
            
        });
    };

    // este trae los contactos para mostrarlos en los cards
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

    // este es nada más para hacer desaparecer el mensaje cuando se envía un mensaje al correo
    useEffect(() => {

        if(status){

            setTimeout(() =>{
                setStatus(false)
            }, 6000)
        }

        return () => {
            clearTimeout()
        }

    }, [status])

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

            {status && (
                <p className="text-center fw-bold">Gracias por contactarte con nosotros!</p>
            )}

            <Form className="text-center text-uppercase" onSubmit={handleSubmit(sendEmail)}>
                <Row className="row pt-3 mx-auto">
                    <Col className="col-8 form-group pt-2 mx-auto">
                        <Form.Label className="labelControl">Tema de mensaje</Form.Label>
                        <Form.Control 
                            className="text-center form-control-lg" 
                            type="text" name="subject" 
                            placeholder="Consulta Actividad"
                            {...register("subject")} />

                        <p>{errors.subject?.message}</p>    
                    </Col>
                     <Col className="col-8 form-group pt-2 mx-auto">
                        <Form.Label className="labelControl">Nombre</Form.Label>
                        <Form.Control 
                            className="text-center form-control-lg" 
                            type="text" name="name" 
                            placeholder="Juan Sobalvarro"
                            {...register("name")} />

                        <p>{errors.name?.message}</p>    
                    </Col>
                    
                    <Col className="col-8 form-group pt-2 mx-auto">
                        <Form.Label className="labelControl">Correo Electrónico</Form.Label>
                        <Form.Control 
                            className="text-center form-control-lg" 
                            type="text" name="email" 
                            placeholder="ejemplo@unicah.edu" 
                            {...register("email")} />

                        <p>{errors.email?.message}</p>    
                    </Col>
                    
                    <Col className="col-8 form-group pt-2 mx-auto">
                        <Form.Label className="labelControl">Mensaje</Form.Label>
                        <Form.Control 
                            as="textarea" rows={3} 
                            name="message"
                            {...register("message")} />

                        <p>{errors.message?.message}</p>    
                    </Col>

                    <div className="button_container mb-4 p-3">
                        <Button className="btn boton" variant="dark" type="submit" value="Send">
                            <span>Enviar Correo</span>
                        </Button>
                    </div>
                </Row>
            </Form>
        </>
    );
}

export default Contacto;