import React from "react";
import { useParams } from "react-router-dom";

function ViewPage() {
  const params = useParams();
  return <div>ViewPage : {params.id}</div>;
}

export default ViewPage;
