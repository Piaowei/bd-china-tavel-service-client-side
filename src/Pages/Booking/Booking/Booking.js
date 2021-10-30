import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css'
import useAuth from '../../../hooks/useAuth';

const Booking = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [service, setService] = useState({});



    useEffect(() => {
        fetch(`https://morning-harbor-87181.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
        // .then(data => console.log("data from details", data))
    }, [])

    const onSubmit = data => {
        // const jinis = { service, data }
        data.productName = service.name;
        data.productimg = service.img;
        data.productStatus = "Pending";
        console.log("opor theke", data);
        console.log("This is order sumbit info", data);
        axios.post('https://morning-harbor-87181.herokuapp.com/orderItems', data)
            .then(res => {
                console.log("this is res", res);
                if (res.data.insertedId) {
                    alert("Ordered Submitted successfully");
                    reset();

                }
            })
    };





    return (
        <div className="container-fluid">
            <h1 className="pt-3 pb-5">Place your order Now</h1>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src={service.img} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{service.name}</h5>
                            <p className="card-text">{service.description}</p>
                        </div>
                        <div className="price-bg" >
                            <h5  >Price Start from: <span className="text-white" >&yen;{service.price}</span> </h5>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="border border-1 info-bg border border-danger">
                        <h5>User Name: {user.displayName}</h5>
                        <h5>User Email: {user.email}</h5>
                    </div>
                    <div className="card">
                        <form className="shipping-form  form-class " onSubmit={handleSubmit(onSubmit)}>

                            <input className="ps-2" defaultValue={user.displayName} {...register("name")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                            <input placeholder="City" defaultValue="" {...register("city")} />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} />

                            <input className="submit-btn" type="submit" />
                        </form>

                    </div>
                </div>


            </div>







        </div>
    );
};

export default Booking;