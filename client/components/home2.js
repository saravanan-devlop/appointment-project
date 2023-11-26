import axios from "axios";
import React from "react";

export function Home2(){
    function ddd(event){
        event.preventDefault()
        var bname = document.getElementById("bname").value
        var age = document.getElementById("age").value
        var gender = document.getElementById("gender").value
        var number = document.getElementById("number").value

        var key={
            bname:bname,
            age:age,
            gender:gender,
            number:number
        }
        if (bname == '') {
            alert("enter your name")
        }
        else if (age == '') {
            alert("enter your age")
        }
        else if (gender == '') {
            alert("enter your phone ")
        }
        else if (number == '') {
            alert("enter your roll")
        }
        else{
            axios.post("http://localhost:3300/booking", key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("data are not inserted")
                        window.location.reload()
                    }
                    else if (res.data.status === "success") {
                        alert("data are insert")
                        window.location.href = "/bcard"
                    }
                })
        }

    }
    return(
    <>
    
        <div className="home2main container-fluid vh-100 d-flex justify-content-center align-items-center">  
            <form onSubmit={ddd} className=" shadow rounded p-5 homeForm">
        <h2>BOOKING YOUR</h2>
        <h3>FREE DOCTOR CONSULTATIONS</h3>
        <h5>24/7 BOOKING</h5>
        <div>
            <input id="bname" placeholder="Name"  className="form-control"></input> <br></br>
            <input id="age" placeholder="Age"  className="form-control"></input> <br></br>
            <select id="gender"  className="form-control"> 
            <option>Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            </select> <br></br>
            <input id="number" placeholder="Number"  className="form-control"></input> <br></br>
           
        </div>
        <input value="submit" type='submit' className="btn btn-primary"></input>
        </form>
        </div>



    </>
    );
}