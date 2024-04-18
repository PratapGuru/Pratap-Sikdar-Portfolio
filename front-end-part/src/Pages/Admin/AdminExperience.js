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

function AdminExperience() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experience: experiences } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);

  const onFinish = async (values) => {
    // Corrected arrow function syntax
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-experience", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-experience", values);
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
      const response = await axios.post("/api/portfolio/delete-experience", {
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
          Add Experience
        </Button>
      </div>
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="shadow border p-5 gap-5 border-grey-400 ml-5 mr-5 flex flex-col"
        >
          <h1 className="text-darkGrey text-xl">{experience.period}</h1>
          <hr />
          <h1>Company: {experience.company}</h1>
          <h1>Title: {experience.title}</h1>
          <h1>Description: {experience.description}</h1>
          <div className="flex justify-end">
            <Button
              className="ml-5 mr-5"
              onClick={() => {
                setSelectedItemForEdit(experience);
                setShowAddEditModal(true);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                onDelete(experience);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}

      <Modal
        visible={showAddEditModal}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        footer={null}
        onCancel={() => setShowAddEditModal(false)}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={selectedItemForEdit}
        >
          <Form.Item name="period" label="Enter the Period">
            <Input placeholder="Period" />
          </Form.Item>
          <Form.Item name="company" label="Enter the Company">
            <Input placeholder="Company" />
          </Form.Item>
          <Form.Item name="title" label="Enter the Title">
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item name="description" label="Enter the Description">
            <TextArea placeholder="Description" />
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

export default AdminExperience;
