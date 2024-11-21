import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import Table from "../components/Table";
import { deleteProduct } from "../redux/productsReducer";
import AddProductForm from "./AddProductForm";
import Button from "./Button";
import EditProductForm from "./EditProductForm";
import Tooltip from "./Tooltip";
import { RootState } from "../redux/store"; // Import kiểu RootState từ store

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const [visibleForm, setVisibleForm] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [idSanPham, setIdSanPham] = useState<number | undefined>(undefined);

  const columns = [
    { label: "Tên", field: "name" },
    { label: "Giá", field: "price" },
    {
      label: "Thao tác",
      field: "actions",
      width: "130",
      render: (row: any) => (
        <>
          <Button
            onClick={() => {
              setVisibleForm(true);
              setIsEdit(true);
              setIdSanPham(row.id);
            }}
            size="small"
            className="primary"
          >
            Chỉnh sửa
          </Button>

          <Tooltip
            content={"Sau khi xóa, dữ liệu sẽ không thể khôi phục lại được"}
            position="left"
          >
            <Button
              onClick={() => dispatch(deleteProduct(row.id))}
              style={{ marginLeft: 8 }}
              size="small"
              className="danger"
            >
              Xóa
            </Button>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <div>
      <Modal onClose={() => setVisibleForm(false)} isOpen={visibleForm}>
        {isEdit ? (
          <EditProductForm
            idSanPham={idSanPham!}
            setVisibleForm={setVisibleForm}
          />
        ) : (
          <AddProductForm setVisibleForm={setVisibleForm} />
        )}
      </Modal>
      <h1>Bảng Thông Tin</h1>
      <Tooltip
        content={
          products.length >= 2 ? "Chỉ được phép thêm tối đa 2 mặt hàng" : ""
        }
        position="right"
      >
        <Button
          disabled={products.length >= 2}
          style={{ marginBottom: 8 }}
          size="medium"
          onClick={() => {
            setVisibleForm(true);
            setIsEdit(false);
          }}
        >
          Thêm Hàng Hóa
        </Button>
      </Tooltip>
      <Table columns={columns} data={products}></Table>
    </div>
  );
};

export default ProductList;