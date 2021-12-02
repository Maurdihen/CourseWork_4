import axios from 'axios';
import { getCookie } from "../utils/cookies";

export default axios.create({
  baseURL: `https://skypro-courseproject.herokuapp.com`,
  // withCredentials: true,
  headers: {
    Authorization: "Bearer " + getCookie("AccessToken")
  }
});