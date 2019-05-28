import axios from 'axios';
const API_KEY = "c59f61f4-3a4e-4afd-8fe0-6b80953740de";
const city = 36;
const state = 94;

export const writePost = ({title, body, tags}) => axios.post('/api/posts', {title, body, tags});

export const getPost = (id) => axios.get(`/api/posts/${id}`);

// export const getPostList = ({tag, page}) => axios.get(`/api/posts/?${queryString.stringify({tag, page})}`);
export const getPostList = () => axios.get(`https://edmtrain.com/api/events?locationIds=${city},${state}&client=${API_KEY}`);

//   const countBreeds = async () => {
//     const breeds = await getBreeds()
  
//     if (breeds.data.message) {
//       console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
//     }
//   }
  
//   countBreeds()

// const API_KEY = "c59f61f4-3a4e-4afd-8fe0-6b80953740de";
// const api_call = await fetch(`https://edmtrain.com/api/events?locationIds=${city},${state}&client=${API_KEY}`);