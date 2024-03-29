import axios from 'axios';

const url = 'https://personal-page-backend-atq.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url,newPost);
export const updatePost = (id,updatedPost) => axios.patch(`${url}/${id}`,updatedPost);