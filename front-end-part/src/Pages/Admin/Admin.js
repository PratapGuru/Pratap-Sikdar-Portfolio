import React, { useEffect } from "react";
import "./Admin.css";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbouts from "./AdminAbouts";
import { useSelector } from "react-redux";
import AdminExperience from "./AdminExperience";
import AdminProjects from "./AdminProject";
const { TabPane } = Tabs;

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "./admin-login";
    }
  }, []);
  return (
    <div>
      <h1 className="text-2xl p-5 text-darkGreyish">Portfolio Admin</h1>
      <h1
        className="underline text-darkGreyish cursor-pointer"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/admin-login";
        }}
      >
        LogOut
      </h1>
      {portfolioData && (
        <div className="mt-5 p-5">
          <Tabs defaultActiveKey="1" tabPosition="top">
            <TabPane tab="Intro" key="1">
              <AdminIntro />
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbouts />
            </TabPane>
            <TabPane tab="Experience" key="3">
              <AdminExperience />
            </TabPane>
            <TabPane tab="Projects" key="4">
              <AdminProjects />
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;
