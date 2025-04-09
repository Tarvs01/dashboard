import './App.css'
import Sidebar from './components/Sidebar'
import MainContainer from './pages/MainContainer'
import UtilityBar from './components/UtilityBar'
import Analytics from './pages/Analytics'
import Contacts from './pages/Contacts'
import Mail from './pages/Mail'
import CalendarPage from './pages/CalendarPage'
import Settings from './pages/Settings'
import Products from './pages/Products'
import Error from './pages/Error'
import { useState, useEffect } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState("");
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

  useEffect(() => {
    let url = window.location.href;
    console.log("url is", url);
    let fullPath = new URL(url).pathname;
    console.log("full path is ", fullPath);

    //Remove this check if paths can be deeper
    if(fullPath.split("/").length > 2){
      setCurrentPage("Error");
      return;
    }

    let path = fullPath.split("/")[1];
    console.log("path is ", path);
    if(path === ""){
      setCurrentPage("Dashboard");
    }
    else{
      setCurrentPage(path[0].toUpperCase() + path.slice(1));
    }
  }, []);

  let pages = ["", "Dashboard", "Analytics", "Contacts", "Mail", "Calendar", "Products", "Settings"];
  if(!pages.includes(currentPage)){
    return (<Error />)
  }

  console.log("current page is ", currentPage);
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
        {currentPage === "Products" && <Products />}
        {currentPage === "Settings" && <Settings />}
      </main>
    </div>
  )
}

export default App
