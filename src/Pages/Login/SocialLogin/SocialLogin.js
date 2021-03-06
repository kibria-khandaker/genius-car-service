import React from 'react';
import googleImg from '../../../images/icon/google.svg';
import facebookImg from '../../../images/icon/facebook.png';
import githubImg from '../../../images/icon/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement = <p className=' text-danger'>Error: {error?.message}  {error1?.message}</p>
    }
    if (user || user1 ) {
        navigate(from, { replace: true });
    }
    // if (user || user1) {
    //     navigate('/home')
    // }

    return (
        <div>
            <div className=' d-flex align-items-center' >
                <div className=' bg-primary w-50 ' style={{ height: '1px' }}></div>
                <p className='mt-2 px-2'>or</p>
                <div className=' bg-primary w-50 ' style={{ height: '1px' }}></div>
            </div>
            {errorElement}
            <dir className='w-100 p-0'>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary my-2 w-50 mx-auto d-block'>
                    <img style={{ width: '32px' }} src={googleImg} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-primary my-2 w-50 mx-auto d-block'>
                    <img style={{ width: '32px' }} src={facebookImg} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-primary my-2 w-50 mx-auto d-block'>
                    <img style={{ width: '32px' }} src={githubImg} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </dir>
        </div>
    );
};

export default SocialLogin;