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
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={service.name} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Booking;