import React, { useState } from "react";
import { Button, Space, Table, Modal } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function TableComponent() {
  const navigate = useNavigate();
  const [modalToggle, setModalToggle] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      email: "example@gmail.com",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Street",
      email: "example@gmail.com",
    },
    {
      key: "3",
      name: "Sarah",
      age: 28,
      address: "123 Main Street",
      email: "example@gmail.com",
    },
    {
      key: "4",
      name: "Emily",
      age: 35,
      address: "456 Elm Street",
      email: "example@gmail.com",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
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
              onClick={() => navigate("/view/" + record.key)}
            >
              <EyeOutlined />
            </Button>
            <Button
              style={{
                color: "#35A29F",
              }}
              type="text"
              onClick={() => navigate("/update/" + record.key)}
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
                console.log("record: ", record.id);
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
        // onOk={setModalToggle(false)}
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
