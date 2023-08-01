import { Button, Form, Input, Space, Spin } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../utils/api";

function UpdatePage() {
  const { id } = useParams();
  const [form] = Form.useForm();
  const { setFieldsValue } = form;
  const navigate = useNavigate();

  useEffect(() => {
    api.get("http://localhost:5000/users/view/" + id).then((res) => {
      setFieldsValue({
        username: res.data[0]?.username,
        firstName: res.data[0]?.firstName,
        lastName: res.data[0]?.lastName,
        email: res.data[0]?.email,
        password: res.data[0]?.password,
        confirmPassword: res.data[0]?.confirmPassword,
      });
    });
  }, []);

  const handleUpdate = (values) => {
    api
      .put("http://localhost:5000/users/update/" + id, values)
      .then(navigate("/"));
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
        form={form}
        onFinish={handleUpdate}
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
        <Form.Item required label="Username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="FirstName" name="firstName">
          <Input />
        </Form.Item>
        <Form.Item label="LastName" name="lastName">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item required label="Password" name="password">
          <Input />
        </Form.Item>
        <Form.Item required label="ConfirmPassword" name="confirmPassword">
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
