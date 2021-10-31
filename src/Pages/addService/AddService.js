import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
import hotel from '../../images/hotel.jpg'



const AddService = () => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm();

	const onSubmit = data => {
		console.log("This is  data", data);
		axios.post('https://morning-harbor-87181.herokuapp.com/services', data)
			.then(res => {
				if (res.data.insertedId) {
					alert("added successfully");
					reset();
				}
			})
	};

	return (
		<div id="addService" className="add-sevice" >
			<div className="service-container" >
				<div className="card mb-3 container-fluid no-margin carts">
					<div className="row g-0 ">
						<div className="col col-12 ">
							<div className="card h-100 carts-item">
								<img src={hotel} className="img-fluid  card-img-top" alt="..." />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* -------------------------------------------------
                   ADD NEW SERVICE
-----------------------------------------------------*/}

			<h1>Add a service</h1>
			<form onSubmit={handleSubmit(onSubmit)}>

				<input {...register("name", { required: true })} placeholder="Service name" />
				{errors.name?.type === 'required' && <span className="text-danger">Service name is required</span>}

				<textarea {...register("description", { required: true })} placeholder="Description" />
				{errors.description && <span className="text-danger">Description is required</span>}

				<input type="number" {...register("price", { required: true })} placeholder="Price" />
				{errors.price && <span className="text-danger">price is required </span>}

				<input type="number" {...register("time", { required: true })} placeholder="Travel Duration" />
				{errors.time && <span className="text-danger">Travel Duration is required</span>}

				<input {...register("img")} placeholder="Image URL" />
				<input className="submit-order-btn" type="submit" />
			</form>
		</div>
	);
};

export default AddService;