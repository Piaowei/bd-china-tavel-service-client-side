import React from 'react';

import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Accordion from '../Accordion/Accordion';
import Destination from '../Destination/Destination';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Accordion></Accordion>
            <Destination></Destination>
        </div>
    );
};

export default Home;