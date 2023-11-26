import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
export function Appoinment() {
    function patientlogin(event) {
        event.preventDefault()
        var rname = document.getElementById("rname").value
        var age = document.getElementById("age").value
        var phone = document.getElementById("phone").value
        var email = document.getElementById("email").value
        var roll = document.getElementById("roll").value
        var password = document.getElementById("password").value

        var key = {
            rname: rname,
            age: age,
            phone: phone,
            email: email,
            roll: roll,
            password: password,
        }
        if (rname == '') {
            alert("enter your name")
        }
        else if (age == '') {
            alert("enter your age")
        }
        else if (phone == '') {
            alert("enter your phone number")
        }
        else if (roll == '') {
            alert("enter your roll")
        }

        else if (password == '') {
            alert("enter your password")
        }
        else {

            axios.post("http://localhost:3300/register", key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("data are not inserted")
                        window.location.reload()
                    }
                    else if (res.data.status === "success") {
                        alert("data are insert")
                        window.location.href = "/loginpage"
                    }
                })

        }
    }
    return (
        <>

            <form onSubmit={patientlogin}>
                <div class="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center appoinment-main text-center">
                <h1 class="mt-3 mainHead text-black">REGISTRATION</h1>
                    <table class=" table-main text-white shadow rounded">
                         
                        <tr>
                            <td>
                                <label className='text-black fw-bold '> NAME:</label> </td>
                            <td> <input type="text" id="rname" placeholder=' NAME' className="form-control" /></td>
                        </tr>

                        <tr>
                            <td><label className='text-black fw-bold'>AGE:</label></td>
                            <td><input type="text" id="age" name='age' className="form-control" /></td>

                        </tr>
                        <tr>
                            <td><label className='text-black fw-bold'>PHONE:</label></td>
                            <td> <input type="tel" id="phone" placeholder='PHONE NUMBER' className="form-control" /></td>

                        </tr>
                        <tr>
                            <td> <label className='text-black fw-bold'>EMAIL:</label></td>
                            <td> <input type="email" id="email" placeholder='EMAIL' className="form-control" /></td>
                        </tr>
                        <tr>
                            <td>   <label className='text-black fw-bold'>ROLL:</label></td>
                            <td><select id='roll' className="form-control" >

                                <option>SELECT THE ROLL </option>
                                <option value="doctor">DOCTOR</option>
                                <option value="client" >CLIENT</option>
                                <option value="admin" >ADMIN</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td><label className='text-black fw-bold'>PASSWORD:</label></td>
                            <td> <input type="text" id="password" placeholder='PASSWORD' className="form-control" /> </td>
                        </tr>
                        <tr>
                            <td></td>
                          <td><input  className='btn bg-primary mt-2' type='submit' value='submit' /> </td>  
                            {/* <Link to='/loginpage' className='text-light' >login</Link> */}
                        </tr>
                    </table>
                </div>
            </form>


        </>
    );
}
