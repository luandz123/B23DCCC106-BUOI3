import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProduct } from "../redux/productsReducer";
import { RootState } from "../redux/store"; // Import kiểu RootState từ store

interface EditProductFormProps {
  setVisibleForm: (visible: boolean) => void;
  idSanPham: number;
}

const EditProductForm: React.FC<EditProductFormProps> = ({ setVisibleForm, idSanPham }) => {
  const product = useSelector((state: RootState) =>
    state.products.find((product) => product.id === idSanPham)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(Number(product.price));
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product) {
      dispatch(updateProduct({ id: product.id, name, price }));
      setVisibleForm(false);
      navigate("/products"); // Điều hướng về danh sách hàng hóa sau khi cập nhật
    }
  };

  return (
    <div className="form-container">
      <h2>Chỉnh Sửa Hàng Hóa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên hàng hóa"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Giá hàng hóa"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
        <button type="submit">Lưu Thay Đổi</button>
      </form>
      <button
        className="back-btn"
        onClick={() => {
          setVisibleForm(false);
        }}
      >
        Quay Lại
      </button>
    </div>
  );
};

export default EditProductForm;