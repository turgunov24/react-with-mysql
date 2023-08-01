import React, { useEffect } from "react";
import { api } from "../../utils/api";
import { Typography, Space } from "antd";
import TableComponent from "../../components/table";
import { useState } from "react";

function Index() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    api
      .get("http://localhost:5000/users/index")
      .then((res) => setUsers(res?.data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Space direction="vertical" size="small" style={{ width: "100%" }}>
      <Typography.Title level={2}>Users</Typography.Title>
      <TableComponent dataSource={users} getUsers={getUsers} />
    </Space>
  );
}

export default Index;
