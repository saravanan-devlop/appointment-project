import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export function Clientappoinment() {
    var { id } = useParams();
    function infoclient(event) {
        event.preventDefault()
        var cname = document.getElementById("cname").value
        var age = document.getElementById("age").value
        var date = document.getElementById("date").value
        var phone = document.getElementById("phone").value
        var description = document.getElementById("description").value

        var key = {
            cname: cname,
            age: age,
            date: date,
            phone: phone,
            description: description
        }

        console.log(key);
        if (cname == '') {
            alert('ENTER YOUR NAME')
        }
        else if (age == '') {
            alert('ENTER YOUR NAME')
        }
        else if (date == '') {
            alert("ENTER YOUR DATE")
        }
        else if (phone == '') {
            alert("ENTER Your PHONE NUMBER")
        }
        else if (description == '') {
            alert("ENTER Your description")
        }
        else {
            axios.post("http://localhost:3300/form/" + id, key)
                .then((res) => {

                    if (res.data.status === "error") {
                        alert("data not inserted")

                    }
                    else if (res.data.status === "success") {
                        alert("data inserted")
                    }
                })
        }
    }

    return (
        <>
            <form onSubmit={infoclient}>
                <div class="container-fluid d-flex flex-column justify-content-center align-items-center  vh-100 appMain">
                <h1 class="mt-3 p-3 mainHead">APPOINTMENT</h1>
                    <table class="mt-5 p-3 table-main text-white shadow rounded fw-bold">
                 
                        <tr>
                        {/* <h1 class="mt-3 p-3 mainHead">APPOINTMENT</h1> */}
                            <td>
                                <label className="text-black"> NAME:</label> </td>
                            <td> <input type="text" id="cname" placeholder=' NAME' className="form-control"  /><br /></td>
                        </tr>

                        <tr className="">
                            <td><label className="text-black ">AGE:</label></td>
                            <td><input type="text" id="age" name='age'  className="form-control"/><br /></td>
                        </tr>
                        <tr>
                            <td><label className="text-black">DATE:</label></td>
                            <td> <input type="date" id="date" placeholder='PHONE NUMBER'className="form-control" /><br /></td>
                        </tr>
                        <tr>
                            <td><label className="text-black">PHONE:</label></td>
                            <td> <input type="tel" id="phone" placeholder='PHONE NUMBER'className="form-control" /><br /></td>
                        </tr>
                        <tr>
                            <td> <label className="text-black" >DESCRIPTION:</label></td>
                            <td> <input type="text" id="description" placeholder='Description'className="form-control" /><br /></td>
                        </tr>

                        <tr>
                        <td></td>
                        <td><input type='submit' value='submit' className="form-control btn btn-success mt-2" /></td> 
                        </tr>
                    </table>
                </div>
            </form>
        </>
    );
}