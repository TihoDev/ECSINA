export const BASE_URL = "https://api.exin.exiness.com";
export const API_VERSION = "api";

export const API_ENDPOINTS = {
  PRODUCTS: {
    SHOW: (id) => `${BASE_URL}/${API_VERSION}/products/show/${id}`,
  },
  CATEGORIES: {
    ALL: `${BASE_URL}/${API_VERSION}/category`,
  },
};
