import axios from "axios";
import { API_ENDPOINTS } from "@/constants/baseUrl";
import { handleAxiosError } from "@/utils/axiosHelpers";

export const getAllCategories = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.CATEGORIES.ALL, API_CONFIG);

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    return {
      data: null,
      error: errorMessage,
    };
  }
};
