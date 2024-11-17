import axios from "axios"

const Api = axios.create({
  baseURL: 'https://api.npoint.io/99c279bb173a6e28359c',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default Api