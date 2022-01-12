import React , {useState} from 'react';
import './register.css';
import axios from 'axios';

const Register = () => {
    const [ name , setName ] = useState('');
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');
    const [ error , setError ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            // const res = await axios.post('https://restapi.adequateshop.com/api/authaccount/registration' , {
            //     name ,
            //     email , 
            //     password
            // });
            const res = {
                "$id": "1",
                "code": 0,
                "message": "success",
                "data": {
                    "$id": "2",
                    "Id": 7075,
                    "Name": name,
                    "Email": email,
                    "Token": "3030401c-c5a5-43c8-8b73-2ab9e6f2ca22"
                }
            }
            if(res.data) window.location.replace("/login")
        } catch (error) {
            setError(true);
        }
    }
    return (
        <div className="Register">
            <div className="contact-section" id="devo-contact">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="contact-form  bg-secWhite">
                                <h4 className="heading form-h color-black"> Register </h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input 
                                            className="devo-input" 
                                            type="text" 
                                            placeholder="Name" 
                                            onChange={(e)=>setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            className="devo-input" 
                                            type="email" 
                                            placeholder="Email" 
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            className="devo-input" 
                                            type="password" 
                                            placeholder="password" 
                                            onChange={(e)=>setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="devo-center">
                                        <button className="wrap-name first-wrap bg-pink devo-btn color-borderPink color-white" type="submit"> Send </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;