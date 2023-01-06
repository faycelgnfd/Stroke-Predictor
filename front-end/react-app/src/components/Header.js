import React from "react";
import {  Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, NavDropdown, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeartbeat} from '@fortawesome/fontawesome-free-solid'

 function Header() {

        return (
            <div>
           <Navbar bg="dark" variant="dark">

    <div className="container">
          <Link className="navbar-brand" to={"/"}>StrokePredict
          <FontAwesomeIcon icon={faHeartbeat} />
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          
          </div>
        </div>
  
  </Navbar>
            </div>
        );
    
}

export default Header