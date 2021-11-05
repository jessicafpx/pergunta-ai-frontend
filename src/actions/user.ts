import api from "../services/api";

export const updateAvatar = async (id: number) => {
  try {
    const response = await api.put(`user/${id}`);
    return response;
  } catch (err) {
    console.log(err);
  }
};
