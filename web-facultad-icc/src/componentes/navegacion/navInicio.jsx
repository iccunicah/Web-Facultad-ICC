import React from "react";
import {Nav, Navbar, Row, Col} from 'react-bootstrap';
import { Instagram, Facebook, Youtube} from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import '../../stylesheet/navInicio.css';

export default function NavInicio({rutaImagen, rutaImagenToggle})
{
	return(
		<Navbar bg="negro" variant="dark" sticky="top" expand="lg" collapseOnSelect>
			<Navbar.Brand>
				<NavLink to={'/'}>
					<img
						className="px-4 Logo"
						src={require(`../../assets/img/navegacion/${rutaImagen}`)}
						height="100px"
						alt="Logo de la Facultad"
					/>
				</NavLink>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav">
					<img className="imgToggle" src={require(`../../assets/img/navegacion/${rutaImagenToggle}`)} alt="Icono de Toggle"/>
			</Navbar.Toggle>
			<Navbar.Collapse className="flex-row-reverse text-center">
				<Nav>
					<NavLink to='/' className="opcMenu">INICIO</NavLink>
					<NavLink to='/QuienesSomos' className="opcMenu">¿QUIENES SOMOS?</NavLink>
					<NavLink to='/Actividades' className="opcMenu">ACTIVIDADES</NavLink>
					<NavLink to='/Recursos' className="opcMenu">RECURSOS</NavLink>
					<NavLink to='/Contacto' className="opcMenu">CONTACTO</NavLink>
				</Nav>
			</Navbar.Collapse>
			<Navbar.Collapse className="justify-content-end text-center">
				<Nav className="px-4">
					<Row>
						<Col>
							<Nav.Link href="https://www.instagram.com/iccunicah/">
								<Instagram size={25} className="redes" />
							</Nav.Link>
						</Col>
						<Col>
							<Nav.Link href="https://www.facebook.com/iccunicah">
								<Facebook size={25} className="redes" />
							</Nav.Link>
						</Col>
						<Col>
							<Nav.Link href="https://www.youtube.com/channel/UC26gYslgbtHkUvptybeF8YA">
								<Youtube size={25} className="redes" />
							</Nav.Link>
						</Col>
					</Row>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}