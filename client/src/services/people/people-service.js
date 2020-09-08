import Api from "../api";
import { ENDPOINTS } from "../endpoints";

export async function getPeople(page) {
  const params = {
    params: {
      page: page,
    },
  };
  try {
    const res = await Api.get(ENDPOINTS.GET_PEOPLE, params);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
