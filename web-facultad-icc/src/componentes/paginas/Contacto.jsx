import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Row, Col } from "react-bootstrap";
import '../../stylesheet/contacto.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

//Iconos
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AddCardSharpIcon from '@mui/icons-material/AddCardSharp';
import Diversity1SharpIcon from '@mui/icons-material/Diversity1Sharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import SavingsSharpIcon from '@mui/icons-material/SavingsSharp';
import AssignmentIndSharpIcon from '@mui/icons-material/AssignmentIndSharp';
import PublicIcon from '@mui/icons-material/Public';





export function Contacto({ imagenNav }) {
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

            

            <h1 className='text-center text-uppercase mx-auto m-5'>Contacto</h1>
            
            
            <Row xs={1} md={3} className="g-4">

                <Col>
                    <Card className="card-contacto text-center">
                        <Card.Body>
                            <SchoolSharpIcon className="colorIcon" fontSize="large" />
                            <Card.Title>Decanatura</Card.Title>
                            <Card.Text>
                                computacionscj@unicah.edu
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="card-contacto text-center"  >
                        <Card.Body>
                            <ContactMailIcon fontSize="large" />
                            <Card.Title>Asociaicon Estudiantil</Card.Title>
                            <Card.Text>
                                asociaciondeingenieriaicc@gmail.com
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col>
                    <Card className="card-contacto text-center">
                        <Card.Body>
                            <SavingsSharpIcon fontSize="large" />
                            <Card.Title>Tesoreria</Card.Title>
                            <Card.Text>
                                asisttesoreriascj@unicah.edu
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col>
                    <Card className="card-contacto text-center">
                        <Card.Body>
                            <AssignmentIndSharpIcon fontSize="large" />
                            <Card.Title>Registro</Card.Title>
                            <Card.Text>
                                registroscj@unicah.edu
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col><Col>

                    <Card className="card-contacto text-center">
                        <Card.Body>
                            <LocalLibraryIcon fontSize="large"  />
                            <Card.Title>Bibloteca</Card.Title>
                            <Card.Text>
                                biblotecascj@unicah.edu
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col>
                    <Card className="card-contacto text-center">
                        <Card.Body>
                        <AddCardSharpIcon fontSize="large" />
                            <Card.Title>Contabilidad</Card.Title>
                            <Card.Text>
                                fposadas@unicah.edu
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col>
                    <Card className="card-contacto text-center">
                        <Card.Body>
                            <Diversity1SharpIcon fontSize="large" />
                            <Card.Title>Bienestar Universitario, Ceneval y Becas</Card.Title>

                            <Card.Text>bienestarscj@unicah.edu</Card.Text>
                            <Card.Text>asistbienestarscj@unicah.edu</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="card-contacto text-center">
                        <Card.Body>
                            <CorporateFareIcon fontSize="large" />
                            <Card.Title>Admisiones y Recepcion SCJ</Card.Title>
                            <Card.Text>admisionesscj@unicah.edu</Card.Text>
                            <Card.Text>recepcionscj@unicah.edu</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="card-contacto text-center">
                        <Card.Body>
                        <PublicIcon fontSize="large" />
                            <Card.Title>Redes Sociales</Card.Title>
                            <Card.Text>@iccunicah</Card.Text>
                            <Card.Text>Facultad de Ingenieria en Ciencias de la Computación Unicah</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <hr className='linea'/>
            <h1 className='text-center text-uppercase m-5'>Ponte en contacto con nosotros:</h1>
            <p className='justify-content text-center text-uppercase'>No olvides llenar cada uno de los campos.</p>
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