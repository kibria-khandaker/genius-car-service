import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import auth from './../../firebase.init';
import './Register.css';
import SocialLogin from './SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false)
    //---------------1 start hook code
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    //---------------1 end hook code
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // link go for login page
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }


    // condition for divert to home
    if (user) {
        // navigate('/home');
        console.log('user:', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        // console.log(event.target.name.value);
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.password.checked; // or same work able to do with useState,upore check koro

        // if (agree) {
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
        console.log('Updated profile');
        //}

        //---------------2 start hook code
        // createUserWithEmailAndPassword(email, password)
        // .then(() => navigate('/home'))// eiline ta hook er ongsho na eta user ke home e divert korar jonno
        //---------------2 end hook code

    }

    return (
        <div className='register-form'>
            <h3>Register</h3>
            <form onSubmit={handleRegister}>
                <input className='rounded border border-muted' type="text" name="name" placeholder='name' /> <br />
                <input className='rounded border border-muted' type="email" name="email" placeholder='email' required /> <br />
                <input className='rounded border border-muted' type="password" name="password" placeholder='password' required /> <br />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree? 'text-primary ps-2': 'text-danger ps-2'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <div className='text-center'>
                <p> Already Have an account? <Link to='/login' onClick={navigateLogin} className=' text-primary text-decoration-none'> Plz Login </Link>  </p>
            </div>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;

// can i send name to google 