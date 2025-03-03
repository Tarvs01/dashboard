import './App.css'
import Sidebar from './components/Sidebar'
import MainContainer from './pages/MainContainer'
import UtilityBar from './components/UtilityBar'
import Analytics from './pages/Analytics'
import Contacts from './pages/Contacts'
import Mail from './pages/Mail'
import CalendarPage from './pages/CalendarPage'
import Settings from './pages/Settings'
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
        <UtilityBar width={windowWidth} titleText={currentPage} isSearchVisible={currentPage != "Contacts"} openSidebar={setIsSidebarOpen} />
        {currentPage === "Dashboard" && <MainContainer width={windowWidth} />}
        {currentPage === "Analytics" && <Analytics />}
        {currentPage === "Contacts" && <Contacts />}
        {currentPage === "Mail" && <Mail />}
        {currentPage === "Calendar" && <CalendarPage />}
        {currentPage === "Settings" && <Settings />}
      </main>
    </div>
  )
}

export default App
