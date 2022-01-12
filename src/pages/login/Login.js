import React , {useState, useContext} from 'react';
import * as actions from '../../context/Actions'
import { Context } from '../../context/Context'
import './login.css';

const Login = () => {
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');

    const {dispatch , isFetching} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:actions.LoginStart});
        try {
            // const res = await axios.post('https://restapi.adequateshop.com/api/authaccount/login' , {
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
                    "Name": "Developer",
                    "Email": "Developer5@gmail.com",
                    "Token": "02b869e4-ea45-4b5c-b764-642a39e95bb7"
                }
            }
            dispatch({
                type:actions.LoginSuccess , 
                payload: res.data
            });

        } catch (error) {
            dispatch({type:actions.LoginFailure})
        }
    }

    return (
        <div className="login">
            <div className="contact-section" id="devo-contact">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="contact-form  bg-secWhite">
                                <h4 className="heading form-h color-black"> login </h4>
                                <form action="" onSubmit={handleSubmit}>
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
                                        <button disabled={isFetching} className="wrap-name first-wrap bg-pink devo-btn color-borderPink color-white" type="submit"> Send </button>
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

export default Login;