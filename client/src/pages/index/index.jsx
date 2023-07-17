import React, { useEffect } from "react";
import fetchAction from "../../utils/api";
import { Typography, Space } from "antd";
import TableComponent from "../../components/table";
import axios from "axios";

function Index() {
  useEffect(() => {
    // fetchAction("http://localhost:5173/users/index");
    fetch("http://localhost:5173/users/index")
      .then((res) => res.text())
      .then((data) => console.log(data));
    // axios
    //   .get("http://localhost:5173/users/index", {
    //     headers: { "Content-Type": "application/json" },
    //   })
    //   .then((res) => console.log(res.data));
  }, []);

  return (
    <Space direction="vertical" size="small" style={{ width: "100%" }}>
      <Typography.Title level={2}>Users</Typography.Title>
      <TableComponent />
    </Space>
  );
}

export default Index;
