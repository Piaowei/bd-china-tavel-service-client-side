import React, { useEffect, useState } from 'react';
import ManageOrderDetails from '../ManageOrderDetails/ManageOrderDetails';


const ManageAllOrders = () => {
	const [services, setServices] = useState([])
	const [productStatus, setProductStatus] = useState(false);
	useEffect(() => {
		fetch('https://morning-harbor-87181.herokuapp.com/orderItems')
			.then(res => res.json())
			.then(data => setServices(data));
	}, [productStatus])


	const handleDelete = id => {

		console.log("worked", id);
		const url = `https://morning-harbor-87181.herokuapp.com/orderItems/${id}`;
		fetch(url, {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(data => {

				if (data.deletedCount) {
					alert('deleted');
					const remaining = services.filter(service => service._id !== id);
					setServices(remaining);
				}
			})
	}


	//UPDATE API

	const handleUpdateUser = e => {
		setProductStatus(true)
		const appove = { condition: "Approved" };
		const url = `https://morning-harbor-87181.herokuapp.com/orderItems/${e}`;
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(appove)
		})
			.then(res => res.json())
			.then(data => {
				console.log("data", data);
				if (data.modifiedCount > 0) {
					alert('updated successfully')
					setProductStatus("");
				}
			})


		// e.preventDefault();
	}





	return (
		<div >
			<h2 className="text-primary mt-5">Manage All Users </h2>
			<div className="service-container">
				{
					services.map(service => <ManageOrderDetails
						key={services._id}
						service={service}
						handleDelete={handleDelete}
						handleUpdateUser={handleUpdateUser}
					></ManageOrderDetails>)
				}
			</div>
		</div>
	);
};

export default ManageAllOrders;