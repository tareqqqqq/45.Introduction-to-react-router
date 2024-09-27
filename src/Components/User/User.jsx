import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, phone, email}=user;
    const userStyle={
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'


    }
    
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{phone} </p>
            <p>{email} </p>
            <Link to={`/user/${id}`}>Show details</Link>
            <Link to={`/user/${id}`}>
            <button>Click me</button>
            </Link>
        </div>
    );
};

export default User;
