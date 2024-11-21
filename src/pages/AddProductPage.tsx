import React from "react";
import AddProductForm from "../components/AddProductForm";

const AddProductPage: React.FC = () => {
  const setVisibleForm = (visible: boolean) => {
    console.log("Form visibility set to:", visible);
  };

  return (
    <div>
      <AddProductForm setVisibleForm={setVisibleForm} />
    </div>
  );
};

export default AddProductPage;