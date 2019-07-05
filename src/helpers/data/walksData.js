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

// const putWalk = (dog, employee, date) => axios.put(`${baseUrl}/walks/${orderId}.json`, updateOrder);

export default { getWalks };
