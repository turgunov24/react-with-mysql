import React, { useEffect } from "react";
import fetchAction from "../../utils/api";
import { Typography, Space } from "antd";
import TableComponent from "../../components/table";
import { useState } from "react";

function Index() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetchAction("http://localhost:5173/users/index");

    fetch("http://localhost:5000/users/index")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Space direction="vertical" size="small" style={{ width: "100%" }}>
      <Typography.Title level={2}>Users</Typography.Title>
      <TableComponent dataSource={users} />
    </Space>
  );
}

export default Index;
