import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const { id, title}=post;
    const navigate = useNavigate();

    const postStyle={
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }

    const handleShowDetail = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h3> post of id:{id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>post detail</Link>
            <Link to={`/post/${id}`}><button>Details</button></Link>
           <button onClick={handleShowDetail}>Show me Details</button>

        </div>
    );
};

export default Post;