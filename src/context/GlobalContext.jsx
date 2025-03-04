import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    
  const [posts, setPosts] = useState([]);

  const [singlePost, setSinglePost] = useState({
    id: 0,
    title: '',
    content: '',
    image: '',
    tags: []
  });

  const url = import.meta.env.VITE_ENDPOINT_URL;

  //chimate api
  //chiamata per ottenere tutte le pizze
  const fetchData = () => {
    axios.get('http://localhost:3000/posts').then((res) => setPosts(res.data));
  };

  //chimata api per la singola pizza
  const getPostId = (id) => {
    axios.get(`http://localhost:3000/posts/${id}`).then((res) => setSinglePost(res.data));

};

  const value = {
    posts,
    singlePost,
    fetchData,
    getPostId
  }


  return(
    <GlobalContext.Provider value={ value }>
        {children}
    </GlobalContext.Provider>
  )

};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };