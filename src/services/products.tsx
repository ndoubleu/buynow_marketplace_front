import baseInstance from ".";
export const getNewArrivals = async () => {
  try {
    const response = await baseInstance.get(`api/products`);
    const data = response.data;

    return data;
  } catch (error) {
  }  
}

export const fetchProducts = async (params?: { parent_category?: string; page?: number; }) => {
  try {
    const response = await baseInstance.get('api/products', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};