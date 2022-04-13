import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const navigate = useNavigate()
    const serviceDetails = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p></p>
            <p>Price: {price} ,  Service Id {id}</p>
            <p><small>{description}</small></p>
            <button onClick={() => serviceDetails(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;