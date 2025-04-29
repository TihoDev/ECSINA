import { getAllCategories } from "@/services/categories/getAllCategories";
import { useState, useEffect, useCallback } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await getAllCategories();
      setCategories(data);
      setError(null);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { categories, error, isLoading };
};

export default useCategories;
