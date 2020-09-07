import Api from "../api";
import { ENDPOINTS } from "../endpoints";
import PersonModel from "../../models/person-model";

export default function getPeople() {
  return Api.get(ENDPOINTS.GET_PEOPLE)
    .then(function (response) {
      return response.data.map(
        (x) =>
          new PersonModel(
            x.first_name + " " + x.last_name,
            x.email_address,
            x.title
          )
      );
    })
    .catch(function (error) {
      console.log(error);
    });
}
