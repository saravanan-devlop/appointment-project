import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export function Home(){
    return(
    <>
    <div className='container-fluid vh-100 d-flex flex-column justify-content-center align-items-center home-main'>
    <div className=''>
    <h1 className=''>MedCare Health Solution</h1> <br></br>
    <h3>Making Health</h3> 
    <h3>Care Better Together</h3>
    <Link to='/appoinment'className='btn rounded bg-primary mt-2 '>REGISTER</Link>
    <Link to='/loginpage'className='btn rounded bg-primary mt-2 ms-2'>LOGIN</Link>
    </div>
    </div>


    
    </>);
}