import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div className="text-center space-y-3">
                <h3 className="text-2xl text-orange-600">Services</h3>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p className="w-2/3 mx-auto ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ab ipsam voluptatum ad voluptates! Nostrum obcaecati provident odio, veritatis fugit exercitationem praesentium impedit repellat in.</p>
            </div>

            <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-5 my-8">
                {
                    services.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}

                        ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;