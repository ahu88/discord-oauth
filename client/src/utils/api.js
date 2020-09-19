//fetches data from api
import axios from "axios";

export function getUserDetails() {
  //calls api, and withCredentials (in order to send cookie), so that server recognizes the cookie
  return axios.get("http://localhost:3001/api/auth", {
    withCredentials: true,
  });
}

export function getGuilds() {
  return axios.get("http://localhost:3001/api/discord/guilds", {
    withCredentials: true,
  });
}
