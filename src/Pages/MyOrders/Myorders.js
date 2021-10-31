import React, { useEffect, useState } from 'react';
import MyorderDetails from '../MyorderDetails/MyorderDetails';
import useAuth from '../../hooks/useAuth';

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