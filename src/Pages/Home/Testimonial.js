import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Patient from './Patient';
import quote from '../../assets/icons/quote.svg'
const Testimonial = () => {
    const patients = [
        {
            _id: 1,
            img: people1,
            name: 'Winson Harry',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur tenetur praesentium consequuntur asperiores maiores itaque laborum quam numquam! Error, tempore. '
        },
        {
            _id: 2,
            img: people2,
            name: 'Winson Harry',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur tenetur praesentium consequuntur asperiores maiores itaque laborum quam numquam! Error, tempore.'
        },
        {
            _id: 3,
            img: people3,
            name: 'Winson Harry',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur tenetur praesentium consequuntur asperiores maiores itaque laborum quam numquam! Error, tempore.'
        },
    ]
    return (
        <div  >
            <div className='flex justify-between items-center mt-5'>
                <div className='mt-5 mx-5'>
                    <p className='font-bold'>Testimonial</p>
                    <h1 className='text-2xl'>What Our Patient Says</h1>
                </div>
                <div><img className='w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 mt-[100px]'>
                {
                    patients.map(petient => <Patient
                        key={petient._id}
                        petient={petient}
                    ></Patient>)

                }

            </div>

        </div>
    );
};

export default Testimonial;