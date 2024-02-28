import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";
export default function Loading() {
  return (
    <div className="loading-container">
      <ReactLoading type={"spin"}  color={"#black"} height={100} width={100} />
    </div>
  );
}
