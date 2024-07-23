import React from 'react'
import All from './components/All'
import Career from './components/Career'
import CyberSecurity from './components/CyberSecurity'
import DataScience from './components/DataScience'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fsd from "./components/Fsd"
import Navbar from './components/Navbar'
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  let data=[{
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
    title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
    text:"When you're hiring a full-stack developer, what are the most important things you look for?",
    date:"24 February 2024",
    category:"MERN Stack"

  },
  {
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
  title:"Top Differences: Full Stack Developer vs Software Engineer 2024",
  text:"A Full Stack Developer is a tech all-rounder. They work on both the front and",
  date:"25 February 2024",
  category:"MERN Stack"
},
{
  
  image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
  title:"Horizontal vs Vertical Scaling for Efficient System Design",
  text:"In the world of system design, envision a digital skyscraper - a multifaceted structure built",
  date:"26 February 2024",
  category:"MERN Stack"
  },
  {
  
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
    title:"How Long Would It Take to Be a Full Stack Developer?",
    text:"Have you ever wondered how much time it would take to become a skilled Full Stack Developer?",
    date:"28 February 2024",
    category:"MERN Stack"
    },

  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-Ways-To-Use-AI-in-UX-Design.webp",
    title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
    text:"Are you someone who's not interested in coding, but wants to get placed in tech",
      date: "22 January 2024",
      category:"Data Science"
   },
   {
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
    title: "Top Product-Based Companies for Data Science Freshers",
    text: "In today's data-driven world, data science has emerged as a crucial field, with companies harnessing",
    date: "10 May 2024",
    category:"Data Science"
  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-Ways-To-Use-AI-in-UX-Design.webp",
    title: "How to become a Data Scientist after Mechanical Engineering?",
    text:"Switching careers can sound quite intimidating especially when you’re a mechanical engineer by educational qualification.",
      date: "28 January 2024",
      category:"Data Science"
   },
  {
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
    title: "What is the Difference between Data Science and Data Engineering?",
    text:"India has been making some serious waves in the world of data. Just like the",
    date: "14 February 2024",
    category:"Data Science"
  },
  {
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    text:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
    date: "04 May 2024",
    category:"Cyber-Security"
  },
  {
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    title: "What Is Hacking? Types of Hacking & More",
    text: "Have you ever wondered what hacking is all about? It's a big deal in today,s",
    date: "25 May 2024",
    category:"Cyber-Security"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title: "8 Different Types of Cybersecurity and Threats Involved",
      text:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks.",
      date: "07 April 2024",
      category:"Cyber-Security"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title: "What Is Hacking? Types of Hacking & More",
      text: "Have you ever wondered what hacking is all about? It's a big deal in today,s",
      date: "30 April 2024",
      category:"Cyber-Security"
      },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      title: "Top 5 IT Jobs for Economics Students",
      text:"In today's digital age, the intersection of economics and technology offers exciting career opportunities for",
      date: "04 April 2024",
      category:"Career"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      text:"With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      date: "04 march 2024",
      category:"Career"
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      title: "Automation Test Engineer Resume: 10 Important Things To Consider",
     text: "The world is moving towards automating the testing of products in order to increase work",
      date: "03 march 2024",
      category:"Career"
    }
]
  return <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/all'element={<All data={data}/>}></Route>
      <Route path='/career'element={<Career data={data}/>}></Route>
      <Route path='/cybersecurity'element={<CyberSecurity data={data}/>}></Route>
      <Route path='/datascience'element={<DataScience data={data}/>}></Route>
      <Route path='/mern'element={<Fsd data={data}/>}></Route>
      <Route path='/*'element={<Navigate to='/all'/>}></Route>

    </Routes>
    </BrowserRouter>



  </>
    
  
}

export default App;