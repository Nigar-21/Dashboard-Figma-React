import { useState } from 'react'
import Header from './components/header'
import "./assets/scss/main.scss"
import Content from "./components/content"
import Nav from "./components/nav"
import Profile from "./components/profile"
import Home from "./components/home"
import 'antd/dist/reset.css';  // Ant Design yeni versiyalar üçün
import Calendar from "./components/calendar"


function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev)};
    
    const onPanelChange = (value, mode) => {
      console.log(value.format('YYYY-MM-DD'), mode);
    };
  

  return (
    <>
    <Header  isOpen={isOpen} toggleSidebar={toggleSidebar} />
    <Content>
    <Nav isOpen={isOpen} />
    <Profile isOpen={isOpen}/>
    <Calendar onPanelChange={onPanelChange}/>
   </Content>
    </>
  )
}

export default App
