import React from 'react';

import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
import {useState,useEffect} from 'react';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
function Layout(props) {
   
    return (
        <React.Fragment >
            
            <Header />
        
          
            <main className="py-3" >
        <Container >
                {props.children}
                </Container>
                </main>
         <Footer/>
        
        </React.Fragment>
    )
}

export default Layout