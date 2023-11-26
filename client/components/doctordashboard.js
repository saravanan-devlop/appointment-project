import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Doctordashboard() {
    var { id } = useParams()
    var [rname, setName] = useState('')
    var [email, setEmail] = useState('')
    var [phone, setPhone] = useState('')
    useEffect(() => {
        fetch("http://localhost:3300/doctor/" + id)
            .then(res => res.json())
            .then((data) => {
                setName(data[0].name)
                setEmail(data[0].email)
                setPhone(data[0].phone)

            })
    })

    const [appdata, setAppdata] = useState([])
    useEffect(() => {
        fetch("http://localhost:3300/dresult/" + id)
            .then(res => res.json())

            .then(details => setAppdata(details))


    })



    const delt = (id) => {
        var key = { id: id }
        axios.post("http://localhost:3300/delete/:id" + id, key)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data are not deleted")
                }
                else if (res.data.status) {
                    alert("data are deleted")
                }
            })
    }


    return (
        <>


            <div class="card">
                <div class="card-body">
                    <h5 class="card-title text-black">{rname}</h5>
                    <p class="card-text">{email}</p>
                    <p class="card-text">{phone}</p>
                    {/* <a href="#" class="btn btn-success">UPDATE</a> */}
                </div>
            </div>

            <div>
                <h1>CLIENT DETAILS</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Date</th>
                            <th>Phone</th>
                            <th>Description</th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                            appdata.map((value, index) =>
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td>{value.date}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.description}</td>
                                    <td><button className="btn btn-danger" onClick={() => { delt(value.id) }}>Delete</button></td>


                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div >

        </>
    );
}