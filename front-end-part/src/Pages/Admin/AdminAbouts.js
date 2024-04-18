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

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
      });
      console.log("API Response:", response.data);
      dispatch(HideLoading());
      if (response.data.success) {
        console.log("Dispatching new portfolio data:", response.data.data);
        message.success(response.data.message);
        dispatch(
          SetPortfolioData({
            ...portfolioData,
            about: response.data.data,
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
        initialValues={portfolioData.about}
      >
        <Form.Item name="image" label="Profile Photo">
          <Input placeholder="Profile Photo Link"></Input>
        </Form.Item>
        <Form.Item name="descriptionOne" label="Description One">
          <TextArea placeholder="Description One"></TextArea>
        </Form.Item>
        <Form.Item name="descriptionTwo" label="Description Two">
          <TextArea placeholder="Description Two"></TextArea>
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

export default AdminAbout;
