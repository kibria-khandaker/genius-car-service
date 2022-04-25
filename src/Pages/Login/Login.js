import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    //---------------3 start hook code
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    //---------------3 end hook code

    let errorElement;
    //---------------1 start hook code
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //---------------1 end hook code
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className=' text-danger'>Error: {error?.message} </p>
    }

    // if (user) {
    //     navigate('/home');
    // }

    if (user) {
        navigate(from, { replace: true });
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        //---------------2 start hook code
        signInWithEmailAndPassword(email, password)
        // .then(()=>navigate(from, {replace: true}))
        // .then(()=>{
        //     if (error) {
        //         console.log(error);
        //         return;
        //     }else{
        //         navigate(from, {replace: true})
        //         console.log(email, password);
        //     }
        // })
        //---------------2 end hook code


    }

    const navigateRegister = event => {
        navigate('/register')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }else{
            toast('Enter your email');
        }
        // const notify = () => toast("Wow so easy !");
    }
    return (
        <div className='container w-50 mx-auto py-5'>
            <h3 className=' text-primary text-center'>Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='py-3' ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='py-3' ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-3" type="submit">
                    Login
                </Button>
            </Form>
            <div className='text-center'>
                {errorElement}
                <p> Are you New in Genius Car Service? <Link to='/register' onClick={navigateRegister} className=' text-primary text-decoration-none'> Plz Register </Link>  </p>
                <p> Forget Password? <button onClick={resetPassword} className='border-0 rounded text-primary text-decoration-none'> Reset Password </button>  </p>
            </div>

            <SocialLogin></SocialLogin>
            
        </div>
    );
};

export default Login;