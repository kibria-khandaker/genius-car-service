import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch(`http://localhost:5000/service`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h3> AddService </h3>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='You Name' {...register("name", { required: true, maxLength: 29 })} />
                <textarea placeholder='You description' {...register("description")} />
                <input placeholder='You price' type="number" {...register("price")} />
                <input placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Service" />

            </form>
        </div>
    );
};

export default AddService;