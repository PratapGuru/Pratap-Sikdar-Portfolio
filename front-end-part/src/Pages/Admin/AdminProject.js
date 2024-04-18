import { Button, Form, Input, Modal, message } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ShowLoading,
  HideLoading,
  SetPortfolioData,
  ReloadData,
} from "../../Redux/RootSlice";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";

function AdminProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);

  const onFinish = async (values) => {
    // Corrected arrow function syntax
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-project", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  }; // Corrected to close the onFinish function properly

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-project", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
      <div className="flex justify-end">
        <Button
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Project
        </Button>
      </div>
      {projects.map((project) => (
        <div
          key={project.id}
          className="shadow border p-5 gap-5 border-grey-400 ml-5 mr-5 flex flex-col"
        >
          <h1 className="text-darkGrey text-xl">{project.title}</h1>
          <hr />
          <img
            src={project.image}
            alt="Project Image"
            className="h-60 w-80"
          ></img>
          <h1>Description: {project.description}</h1>
          <h1>Link: {project.link}</h1>
          <div className="flex justify-end">
            <Button
              className="ml-5 mr-5"
              onClick={() => {
                setSelectedItemForEdit(project);
                setShowAddEditModal(true);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                onDelete(project);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}

      <Modal
        visible={showAddEditModal}
        title={selectedItemForEdit ? "Edit Project" : "Add Project"}
        footer={null}
        onCancel={() => setShowAddEditModal(false)}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={selectedItemForEdit}
        >
          <Form.Item name="title" label="Title">
            <Input placeholder="title" />
          </Form.Item>
          <Form.Item name="image" label="Image Url">
            <Input placeholder="Image" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <TextArea placeholder="Description" />
          </Form.Item>
          <Form.Item name="link" label="Link">
            <Input placeholder="Link" />
          </Form.Item>

          <div className="flex justify-end">
            <Button
              className="ml-5 mr-5"
              onClick={() => {
                setShowAddEditModal(false);
              }}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              {selectedItemForEdit ? "Update" : "Add"}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminProjects;
