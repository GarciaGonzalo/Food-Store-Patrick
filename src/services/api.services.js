import axios from "axios";

const apiUrl = "https://6293fe117aa3e6af1a1328fb.mockapi.io";

export const apiServices = {
  getUsers: async () => {
    try {
      const res = await axios.get(`${apiUrl}/Users`);
      return res.data;
    } catch (err) {
      document.write(err);
    }
  },
  postUser: async (newUser) => {
    try {
      const res = await axios.post(`${apiUrl}/Users`, newUser);
      return res.data;
    } catch (err) {
      document.write(err);
    }
  },
  getProducts: async () => {
    try {
      const res = await axios.get(`${apiUrl}/Products`);
      return res.data;
    } catch (err) {
      document.write(err);
    }
  },
  getProductById: async (productId) => {
    try {
      const res = await axios.get(`${apiUrl}/Products`);
      return res.data.find((item) => item.id == productId);
    } catch (err) {
      document.write(err);
    }
  },
  postProduct: async (newProduct) => {
    try {
      const res = await axios.post(`${apiUrl}/Products`, newProduct);
      return res.data;
    } catch (err) {
      document.write(err);
    }
  },
  updateProduct: async (productId, newProduct) => {
    try {
      const res = await axios.put(
        `${apiUrl}/Products/${productId}`,
        newProduct
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
  deleteProduct: async (productId) => {
    try {
      await axios.delete(`${apiUrl}/Products/${productId}`);
    } catch (err) {
      console.log(err);
    }
  },
  getUserOrders: async (userId) => {
    try {
      const res = await axios.get(`${apiUrl}/Users/${userId}/Orders`);
      return res.data;
    } catch (err) {
      document.write(err);
    }
  },
  postUserOrder: async (userId, newOrder) => {
    try {
      const res = await axios.post(
        `${apiUrl}/Users/${userId}/Orders`,
        newOrder
      );
      return res.data;
    } catch (err) {
      document.write(err);
    }
  },
  postUserComment: async (formData) => {
    try {
      await axios.post(
        `${apiUrl}/Suggestions-qualifications`,
        formData
      );
    } catch (err) {
      console.error(err);
    }
  }
};
