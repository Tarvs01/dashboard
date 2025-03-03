import { useState } from 'react'
import Select from './Select';

function Calendar() {
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    const currentYear = new Date().getFullYear();
    let arrayOfYears = [];
    for(let i = 1980; i <= currentYear + 1; i++){
        arrayOfYears.push(i);
    }

    const [selectedMonth, setSelectedMonth] = useState(months[new Date().getMonth()]);
  return (
    <div className='calendar-comp-cont'>
        <div className="calendar-comp-header">
            <button>{"<"}</button>
            {/* <Select options={months} setState={setSelectedMonth} currentState={selectedMonth}/> */}
            <select name="months" id="calendar-months" defaultValue={months[new Date().getMonth()]}>
                {
                    months.map((month, index) => {
                        return <option value={month} key={index}>{month}</option>
                    })
                }
            </select>

            <select name="years" id="calendar-years" defaultValue={currentYear}>
                {
                    arrayOfYears.map((year, index) => {
                        return <option value={year} key={index}>{year}</option>
                    })
                }
            </select>
            <button>{">"}</button>
        </div>
    </div>
  )
}

export default Calendar