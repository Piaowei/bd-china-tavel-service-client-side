import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/Daco_159503.png'
import "./HeaderItem.css"




const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-color ">
                <div className="container-fluid nav-color">
                    <a className="navbar-brand " href="#">
                        <img src={img} alt="" width="35" height="30" className="d-inline-block align-text-top" />
                        <span className="ps-3 fw-bold " >Bd-China  Travel Service</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        {/* <a className="navbar-brand" href="#">Sunrise Eye Care</a> */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item hover-link ">
                                <NavLink className="nav-link active fw-bolder hover-link text-color hover-link text-white" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item hover-link">
                                <NavLink className="nav-link active  fw-bolder hover-link text-color hover-link text-white" aria-current="page" to="/manageAllOrders">Manage Orders</NavLink>
                            </li>
                            <li className="nav-item hover-link">
                                <NavLink className="nav-link active  fw-bolder hover-link text-color  hover-link text-white" aria-current="page" to="/myOrders"> My Orders</NavLink>
                            </li>
                            <li className="nav-item hover-link">
                                <NavLink className="nav-link active fw-bolder hover-link text-color hover-link text-white" aria-current="page" to="/addservice">Add a New Service</NavLink>
                            </li>

                        </ul>
                        <form className="d-flex justify-content-center pt-3">

                            {user?.email ?
                                // <Nav.Link as={Link} to="/login">Login</Nav.Link> :

                                <p className="nav-link active fs-6 fw-bolder hover-link text-warning " onClick={logOut}>Logout</p> :

                                <NavLink className="nav-link active fs-6 fw-bolder hover-link " aria-current="page" to="/login">Login</NavLink>}

                            <p className="nav-link active fs-9 fw-bolder hover-link">
                                <small>Signed in as: {user?.displayName}</small>
                            </p>
                        </form>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Header;