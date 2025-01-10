import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({
  baseURL: 'https://dummyjson.com/',
});

//username: emilys
//password: emilyspass

export const loginUser = (dataUser) => httpClient.post('/auth/login', dataUser);

export const getAllUsers=(options)=>{
  const query = queryString.stringify(options)
  return httpClient.get(`/users?${query}`)
  }
export const getOneUser=(id)=> httpClient.get(`/users/${id}`)
export const getAllPosts=(options)=>{
  const query=queryString.stringify(options);
  return httpClient.get(`/posts?${query}`)
}
export const getOnePost=(id)=>httpClient.get(`/post/${id}`)