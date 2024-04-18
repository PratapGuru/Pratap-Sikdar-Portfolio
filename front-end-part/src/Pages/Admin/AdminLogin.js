import { Button, Input, message } from "antd";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../Redux/RootSlice";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const login = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/admin-login", user);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", JSON.stringify(response.data)); // assuming token is the correct property
        window.location.href = "/admin";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(
        error.response?.data.message || "An unexpected error occurred"
      );
      dispatch(HideLoading());
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-lightGrey">
      <div className="w-96 flex gap-5 p-5 shadow border border-accentColorOne flex-col ">
        <h1 className="text-2xl">Admin Login</h1>
        <hr />
        <label>Username</label>
        <Input
          placeholder="Username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label>Password</label>
        <Input
          placeholder="Password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          className="bg-darkGreyish"
          type="primary"
          onClick={login}
          disabled={!user.username || !user.password}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default AdminLogin;
