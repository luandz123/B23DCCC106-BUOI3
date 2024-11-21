import React, { useEffect, useState } from "react";
import EditProductForm from "../components/EditProductForm";

const EditProductPage: React.FC = () => {
  const [productId, setProductId] = useState<number>(0);

  // This could come from a route parameter or other logic
  useEffect(() => {
    // Example: Fetch the product ID from URL or other source
    const fetchedId = 1; // Replace with actual logic to get the product ID (e.g., from URL)
    setProductId(fetchedId);
  }, []);

  // Render the EditProductForm only if a valid idSanPham is present
  if (productId === 0) {
    return <div>Invalid Product ID</div>;
  }

  return (
    <div>
      <EditProductForm setVisibleForm={() => {}} idSanPham={productId} />
    </div>
  );
};

export default EditProductPage;
