import { message } from "antd";

const fetchAction = async (url, options) => {
  try {
    const response = await fetch(
      url
      // options && {
      //   ...options,
      // }
    );
  } catch (error) {
    message.error(error.message);
  }
};

export default fetchAction;
