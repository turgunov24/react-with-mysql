import { message } from "antd";

const fetchAction = async (url, options) => {
  try {
    const response = await fetch(
      "http://localhost:5173/users/index",
      // options && {
      //   ...options,
      // }
    );
    console.log("api: ", response);
    switch (response.status) {
      case 200:
        message.success(response.statusText);
        break;
      default:
        message.error("something went wrong!");
        break;
    }
    const data = await response.json();
    // console.log("data: ", data);
    // return data;
  } catch (error) {
    message.error(error.message);
  }
};

export default fetchAction;
