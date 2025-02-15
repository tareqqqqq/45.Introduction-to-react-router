import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user=useLoaderData();
    const {name,website}= user;
    return (
        <div>
            <h2> User details: {name}</h2>
            <p> web: {website}</p>
        </div>
    );
};

export default UserDetails;