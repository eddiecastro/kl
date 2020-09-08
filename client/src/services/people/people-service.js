import { ENDPOINTS } from "../endpoints";

/**
 * Async function to query people from the server
 *
 * @param {number} page - The page of results being queried
 */
export async function getPeople(page) {
  try {
    var url = new URL(ENDPOINTS.GET_PEOPLE);
    url.search = new URLSearchParams({
      page: page,
    });
    const res = await fetch(url);
    if (res.ok) {
      const json = await res.json();
      return json;
    } else {
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
}
