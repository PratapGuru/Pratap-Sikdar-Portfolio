// App.js
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  ShowLoading,
  HideLoading,
  SetPortfolioData,
  ReloadData,
} from "./Redux/RootSlice";
import { motion, useScroll, useSpring } from "framer-motion";

import "./App.css";
import Home from "./Pages/HomePage/Home";
import Loader from "./Components/Loader";
import Admin from "./Pages/Admin/Admin";
import AdminLogin from "./Pages/Admin/AdminLogin";

function App() {
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      console.error(error);
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [reloadData]);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          originX: 0,
          backgroundColor: "#66CCCC",
          height: "5px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
