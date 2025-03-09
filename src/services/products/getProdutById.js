import axios from "axios";
import { API_ENDPOINTS } from "@/constants/baseUrl";

export const getProductById = async (id) => {
  try {
    if (!id) {
      throw new Error("Product ID is required");
    }

    const { data } = await axios.get(API_ENDPOINTS.PRODUCTS.SHOW(id));
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        switch (error.response.status) {
          case 404:
            throw new Error("Product not found");
          case 401:
            throw new Error("Unauthorized access");
          default:
            throw new Error(`Server error: ${error.response.status}`);
        }
      } else if (error.request) {
        throw new Error("Failed to connect to server");
      }
    }

    console.error("Error fetching product:", error);
    throw error;
  }
};

export default getProductById;
