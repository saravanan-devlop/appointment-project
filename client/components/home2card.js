import React from "react";

export function Home2card() {
    return (
        <>
           <div className="vh-100 bg-primary d-flex flex-column justify-content-center align-items-center">
           <div class="card "  style={{"width":"25rem"}} >
                    <div class="card-body shadow rounded">
                        <p class="card-text"> If you have any questions or concerns, you can typically contact the healthcare provider or the platform you used to book the appointment for further assistance</p>
                        <div>
                        <h4>I Case Of Any Emergeny</h4>
                        <h3>Call Toll Free Number:104</h3>
                    </div>
                    </div>
                    
            </div>
            <a href="/" className="btn btn-secondary mt-5">GO Back TO Home</a>
           </div>


        </>
    );
}