import axios from "axios";
import { API_ENDPOINTS } from "@/constants/baseUrl";

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get(API_ENDPOINTS.CATEGORIES.ALL);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        switch (error.response.status) {
          case 404:
            throw new Error("Categories not found");
          case 401:
            throw new Error("Unauthorized access");
          default:
            throw new Error(`Server error: ${error.response.status}`);
        }
      } else if (error.request) {
        throw new Error("Failed to connect to server");
      }
    }

    console.error("Error fetching categories:", error);
    throw error;
  }
};

export default getAllCategories;
