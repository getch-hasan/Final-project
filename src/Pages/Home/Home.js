import React from 'react';
import AppointmentH from './AppointmentH';

import Banner from './Banner';
import Info from './Info';
import Massage from './Massage';

import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div className='px-12'>
            <div>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <AppointmentH></AppointmentH>
                <Testimonial></Testimonial>
                <Massage></Massage>

            </div>







        </div>

    );
};

export default Home;