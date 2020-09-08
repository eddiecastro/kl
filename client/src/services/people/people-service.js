import Api from "../api";
import { ENDPOINTS } from "../endpoints";

export async function getPeople(page) {
  const params = {
    params: {
      page: page,
    },
  };
  const res = await Api.get(ENDPOINTS.GET_PEOPLE, params);
  return await res.data.data;
}
