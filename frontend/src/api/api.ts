import axios from "axios";
import { CONFIGS } from "../config";

export const Request = axios.create({
	baseURL: CONFIGS.API_URL,
});
