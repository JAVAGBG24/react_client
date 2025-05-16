import api from "./axios";

// get all products
export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

// get products by size in stock
export const getProductsBySize = async (size) => {
  try {
    const response = await api.get(`/products/size/${size}/in-stock`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// get products by color
export const getProductsByColor = async (color) => {
  try {
    const response = await api.get(`/products/color/${color}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// get products by category
export const getProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// get products by price range
export const getProductsByPriceRange = async (minPrice, maxPrice) => {
  try {
    const response = await api.get(
      `/products/price-range?minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// get products by color and size
export const getProductsByColorAndSize = async (color, size) => {
  try {
    const response = await api.get(
      `/products/color/${color}/size/${size}/in-stock`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// get products by category and size
export const getProductsByCategoryAndSize = async (category, size) => {
  try {
    const response = await api.get(
      `/products/category/${category}/size/${size}/in-stock`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// get products by price range and size
export const getProductsByPriceRangeAndSize = async (
  minPrice,
  maxPrice,
  size
) => {
  try {
    const response = await api.get(
      `/products/price-range/size/${size}/in-stock?minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// main filtering function that calls the appropriate endpoint based on filters
export const getFilteredProducts = async (filters = {}) => {
  try {
    const { size, inStock, category, color, minPrice, maxPrice } = filters;

    // handle different filter combinations
    if (size && category) {
      return await getProductsByCategoryAndSize(category, size);
    } else if (size && color) {
      return await getProductsByColorAndSize(color, size);
    } else if (size && minPrice && maxPrice) {
      return await getProductsByPriceRangeAndSize(minPrice, maxPrice, size);
    } else if (size) {
      return await getProductsBySize(size);
    } else if (category) {
      return await getProductsByCategory(category);
    } else if (color) {
      return await getProductsByColor(color);
    } else if (minPrice && maxPrice) {
      return await getProductsByPriceRange(minPrice, maxPrice);
    }

    // default: get all products
    const products = await getAllProducts();

    // client-side filtering for inStock if needed
    if (inStock !== undefined) {
      return products.filter((product) => product.inStock === inStock);
    }

    return products;
  } catch (error) {
    console.error("Error fetching filtered products:", error);
    throw error;
  }
};
