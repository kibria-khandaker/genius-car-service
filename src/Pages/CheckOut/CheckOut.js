import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useServiceDetail from './../../hooks/useServiceDetail';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    // // difrent way for field text change ---
    // const [user, setUser] = useState({
    //     name:'kibria',
    //     email:'kibria@mail.email',
    //     service:'service one',
    //     address:'dhaka',
    //     phone:'0123456789',
    // });
    // const handleAdressChange = event =>{
    //     console.log(event.target.value);
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress, ...rest}
    //     console.log(newUser);
    //     setUser(newUser);
    // }
    // check user details --
    // if (user) {
    //         console.log(user);    
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        axios.post('http://localhost:5000/order', order)
            .then(response=> {
                const {data} = response;
                if (data.insertedId) {
                    toast('Thanks for order. Your Order is processing')
                    event.target.reset();
                }
            })

        //------------
    }

    return (
        <div className='container w-50 mx-auto'>
            <h4 className='my-3 text-center'>
                Your CheckOut, <br /> So Please Order now now
            </h4>
            <p>{serviceId}</p>
            <p>{service.name}</p>
            <hr />
            {/* difrent way for field text change ---
             <form className='d-flex flex-column  gap-2'>
                <input value={user.name} type="text" name='name' placeholder='Name' required />
                <input value={user.email} type="text" name='email' placeholder='email' required />
                <input value={user.service} type="text" name='service' placeholder='service' required />
                <input value={user.address} type="text" name='address' onChange={handleAdressChange} placeholder='address' required />
                <input value={user.phone} type="text" name='phone' placeholder='Phone' required />
                <input className='btn btn-primary' type="submit" value="Please Order" />
            </form>  */}
            <form onSubmit={handlePlaceOrder} className='d-flex flex-column  gap-2'>
                <input value={user?.displayName} type="text" name='name' placeholder='Name' readOnly required />
                <input value={user?.email} type="text" name='email' placeholder='email' readOnly required />
                <input value={service?.name} type="text" name='service' placeholder='service' readOnly required />

                <input type="text" name='address' placeholder='address' required />
                <input type="text" name='phone' placeholder='Phone' required />
                <input className='btn btn-primary' type="submit" value="Please Order" />
            </form>
        </div>
    );
};

export default CheckOut;