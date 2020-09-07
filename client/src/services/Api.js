import Axios from "axios";

import { Config } from "../config/config";

export default Axios.create({
  baseURL: Config.SL_BASE_URL,
  headers: { Authorization: "Bearer " + process.env.SL_API_KEY },
  responseType: "json",
});
