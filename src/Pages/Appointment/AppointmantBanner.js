
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import background from '../../assets/images/bg.png'
const AppointmantBanner = ({ date, setDate }) => {

    return (
        <div className='mx-5' >

            <div className="hero min-h-screen " style={{ background: `url(${background})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src={chair} className=" max-w-lg rounded-lg shadow-2xl" />
                    <div className='shadow-xl'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />

                    </div>

                </div>




            </div>

        </div>

    );
};

export default AppointmantBanner;