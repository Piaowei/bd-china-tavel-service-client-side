import React, { useState } from 'react';
const ManageOrderDetails = (props) => {
	const { productName, productimg, _id } = props.service;
	const { handleDelete, id } = props;




	return (
		<div>
			<div className="card mb-3" >
				<div className="row g-0">
					<div className="col-md-4">
						<img src={productimg} className="img-fluid rounded-start" alt="Product Image" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{productName}</h5>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<button className="btn btn-danger" onClick={() => handleDelete(_id)} >Delete</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ManageOrderDetails;