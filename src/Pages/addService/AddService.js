import axios from 'axios';
import { useParams } from 'react-router';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';



const AddService = () => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm();

	const onSubmit = data => {
		console.log("This is  data", data);
		axios.post('https://morning-harbor-87181.herokuapp.com/services', data)
			.then(res => {
				// console.log("this is res from add service", res.data.inse);
				if (res.data.insertedId) {
					alert("added successfully");
					reset();
				}
			})
	};
	return (
		<div className="add-sevice" >
			<h2>Add a service</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("name", { required: true })} placeholder="Service name" />
				{errors.name?.type === 'required' && <span className="text-danger">Service name is required</span>}
				<textarea {...register("description", { required: true })} placeholder="Description" />
				{errors.description && <span className="text-danger">Description is required</span>}
				<input type="number" {...register("price", { required: true })} placeholder="Price" />
				{errors.price && <span className="text-danger">price is required is required</span>}
				<input {...register("img")} placeholder="Image URL" />
				<input type="submit" />
			</form>
		</div>
	);
};

export default AddService;