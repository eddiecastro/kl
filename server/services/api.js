import Axios from "axios";

import { AppConfig } from "../config/app-config";

export default Axios.create({
  baseURL: AppConfig.SERVICE_URL,
  // headers: { Authorization: "Bearer " + process.env.REACT_APP_API_KEY },
  responseType: "json",
});
