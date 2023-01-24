import React from 'react';
import clock from '../../assets/icons/clock.svg'
import Location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-3  sm:grid-cols-1 gap-5 m-5 '>
                <div className="p-5 card lg:card-side bg-gradient-to-r from-secondary to-primary bg-base-100 shadow-xl">
                    <figure><img src={clock} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Opening Hours</h2>
                        <p>We are hare 24 hour for you</p>

                    </div>
                </div>
                <div className="card p-5 lg:card-side bg-accent bg-base-100 shadow-xl">
                    <figure><img src={Location} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Location</h2>
                        <p>Mirpur#6,Block-B,L-1</p>

                    </div>
                </div>
                <div className="card p-5 lg:card-side bg-gradient-to-r from-secondary to-primary bg-base-100 shadow-xl">
                    <figure><img src={phone} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Contact Us</h2>
                        <p>+8801864983211</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;