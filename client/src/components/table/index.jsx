import React, { useState } from "react";
import { Button, Space, Table, Modal } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api";

function TableComponent({ dataSource, getUsers }) {
  const navigate = useNavigate();
  const [modalToggle, setModalToggle] = useState(false);
  const [deletedUserId, setDeletedUserId] = useState(null);

  const handleDelete = () => {
    api
      .delete("http://localhost:5000/users/delete/" + deletedUserId)
      .then(setModalToggle(false))
      .then(() => getUsers());
  };

  const columns = [
    {
      title: "№",
      key: "number",
      render: (_, record, index) => {
        return <p key={index}>{++index}</p>;
      },
    },
    {
      title: "Name",
      dataIndex: "firstName",
      key: "name",
    },
    {
      title: "Sourname",
      dataIndex: "lastName",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record, index) => {
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
                setDeletedUserId(record.id);
                setModalToggle(true);
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
        scroll={{ x: window.screenX < 100 && 100 }}
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
