import React, { useEffect, useState } from 'react';
import MyorderDetails from '../MyorderDetails/MyorderDetails';
import useAuth from '../../hooks/useAuth';
import './Myorders.css'

const Myorders = () => {
	const { user } = useAuth();
	const [services, setServices] = useState([])
	useEffect(() => {
		fetch('https://morning-harbor-87181.herokuapp.com/orderItems')
			.then(res => res.json())
			.then(data => {
				// if (services.length == 0) {
				// 	setServices(data);
				// }

				const single = data.filter(item => item.email.toLowerCase() == user?.email?.toLowerCase());
				console.log(single);
				setServices(single);

			});
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
					window.alert("The Ordered Item is Deleted")
					const remaining = services.filter(service => service._id !== id);
					setServices(remaining);
				}
			})
	}


	return (
		<div className="myOrder-bg">
			<h1 className=" pt-5 my-order ">My  Orders </h1>
			{/* <div className="service-container"> */}
			<div className="row row-cols-1 row-cols-md-3 g-4 container-fluid mx-0 p-1">
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