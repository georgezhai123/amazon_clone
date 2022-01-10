import axios from "axios";

const instance = axios.create({
  //localhost debug:http://127.0.0.1:5001/challenge-266d2/us-central1/api
  baseURL: `https://us-central1-challenge-266d2.cloudfunctions.net/api`, //THE API {cloud function} URL
});

export default instance;
