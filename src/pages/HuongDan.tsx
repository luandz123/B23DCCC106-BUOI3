import React from "react";

const HuongDan: React.FC = () => {
  return (
    <div className="demo-container">
      <div className="demo-link">
        <b>Link Demo:</b>{" "}
        <a
          href="https://thuchanh-buoi2.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://thuchanh-buoi2.vercel.app/
        </a>
      </div>
      <div className="demo-requirements">
        <b>Yêu cầu:</b>
        <ul>
          <li>
            Tên Repo trên git: <b>Mã SV-Buoi2</b>, VD: <b>B23DCCN331-Buoi2</b>
          </li>
          <li>
            Email: <b>phanquangthanh0217@gmail.com</b> hoặc username:{" "}
            <b>thanhpq1702</b>
          </li>
          <li>Bắt buộc sử dụng Redux, React Router</li>
        </ul>
      </div>
    </div>
  );
};

export default HuongDan;