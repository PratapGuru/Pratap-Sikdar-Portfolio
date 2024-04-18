const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  welcomText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  descriptionOne: {
    type: String,
    required: true,
  },
  descriptionTwo: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
});

const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  instituteName: {
    type: String,
    required: true,
  },

  batch: {
    type: String,
    required: true,
  },
  course: {
    type: String,
  },
  marks: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  emailOne: {
    type: String,
    required: true,
  },
  emailTwo: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
  },
});

module.exports = {
  Intro: mongoose.model("intros", introSchema),
  About: mongoose.model("abouts", aboutSchema),
  Experience: mongoose.model("experiences", experienceSchema),
  Project: mongoose.model("projects", projectsSchema),
  Course: mongoose.model("courses", coursesSchema),
  Education: mongoose.model("educations", educationSchema),
  Contact: mongoose.model("contacts", contactSchema),
};
