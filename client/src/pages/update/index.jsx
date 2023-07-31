import { Button, Form, Input, Space } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function UpdatePage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/users/update/" + id)
      .then((res) => res.json())
      .then((data) => setUser(data[0]));
  }, []);

  const handleUpdate = (values) => {
    fetch("http://localhost:5000/users/update/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
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
        <Form.Item
          required
          label="Username"
          name="username"
          initialValue={user?.username}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="FirstName"
          name="firstName"
          initialValue={user?.firstName}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="LastName"
          name="lastName"
          initialValue={user?.lastName}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" initialValue={user?.email}>
          <Input />
        </Form.Item>
        <Form.Item
          required
          label="Password"
          name="password"
          initialValue={user?.password}
        >
          <Input />
        </Form.Item>
        <Form.Item
          required
          label="ConfirmPassword"
          name="confirmPassword"
          initialValue={user?.confirmPassword}
        >
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
