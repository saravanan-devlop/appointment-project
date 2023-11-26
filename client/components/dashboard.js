import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Clientdashboard() {
    const [fetchdata, setFetchdata] = useState([])
    useEffect(() => {
        fetch("http://localhost:3300/getdoctordata")
            .then(res => res.json())
            .then(data => setFetchdata(data))
    })
    return (
        <>
         <div className="row ms-5">
        <h1 className="text-center">DOCTOR</h1>
        {
            fetchdata.map((value,index)=>(
                <>
               
                <div class="card text-center mt-5 me-5 shadow" style={{"width":"25rem"}}>
                <div class="card-body">
                    <h5 class="card-title text-black">{value.name}</h5>
                    <p class="card-text">{value.email}</p>
                    <p class="card-text">{value.phone}</p>
                    <Link to={`/clientappoinment/${value.id}`} class="btn btn-success">APPOINMENT</Link>
                </div>
            </div>
              
                </>
            ))
        }
          </div>
        </>
    );
}