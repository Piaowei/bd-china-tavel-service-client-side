import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = (props) => {
    // const {service} = props;
    const { _id, name, price, description, img } = props.service;

    // const short = des;



    return (

        <div class="row g-5 border-2 m-md-1 carts no-margin">
            <div class="col-md-4 no-margin d-flex ">
                <img src={img} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8 no-margin">
                <div class="card-body ">
                    <h5 class="card-title">{name}</h5>
                    <p className="px-3 text-start fs-6">
                        {
                            description.slice(0, 250)
                        }.......
                    </p>

                    <Link to={`/booking/${_id}`}>
                        {/* <button className="btn btn-warning">Book {name.toLowerCase()}</button> */}
                        <button className="btn btn-danger">Book </button>
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