import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Unauthorized.css";

const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <div className="Unauthorized">
      <div>You Are Unauthorized</div>
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default Unauthorized;
