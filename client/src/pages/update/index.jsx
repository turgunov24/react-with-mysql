import { Button, Form, Input, Space } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdatePage() {
  const params = useParams();

  useEffect(() => {
    fetch("http://localhost:5173/users/" + params.id)
      .then((res) => res.json())
      .then((data) => console.log(data));
  },[]);

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <Form
        layout="vertical"
        autoComplete="off"
        style={{
          width: "370px",
          background: "white",
          boxShadow: "",
          padding: "20px",
          border: "2px solid #001C30",
          borderRadius: 10,
        }}
      >
        <Form.Item required label="Username">
          <Input />
        </Form.Item>
        <Form.Item label="FirstName">
          <Input />
        </Form.Item>
        <Form.Item label="LastName">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item required label="Password">
          <Input />
        </Form.Item>
        <Form.Item required label="ConfirmPassword">
          <Input />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          style={{ width: "100%" }}
        >
          Submit
        </Button>
      </Form>
    </Space>
  );
}

export default UpdatePage;
