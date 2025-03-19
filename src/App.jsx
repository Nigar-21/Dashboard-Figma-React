import { useState } from 'react'
import Header from './components/header'
import "./assets/scss/main.scss"
import Content from "./components/content"
import Nav from "./components/nav"
import Profile from "./components/profile"
import Home from "./components/home"
import Main from "./components/main";
import ContentHeader from "./components/contentHeader";
import 'antd/dist/reset.css';  // Ant Design yeni versiyalar üçün
import Calendar from "./components/calendar";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev)};
    
    const onPanelChange = (value, mode) => {
      console.log(value.format('YYYY-MM-DD'), mode);
    };
  

  return (
    <Router>
    <>
    <Header  isOpen={isOpen} toggleSidebar={toggleSidebar} />
    
    <Content>
    <Nav isOpen={isOpen} />
    <Profile isOpen={isOpen}/>
   <Main>
  <ContentHeader/>
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
   </Main>
   </Content>
 
    </>
    </Router>
  )
}

export default App
