import baseInstance from ".";
export const getCategories = async () => {
  try {
    const response = await baseInstance.get(`api/categories`);
    const data = response.data;

    return data;
  } catch (error) {
  }  
}
