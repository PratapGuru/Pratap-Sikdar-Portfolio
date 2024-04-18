// AdminIntro.js
import { Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ShowLoading,
  HideLoading,
  SetPortfolioData,
} from "../../Redux/RootSlice";
import axios from "axios";

function AdminIntro() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: portfolioData.intro._id,
      });
      console.log("API Response:", response.data);
      dispatch(HideLoading());
      if (response.data.success) {
        console.log("Dispatching new portfolio data:", response.data.data);
        message.success(response.data.message);
        // Update the Redux store
        dispatch(
          SetPortfolioData({
            ...portfolioData,
            intro: response.data.data,
          })
        );
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.intro}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <Input placeholder="Welcome Text"></Input>
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <Input placeholder="First Name"></Input>
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <Input placeholder="Last Name"></Input>
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <Input placeholder="Caption"></Input>
        </Form.Item>
        <Form.Item name="description" label="Description">
          <TextArea placeholder="Description"></TextArea>
        </Form.Item>
        <div className="flex justify-end w-full">
          <button
            className="px-10 py-2 border-[2px] text-white bg-slate-500 mt-2"
            type="submit"
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
