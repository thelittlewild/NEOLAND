import { axiosUtil } from "../utils";

export const getAlbumById = async (id) => {
  const optionsRequest = {
    method: "GET",
    url: `https://api.spotify.com/v1/artists/${id}/albums`,
  };

  return await axiosUtil(optionsRequest);
};
