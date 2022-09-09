import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import db from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import GridRecursos from '../GridRecursos';

export function Recursos({imagenNav}){

    const [recursos, setRecursos] = useState([]);

    useEffect(() => {

        const referencia = collection(db, "recursos");
        
        onSnapshot(referencia, (snapshot) => {

            setRecursos(snapshot.docs.map((doc) => ({

                id: doc.id,
                data: doc.data()
            })))
        })

    }, [])

    return (
        <div className='Contenido'>
            <img
                className="rutaImagenBajo"
                src={require(`../../assets/img/navegacion/${imagenNav}`)}
                alt="Adorno Nav"
            />
            
            <Container>
                
                {recursos?.map(({ id, data: { titulo }}) => (
                    
                    <GridRecursos 
                    
                        key={id}
                        videoId={id}
                        titulo={titulo}
                    />
                ))}

            </Container>
        </div>
    );
}

export default Recursos;