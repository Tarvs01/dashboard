import {useState} from 'react'

function SalesReport() {

  const earningsData: {[index:string]: number} = {
    sun: Math.floor(Math.random() * 12500) + 2500,
    mon: Math.floor(Math.random() * 12500) + 2500,
    tue: Math.floor(Math.random() * 12500) + 2500,
    wed: Math.floor(Math.random() * 12500) + 2500,
    thu: Math.floor(Math.random() * 12500) + 2500,
    fri: Math.floor(Math.random() * 12500) + 2500,
    sat: Math.floor(Math.random() * 12500) + 2500 
  }

  const paymentsData = {
    sun: Math.floor(Math.random() * 12500) + 2500,
    mon: Math.floor(Math.random() * 12500) + 2500,
    tue: Math.floor(Math.random() * 12500) + 2500,
    wed: Math.floor(Math.random() * 12500) + 2500,
    thu: Math.floor(Math.random() * 12500) + 2500,
    fri: Math.floor(Math.random() * 12500) + 2500,
    sat: Math.floor(Math.random() * 12500) + 2500 
  }

  const barContainerHeight = 150; //this value must be the same as the height in .sales-bars-cont in the css

  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];


  const [currentSelected, setCurrentSelected] = useState<"Earnings" | "Payments">("Earnings");
  const [displayedData, setDisplayedData] = useState(earningsData)

  function changeData(data: "Earnings" | "Payments"){
    if(data == "Earnings"){
      setCurrentSelected('Earnings');
      setDisplayedData(earningsData);
    }
    else{
      setCurrentSelected("Payments");
      setDisplayedData(paymentsData);
    }
  }

  return (
    <div id='sales-report-container'>
      <div className='sales-report-header'>
        <h2>Sales Report</h2>
        <div className='sales-header-right'>
          <span>Week</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3L304 256l0-96c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 96-57.7 0C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z" />
          </svg>
        </div>
      </div>

      <div className='sales-header-buttons'>
        <button onClick={() => changeData("Earnings")} className={`${currentSelected == "Earnings" ? "sales-button-selected" : ""}`}>Earnings</button>
        <button onClick={() => changeData("Payments")} className={`${currentSelected == "Payments" ? "sales-button-selected" : ""}`}>Payments</button>
      </div>

      <div id='sales-chart-container'>
        <div className='sales-prices'>
          <span>0</span>
          <span>$5k</span>
          <span>$10k</span>
          <span>$15k</span>
        </div>

        <div id='sales-chart'>
          <div className='sales-lines-cont'>
            <div className="sales-line"></div>
            <div className="sales-line"></div>
            <div className="sales-line"></div>
            <div className="sales-line"></div>
          </div>

          <div className='sales-bars-cont'>
            {
              [0,0,0,0,0,0,0].map((_, index) => {
                return <div className='sales-bar' style={{backgroundColor: `${new Date().getDay() == index ? currentSelected == "Earnings" ? "#4f924f" : "#924f4f" : ""}`, height: (displayedData[days[index]] / 15000 * barContainerHeight)}}></div>
              })
            }
          </div>
        </div>

        <div className='sales-days-cont'>
          {
            days.map((day, index) => {
              return <span key={index}>{day}</span>
            })
          }
        </div>
      </div>
      {/* <svg width="200" height="200" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M22 2
       A20 20 0 0 1 42 22"
    fill="none"
    stroke="#6665FF"
    stroke-width="2"
    stroke-linecap="round"
  />
</svg> */}

{/* <svg width="200" height="200" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M22 4
       A18 18 0 0 1 40 22"
    fill="none"
    stroke="#6665FF"
    stroke-width="2"
    stroke-linecap="round"
  />
</svg> */}


    </div>
  )
}

export default SalesReport