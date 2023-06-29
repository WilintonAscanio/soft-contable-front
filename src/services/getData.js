import axios from "axios";

export const getData = async () => {
  try {
    const URL = "http://181.69.24.20:81/api/Perfiles";

    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
