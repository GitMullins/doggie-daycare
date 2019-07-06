import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((res) => {
      const walks = [];
      Object.keys(res.data).forEach((fbkey) => {
        res.data[fbkey].id = fbkey;
        walks.push(res.data[fbkey]);
      });
      resolve(walks);
    })
    .catch(err => reject(err));
});

const postWalk = finalWalk => axios.post(`${baseUrl}/walks.json`, finalWalk);

const deleteWalk = walkId => axios.delete(`${baseUrl}/walks/${walkId}.json`);

const putWalk = (walkId, updateWalk) => axios.put(`${baseUrl}/walks/${walkId}.json`, updateWalk);

export default {
  getWalks,
  postWalk,
  deleteWalk,
  putWalk,
};
