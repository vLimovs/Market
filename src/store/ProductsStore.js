import { create } from "zustand";
import axios from "axios";

const ProductsStore = create((set) => ({
    data: [],
    fetchData: async (amount, page, sortBy = 'title', order = 'asc') => {
        try {
            const url = `https://dummyjson.com/products?limit=${amount}&skip=${page}&sortBy=${sortBy}&order=${order}`;
            const response = await axios.get(url);
            set({ data: response.data.products });
        } catch (error) {
            console.error('Ошибка загрузки товаров:', error);
        }
    }
}));

export default ProductsStore;
