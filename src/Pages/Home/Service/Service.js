import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (

        <div class="row g-0">
            <div class="col-md-4">
                <img src={img} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h5>Price: {price}</h5>
                    <p className="px-3">{description}</p>

                    <Link to={`/booking/${_id}`}>
                        {/* <button className="btn btn-warning">Book {name.toLowerCase()}</button> */}
                        <button className="btn btn-warning">Book </button>
                    </Link>

                </div>
            </div>
        </div>





        // <div className="service pb-3">
        //     <img src={img} alt="" />
        //     <h3>{name}</h3>
        //     <h5>Price: {price}</h5>
        //     <p className="px-3">{description}</p>
        //     <Link to={`/booking/${_id}`}>
        //         <button className="btn btn-warning">Book {name.toLowerCase()}</button>
        //     </Link>
        // </div>
    );
};

export default Service;