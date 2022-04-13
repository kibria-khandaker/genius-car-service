import React from 'react';
import errorImg from '../../../images/error-404.png'

const NotFound = () => {
    return (
        <div className='text-center'>
            <h2 className='pt-5'>404 Opps..!</h2>
            <img width={'50%'} src={errorImg} alt="errorImg" />
        </div>
    );
};

export default NotFound;