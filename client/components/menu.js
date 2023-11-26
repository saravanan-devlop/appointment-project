import React from 'react';
import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-black  ">
                <div class="container-fluid ">
                    <a class="navbar-brand text-white" href="/">MedCare Health⚕️</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <Link to='/' className='navHead'><a className="nav-link text-white ">Home</a></Link>
                            <Link to='/appoinment' className='navHead'><a className="nav-link text-white">Appoinment</a></Link>
                            <Link to='/loginpage' className='navHead'><a className="nav-link text-white">Login</a></Link>
                            {/* <Link to='/clientdashboard' className='navHead'><a className="nav-link text-white">CLIENT-DB</a></Link>
                            <Link to='/doctorboard' className='navHead'><a className="nav-link text-white">DOCTOR-DB</a></Link>
                            <Link to='/clientappoinment' className='navHead'><a className="nav-link text-white">Clientappoinment</a></Link> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}