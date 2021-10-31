import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = (props) => {
    // const {service} = props;
    const { _id, name, price, description, img } = props.service;

    // const short = des;



    return (
        <div>
            <div className="card mb-3 container-fluid no-margin carts" >
                <div className="row g-0">
                    <div className="col-md-4  d-flex ">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 no-margin">
                        <div className="card-body ">
                            <h5 className="card-title">{name}</h5>
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