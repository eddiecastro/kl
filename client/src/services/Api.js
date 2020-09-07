import axios from "axios";
import Axios from "axios";

import { BASE_URL } from "./Endpoints";

export default Axios.create({
  baseUrl: BASE_URL,
});
