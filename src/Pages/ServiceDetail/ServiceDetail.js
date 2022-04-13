import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='container w-50 mx-auto py-5 text-center'>
            <h3> Service Detail {serviceId} </h3>
            <div className='w-100'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>
                        Proceed to Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;