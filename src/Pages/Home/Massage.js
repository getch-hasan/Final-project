import React from 'react';
import background from '../../assets/images/appointment.png'

const Massage = () => {
  return (
    <div className=' grid justify-center mt-10 py-10 ' style={{ background: `url(${background})` }}>

      <div className='mt-8 grid justify-center'><p className='mx-20 '>Contact us</p>
        <h1 className='text-2xl'>Stay connected with us</h1>
        </div>
      <div className='grid justify-center items-center'><form action="">
        <input className='mt-3 rounded-lg px-2  w-80 h-10' type="email" name="" id="" placeholder='Email address' /><br />
        <input className='mt-3 rounded-lg px-2  w-80 h-10' type="text" placeholder='Subject' /><br />
        <input className='mt-3 rounded-lg px-2  w-80 h-20' type="text" placeholder='Your massage' /><br />
        <div className='grid justify-center'>        <button className='mt-5 rounded-lg   w-24 h-10 bg-gradient-to-r from-secondary to-primary' type="submit"> Submit</button></div>
      </form></div>

    </div>


  );
};

export default Massage;