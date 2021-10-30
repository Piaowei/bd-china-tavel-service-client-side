import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://morning-harbor-87181.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])

    return (
        <div className="container-fluid">
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="card mb-3 container-fluid border-0 ">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                        short={service.description.slice(0.15)}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;