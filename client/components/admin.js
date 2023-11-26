import axios from "axios";
import React, { useEffect, useState } from "react";

export function Admin() {
    const [fetchdata, setFetchdata] = useState([])
    useEffect(() => {
        fetch("http://localhost:3300/Booking")
            .then(res => res.json())
            .then(data => setFetchdata(data))
    })

    const del = (id) => {
        var key = { id: id }
        axios.post("http://localhost:3300/bdelete/:id"+id, key)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data are not deleted")
                }
                else if (res.data.status) {
                    alert("data are deleted")
                }
            })}


        return (
            <>
                <div>
                    <h1>Hello Admin 😘</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Number</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                fetchdata.map((value, index) =>
                                    <tr>
                                        <td>{value.bname}</td>
                                        <td>{value.age}</td>
                                        <td>{value.gender}</td>
                                        <td>{value.number}</td>
                                        <td><button className="btn btn-danger" onClick={() => { del(value.id) }}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div >
            </>
        );
                        }