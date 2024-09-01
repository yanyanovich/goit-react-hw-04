import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.params = {
  client_id: "HVFo8WAjCLkJDRtc7Hk4fl5UgmXzQKzGAtuLcykwpAA",
  orientation: "landscape",
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);
  return data;
};
