import { useLoaderData } from "react-router-dom";

const CheckOut = () => {

    const service = useLoaderData();
    console.log(service);
    
    return (
        <div>
            This is Checkout Page
        </div>
    );
};

export default CheckOut;