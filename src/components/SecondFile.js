import React from "react";
import { useNavigate } from "react-router-dom";

export const SecondFile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>SecondFile</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};
