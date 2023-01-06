import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        
        <footer className=' -bottom mb-0 bg-dark text-white' >
           

        <Container  bg="dark" variant="dark" expand="lg">
            
            <Row bg="dark">
          <Col className="text-center py-3" bg="dark">
            Copyright &copy; S.A & G.F
            </Col>
            </Row>
           </Container>
        
   
    </footer>
          
    )
}

export default Footer