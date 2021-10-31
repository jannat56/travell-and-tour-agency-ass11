import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(()=>{
        fetch(`https://tranquil-sierra-50909.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data=> setService(data));

        
    }, [])
    return (
        <div>
            <h2>this is booking: {service.name}
            {serviceId}</h2>
        </div>
    );
};

export default Booking;