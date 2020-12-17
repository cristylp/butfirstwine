import React from 'react'
import { Col, Card } from 'react-bootstrap'




const Favorites = ({ name, varietal, imageUrl }) => {

    return (

        <>
        <h4>{name}</h4>
            <p>{varietal}</p>
            </>

        // <>
        //     <Col md={{ span: 8, offset: 2 }}>
        //         <Card className='favorite-card' style={{ width: '100%' }}>
        //             <Card.Body>
        //                 <Card.Title>{wine.name}</Card.Title>
        //                 <hr />
        //             </Card.Body>
        //         </Card>
        //     </Col>
        // </>

    )

}




export default Favorites