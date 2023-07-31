import React, { useState } from "react";
import { Button, Space, Table, Modal } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function TableComponent({ dataSource }) {
  const navigate = useNavigate();
  const [modalToggle, setModalToggle] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  const handleDelete = async (id) => {
    await fetch("http://localhost:5000/users/delete/1");
    await setModalToggle(false);
    await navigate("/");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "name",
    },
    {
      title: "Name",
      dataIndex: "lastName",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="small">
            <Button
              style={{
                color: "#FFA559",
              }}
              type="text"
              onClick={() => navigate("/view/" + record.id)}
            >
              <EyeOutlined />
            </Button>
            <Button
              style={{
                color: "#35A29F",
              }}
              type="text"
              onClick={() => navigate("/update/" + record.id)}
            >
              <EditOutlined />
            </Button>
            <Button
              style={{
                color: "#EF6262",
              }}
              type="text"
              onClick={() => {
                setModalToggle((prev) => !prev);
              }}
            >
              <DeleteOutlined />
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <Modal
        confirmLoading={false}
        open={modalToggle}
        onCancel={() => setModalToggle(false)}
        okType="primary"
        onOk={handleDelete}
      >
        Do you want to delete this user ?
      </Modal>
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        pagination={false}
        style={{ width: "100%" }}
      />
    </>
  );
}

export default TableComponent;
