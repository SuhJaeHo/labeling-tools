import axios from "axios";

export default async function getPhotoAPI() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos/1");

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
