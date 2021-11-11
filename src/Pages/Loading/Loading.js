import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div>
      <div className="mx-auto text-center p-5 my-5">
        <Spinner animation="border" variant="warning" />
      </div>
    </div>
  );
};

export default Loading;
