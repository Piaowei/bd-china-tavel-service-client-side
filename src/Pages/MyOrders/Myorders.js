import React, { useEffect, useState } from 'react';
import MyorderDetails from '../MyorderDetails/MyorderDetails';
import './Myorders.css';
const Myorders = () => {

	const [services, setServices] = useState([])
	useEffect(() => {
		fetch('https://morning-harbor-87181.herokuapp.com/orderItems')
			.then(res => res.json())
			.then(data => setServices(data));
	}, [])


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


	return (
		<div >
			<h2 className="text-primary mt-5">My  Orders Yeah</h2>
			<div className="service-container">
				{
					services.map(service => <MyorderDetails
						key={services._id}
						service={service}
						handleDelete={handleDelete}
					></MyorderDetails>)
				}
			</div>
		</div>
	);
};

export default Myorders;