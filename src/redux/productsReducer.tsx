import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa kiểu cho sản phẩm
interface Product {
  id: number;
  name: string;
  price: number;
}

// Lấy danh sách hàng hóa từ localStorage khi khởi động
const loadProductsFromLocalStorage = (): Product[] => {
  const products = localStorage.getItem("products");
  return products ? JSON.parse(products) : [];
};

// Lưu danh sách hàng hóa vào localStorage
const saveProductsToLocalStorage = (products: Product[]) => {
  localStorage.setItem("products", JSON.stringify(products));
};

const productsSlice = createSlice({
  name: "products",
  initialState: loadProductsFromLocalStorage() as Product[], // Khởi tạo từ localStorage
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const updatedState = [...state, action.payload];
      saveProductsToLocalStorage(updatedState); // Lưu vào localStorage
      return updatedState;
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      const updatedState = state.filter(
        (product) => product.id !== action.payload
      );
      saveProductsToLocalStorage(updatedState); // Lưu vào localStorage
      return updatedState;
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const { id, name, price } = action.payload;
      const updatedState = state.map((product) =>
        product.id === id ? { ...product, name, price } : product
      );
      saveProductsToLocalStorage(updatedState); // Lưu vào localStorage
      return updatedState;
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;