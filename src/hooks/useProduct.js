import { useState, useEffect, useCallback } from "react";
import getProductById from "@/services/products/getProdutById";

const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProduct = useCallback(async () => {
    if (!productId) return;

    setIsLoading(true);
    try {
      const fetchedProduct = await getProductById(productId);
      setProduct(fetchedProduct);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return { product, error, isLoading };
};

export default useProduct;
