import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';



const AddService = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = data => {
		console.log("This is  data", data);
		axios.post('https://agile-bayou-71085.herokuapp.com/services', data)
			.then(res => {
				if (res.data.insertId) {

					alert("added successfully");
					reset();
				}
			})
	};
	return (
		<div className="add-sevice" >
			<h2>Add a service</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
				<textarea {...register("description")} placeholder="Description" />
				<input type="number" {...register("price")} placeholder="Price" />
				<input {...register("img")} placeholder="Image URL" />
				<input type="submit" />
			</form>
		</div>
	);
};

export default AddService;