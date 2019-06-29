import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getEmployees = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/employees.json`)
    .then((res) => {
      const employees = [];
      Object.keys(res.data).forEach((fbkey) => {
        res.data[fbkey].id = fbkey;
        employees.push(res.data[fbkey]);
      });
      resolve(employees);
    })
    .catch(err => reject(err));
});

export default { getEmployees };
