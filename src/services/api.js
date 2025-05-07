import axios from 'axios';

export const verifyCertificate = (code) =>
  axios
    .get(`https://certguardrender.onrender.com/api/verify?code=${code}`)
    .then((res) => res.data);