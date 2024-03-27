const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors package

const app = express();
app.use(cors()); // Use cors middleware to enable CORS

const port = 5000;

// localhost:27017
mongoose
  .connect("mongodb://localhost/todos")
  .then(() => console.log(successful))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Shuvo Portfolio Next+Express");
});

app.get("/projects", (req, res) => {
  const projectsData = [
    {
      id: 1,
      title: "Excel It AI Ltd Portfolio Website",
      description:
        "Creating a website for a software development company involves showcasing the company's expertise, services, projects, and how they stand out in the tech industry. The website should serve as a digital portfolio and a point of contact for potential clients, partners, and employees. ",
      image: "/images/myprojects/1.png",
      tag: ["All", "Other"],
      gitUrl: "/",
      previewUrl: "https://excelitai.com/",
    },
    {
      id: 2,
      title: "Munshiganj Land Project",
      description:
        "For a real estate developers company like the one involved in the Munshiganj Land Project, creating or utilizing a comprehensive software solution tailored for administrative purposes is crucial for efficiency, project management, and customer satisfaction. Such a software would ideally encompass various functionalities to streamline operations, from project planning and execution to sales, customer management, and post-sales services.",
      image: "/images/myprojects/2.png",
      tag: ["All", "React"],
      gitUrl: "/",
      previewUrl: "https://munshiganj.excelitportfolio.com/",
    },
    {
      id: 3,
      title: "Parcel Star",
      description:
        "Creating a website for a courier company like Parcel Star involves focusing on functionality, user experience, and the specific services that set the company apart in the logistics and delivery market.",
      image: "/images/myprojects/3.png",
      tag: ["All", "Other"],
      gitUrl: "/",
      previewUrl: "https://www.parcelstar.com.bd/",
    },
    {
      id: 4,
      title: "Velocita Infosys Limited",
      description:
        "Velocita Infosys Limited, as an international call center service provider, operates at the forefront of customer relationship management and outsourcing solutions. With a focus on delivering high-quality customer service, technical support, and back-office services, Velocita Infosys is dedicated to helping businesses around the globe optimize their customer interactions and operational efficiencies.",
      image: "/images/myprojects/4.png",
      tag: ["All", "Next"],
      gitUrl: "/",
      previewUrl: "https://velocitainfosys.com/",
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      description:
        "Creating a personal portfolio website is a great way to showcase your work, skills, and professional journey to potential employers, clients, or collaborators",
      image: "/images/myprojects/5.png",
      tag: ["All", "Next"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];
  res.send(projectsData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
