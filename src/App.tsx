import './App.css'
import Sidebar from './components/Sidebar'
import MainContainer from './components/MainContainer'
import UtilityBar from './components/UtilityBar'
import Analytics from './components/Analytics'
import Contacts from './components/Contacts'
import Mail from './components/Mail'
import Calendar from './components/Calendar'
import Settings from './components/Settings'
import { useState, useEffect } from 'react'

function App() {
  type pages = "Dashboard" | "Analytics" | "Contacts" | "Mail" | "Calendar" | "Settings";
  const [currentPage, setCurrentPage] = useState<pages>("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function setSize() {
    setWindowWidth(window.innerWidth);
    if(window.innerWidth > 530){
      setIsSidebarOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", setSize);

    return () => window.removeEventListener("resize", setSize);
  });

  return (
    <div className='container'>
      <Sidebar setPage={setCurrentPage} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <main>
        <UtilityBar titleText={currentPage} isSearchVisible={currentPage != "Contacts"} openSidebar={setIsSidebarOpen} />
        {currentPage === "Dashboard" && <MainContainer width={windowWidth} />}
        {currentPage === "Analytics" && <Analytics />}
        {currentPage === "Contacts" && <Contacts />}
        {currentPage === "Mail" && <Mail />}
        {currentPage === "Calendar" && <Calendar />}
        {currentPage === "Settings" && <Settings />}
      </main>
    </div>
  )
}

export default App
