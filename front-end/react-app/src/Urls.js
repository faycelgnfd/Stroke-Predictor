import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Layout from './components/Layout';
import {CookiesProvider} from 'react-cookie';
function Urls(props) {
   
    return (
        <div >
               <CookiesProvider>
            <BrowserRouter>
            <Layout>   
            <Routes>
         
                  
                    <Route exact path="/" element={<Home {...props}/>}/>
                
            </Routes>
            </Layout>
            </BrowserRouter>
            </CookiesProvider>
        </div>
    )
};
export default Urls;