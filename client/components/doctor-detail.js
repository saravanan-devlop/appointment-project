import React from "react";

export function Doctordetails(){
    return(
        <>
         <form onSubmit={patientlogin}>
                <div class="d-flex flex-column align-items-center appoinment-main  vh-100">
                    <h1 class="mt-3 p-3 mainHead">FILL THE GIVE FIELDS</h1>
                    <table class="mt-5 p-3 table-main text-white">
                        <tr>
                            <td>
                                <label> NAME:</label> </td>
                            <td> <input type="text" id="rname" placeholder=' NAME' /></td>
                        </tr>

                        <tr>
                            <td><label>AGE:</label></td>
                            <td><input type="text" id="age" name='age' /><br /></td>

                        </tr>
                        <tr>
                            <td><label>PHONE:</label></td>
                            <td> <input type="tel" id="phone" placeholder='PHONE NUMBER' /></td>

                        </tr>
                        <tr>
                            <td> <label>EMAIL:</label></td>
                            <td> <input type="email" id="email" placeholder='EMAIL' /></td>
                        </tr>
                        <tr>
                            <td> <label>SPECILIZATION</label></td>
                            <td> <input type="text" id="specilization" placeholder='SPECILIZATION' /></td>
                        </tr>
                
                        
                        <tr>
                            <td><label>EXPERIENCES:</label></td>
                            <td> <input type="text" id="experiences" placeholder='PASSWORD' /> </td>
                        </tr>
                        <tr>
                            <input type='submit' value='submit' />
                            <Link to='/loginpage'className='text-light' >login</Link>



                        </tr>
                    </table>
                </div>
            </form>

        </>
    );
}
