import React, { useState } from 'react';
const ManageOrderDetails = (props) => {
	const { productName, productimg, _id, productStatus, email } = props.service;
	const { handleDelete, id } = props;
	const { handleUpdateUser } = props;




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
							<br />
							<div className="d-flex justify-content-between">
								<h6>Order Status: <span className="text-danger fw-bold" >{productStatus}</span> </h6>
								<p>User Email: <span className="text-primary fw-bold" >{email}</span> </p>
							</div>
							<div className="d-flex justify-content-md-start justify-content-between ">
								<button className="btn btn-danger me-3" onClick={() => handleDelete(_id)} >Delete</button>
								<button className="btn btn-primary" onClick={() => handleUpdateUser(_id)} >Approve Order</button>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ManageOrderDetails;