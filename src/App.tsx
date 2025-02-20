import './App.css'
import Sidebar from './components/Sidebar'
import MainContainer from './components/MainContainer'
import UtilityBar from './components/UtilityBar'
import Analytics from './components/Analytics'
import Contacts from './components/Contacts'
import Mail from './components/Mail'
import Calendar from './components/Calendar'
import Settings from './components/Settings'
import { useState } from 'react'

function App() {
  type pages = "Dashboard" | "Analytics" | "Contacts" | "Mail" | "Calendar" | "Settings";
  const [currentPage, setCurrentPage] = useState<pages>("Dashboard")

  return (
    <div className='container'>
      <Sidebar setPage={setCurrentPage}/>
      <main>
        <UtilityBar titleText={currentPage} isSearchVisible={currentPage != "Contacts"} />
        {currentPage === "Dashboard" && <MainContainer />}
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
