import { useState, useEffect } from "react";
import { getAllCategories } from "@/services/categories/getAllCategories";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await getAllCategories();
        setCategories(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchCategories();
  }, []);

  return { categories, error };
};

export default useCategories;
