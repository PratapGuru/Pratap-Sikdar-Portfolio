const express = require("express");
const router = express.Router();

const {
  Intro,
  About,
  Project,
  Contact,
  Experience,
  Course,
  Education,
} = require("../models/PortFolioModel");
const { default: projects } = require("../front-end-part/src/data/project");
const User = require("../models/UserModal");

// get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const courses = await Course.find();
    const educations = await Education.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      contact: contacts[0],
      experience: experiences,
      courses: courses,
      educations: educations,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update Intro
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro Updated Sucessfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update Intro
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,

      success: true,
      message: "About Updated Sucessfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//add experience
router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Add Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//Update Experinces
router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience updated sucessfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
// delete experience
router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//add projects
router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project added Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update project
router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete project
router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: project,
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//admin login
router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    user.password = "";
    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login Successfully",
      });
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid Username or Password",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
