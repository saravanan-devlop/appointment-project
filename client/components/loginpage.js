import axios from "axios";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export function Login() {
    function dashboard(event) {
        event.preventDefault()
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
        var key = {
            username: username,
            password: password
        }
        if (username == "") {
            alert("PlZ ENTER THE USERNAME")
        }
        else if (password == "") {
            alert("Plz ENTER THE password")
        }
        else {
            axios.post("http://localhost:3300/userlogin", key)
                .then((res) => {
                    if (res.data.status === "empty_set") {
                        alert("plz enter username or register a new one")
                    }

                    else if (res.data.status === "success") {
                        var id = res.data.id
                        var roll = res.data.roll
                        alert("successful logged in")

                        if (roll === 'client') {
                            window.location.href = `/clientdashboard/${id}`
                        }
                        else if (roll === 'doctor') {
                            window.location.href = `/doctorboard/${id}`
                        }
                        else if(roll==='admin'){
                            window.location.href=`/admin`
                        }
                    }
                    else if (res.data.status === "invalid_user") {
                        alert("plz check your passsword")
                    }
                    else if (res.data.status === "error") {
                        alert("all the data are invalid")
                    }
                    else {
                        alert("plz register your details first")
                    }

                })
        }
    }

    return (
        <>
            <div className="login-page container-fluid vh-100 justify-content-center align-items-center"> 
                <form className="mainForm shadow rounded text-center"  onSubmit={dashboard}>

                    <h3>LOGIN PAGE</h3>
                    <input type="email" id="username" placeholder='Enter Your Email' className="form-control" /> <br /> <br />
                    <input type="password" id="password" placeholder='Password' className="form-control" /> <br /> <br />
                    <input type='submit' value='submit' className='btn btn-primary ' />
                </form>
            </div>
        </>
    );
}