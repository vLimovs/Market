import { create } from "zustand";
import axios from "axios";

const CurrentStore = create((set) => ({
    current: [],
    fetchCurrent: async (id) => {
        set({ current: [] });
        try {
            const url = `https://dummyjson.com/products/${id}`;
            const response = await axios.get(url);
            set({ current: response.data });
        } catch (error) {
            console.error("Ошибка при загрузке товара:", error);
        }
    }
}));

export default CurrentStore;
