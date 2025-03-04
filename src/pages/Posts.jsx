import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/posts')
            .then((res) => setPosts(res.data));

    }, []);

    return (
        <div className="container ">
            <div className="row">

                {
                    posts.map((post) => {

                        const { id, title, content, image, tags } = post

                        return (
                            <div key={id} className='col-4 gy-4'>
                                <div className='card h-100'>
                                    <figure>
                                        <img className='card-img-top' src={image} alt={title} />
                                    </figure>
                                    <div className='card-body position-relative'>
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text py-3">{content}</p>
                                        <NavLink to={`/posts/${id}`}>
                                            <button className='btn btn-danger position-absolute bottom-0 end-0'>Vai alla scheda dettagliata</button>
                                        </NavLink>

                                    </div>
                                </div>

                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Posts