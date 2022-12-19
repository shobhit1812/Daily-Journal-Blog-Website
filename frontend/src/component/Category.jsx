import React from "react";
import { Button } from "react-bootstrap";

import { BsPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  return (
    <div
      className="mt-2"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Button
        variant="success"
        style={{
          padding: "0.3rem 0.6rem",
          borderRadius: "0.2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
        }}
        onClick={() => navigate("/myblogs")}
      >
        My Blogs
        <BsPencilFill />
      </Button>
      {/* write blogs */}

      <Button
        variant="primary"
        style={{
          padding: "0.3rem 0.6rem",
          borderRadius: "0.2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
        }}
        onClick={() => navigate("/write")}
      >
        Write Blog
        <BsPencilFill />
      </Button>
    </div>
  );
};

export default Category;
