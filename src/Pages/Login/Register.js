import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
const Register = () => {
    const navigate = useNavigate();
    const navigateLogin=event=>{
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault();

        // console.log(event.target.name.value);
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

    }
    return (
        <div className='register-form'>
            <h3>Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='name' /> <br />
                <input type="email" name="email" placeholder='email' required /> <br />
                <input type="password" name="password" placeholder='password' required /> <br />
                <input type="submit" value="Register" />
            </form>
            <p> Already Have an account? <Link to='/login'  onClick={navigateLogin}   className=' text-danger text-decoration-none'> Plz Register </Link>  </p>
        </div>
    );
};

export default Register;