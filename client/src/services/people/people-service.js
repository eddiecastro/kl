import { ENDPOINTS } from "../endpoints";

/**
 * Async function to query people from the server
 *
 * @param {number} page - The page of results being queried
 */
export async function getPeople(page) {
  try {
    const res = await fetch(`${ENDPOINTS.GET_PEOPLE}?page=${page}`);
    if (res.ok) {
      const json = await res.json();
      const data = json.data.map((x) => {
        return {
          id: x.id,
          name: `${x.first_name} ${x.last_name}`,
          detail: `${x.email_address} - ${x.title}`,
        };
      });
      json.data = data;
      return json;
    } else {
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
}
