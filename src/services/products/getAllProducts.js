import axios from "axios";
import { API_ENDPOINTS, API_CONFIG } from "@/constants/baseUrl";

export const getAllProducts = async (page = 1, category = null) => {
  try {
    let url = `${API_ENDPOINTS.PRODUCTS.ALL}?page=${page}`;

    if (category) {
      url += `&category_id=${category}`;
    }

    const { data } = await axios.get(url, API_CONFIG);

    if (!data) {
      throw new Error("No data received from server");
    }

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        switch (error.response.status) {
          case 404:
            throw new Error("No products found");
          case 401:
            throw new Error("Unauthorized access");
          default:
            throw new Error(`Server error: ${error.response.status}`);
        }
      } else if (error.request) {
        throw new Error("Error communicating with the server.");
      }
    }

    console.error("Error fetching products:", error);
    throw error;
  }
};

export default getAllProducts;
