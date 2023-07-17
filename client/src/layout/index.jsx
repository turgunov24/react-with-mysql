import { Content } from "antd/es/layout/layout";
import Layout from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import React from "react";
import HeaderComponent from "../components/header";
import { Space } from "antd";

function MainLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Space direction="vertical" size="small">
        <HeaderComponent />
        <Layout>
          <Content style={{ padding: "0px 30px" }}>
            <Outlet />
          </Content>
        </Layout>
      </Space>
    </Layout>
  );
}

export default MainLayout;
