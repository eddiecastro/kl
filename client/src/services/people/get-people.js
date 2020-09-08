import Api from "../api";
import { ENDPOINTS } from "../endpoints";
import PersonModel from "../../models/person-model";

export default function getPeople() {
  return Api.get(ENDPOINTS.GET_PEOPLE)
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
