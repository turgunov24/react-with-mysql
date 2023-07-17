import React, { useEffect, useState } from "react";
import { Header } from "antd/es/layout/layout";
import { Button, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

function HeaderComponent() {
  const [currentPageData, setCurrentPageData] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname;
    const options = {
      type: "primary",
      style: { background: "#35A29F" },
      path: "/create",
      title: "Create",
    };
    if (
      pathname.includes("create") ||
      pathname.includes("update") ||
      pathname.includes("view")
    ) {
      options.path = "/";
      options.title = "Back";
    }
    setCurrentPageData(options);
  }, [location.pathname]);

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#071952",
        border: "1px solid #35A29F",
        borderRadius: 10,
      }}
    >
      <Typography.Title level={3} style={{ color: "#fff", margin: 0 }}>
        Users
      </Typography.Title>
      <Button
        type={currentPageData?.type}
        style={currentPageData?.style}
        onClick={() => navigate(currentPageData.path)}
      >
        {currentPageData?.title}
      </Button>
    </Header>
  );
}

export default HeaderComponent;
