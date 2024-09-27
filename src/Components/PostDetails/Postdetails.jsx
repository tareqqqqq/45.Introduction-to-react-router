import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const Postdetails = () => {
    const post =useLoaderData();
    const {postId}= useParams
    const navigate= useNavigate();

    const {id,title,body}=post;

    console.log(postId);
    
    const handleGoBack= () =>{
        navigate(-1);
    }
    return (
        <div>
            <h2> post details:{id} </h2>
            <p>title:{title}</p>
            <p><small>body:{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Postdetails;