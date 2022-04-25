import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useServiceDetail from './../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    // const [service, setService] = useState({});
    // useEffect(() => {
    //     const url = `http://localhost:5000/service/${serviceId}`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setService(data));
    // }, [])

    return (
        <div className='container w-50 mx-auto py-5 text-center'>
            <p> Service Detail {serviceId} </p>
            <h4>Name: {service.name}</h4>
            <div className='w-100'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>
                        Proceed to Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;