import React from "react";
import { Button, Form, Input, Space } from "antd";
import { api } from "../../utils/api";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    api
      .post("http://localhost:5000/users/create", values)
      .then((res) => navigate("/"));
  };

  const onSubmitFailed = (error) => {
    console.log("error: ", error);
  };

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
        onFinish={onSubmit}
        onFinishFailed={onSubmitFailed}
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
        <Form.Item required name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="firstName" label="FirstName">
          <Input />
        </Form.Item>
        <Form.Item name="lastName" label="LastName">
          <Input />
        </Form.Item>
        <Form.Item name="Email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="Password" required label="Password">
          <Input />
        </Form.Item>
        <Form.Item name="ConfirmPassword" required label="ConfirmPassword">
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

export default CreatePage;
