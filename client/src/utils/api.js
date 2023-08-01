import { message } from "antd";
import axios from "axios";

export const api = axios.create({});

api.interceptors.response.use((response) => {
  // if (response.status === 200) {
  //   message.success(response.statusText);
  //   console.log("re",response.statusText)
  // }

  return response
});
