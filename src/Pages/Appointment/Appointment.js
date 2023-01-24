
import React, { useState } from 'react';
import AppointmantBanner from './AppointmantBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmantBanner date={date} setDate={setDate}></AppointmantBanner>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;