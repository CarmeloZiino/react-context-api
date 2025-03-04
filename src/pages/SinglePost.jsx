import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
import { useEffect } from "react";
// import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";


const SinglePost = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    // const [post, setPost] = useState({
    //     id: 0,
    //     title: '',
    //     content: '',
    //     image: null,
    //     tags: []
    // })
    const { singlePost, getPostId } = useGlobalContext()

    useEffect(() => {
        // axios.get(`http://localhost:3000/posts/${id}`)
        //     .then(res => setPost(res.data))
        //     .catch(err => console.error("Errore nel caricamento del post:", err));
    
    getPostId(id)
    
        }, [id , getPostId])



    const { title, content, image, tags } = singlePost

    return (
        <>
            <div className="container text-center">
                <figure>
                    <figure>
                        <img src={image} alt={title} />
                    </figure>
                </figure>
                <h1>{title}</h1>
                <p > {content}</p>


                <button className="btn btn-danger" onClick={() => navigate(-1)}>
                    Torna alla pagina precedente
                </button>
            </div>

        </>
    )
}

export default SinglePost