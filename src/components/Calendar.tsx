import { useState, ChangeEvent } from 'react'
import { eachDayOfInterval, isLeapYear } from 'date-fns';
import Select from './Select';

interface EventsType{
    [index: number]: {
        yearly: {
            [index: number] : string[]
        },
        specific: {
            [index: number] : {
                [index: number]: string[]
            }
        },
        monthName: string
    }
}

/* 
EventsType is as such

{
    monthNumber: {
        yearly: {
            dayOfMonth: [array containing events of that day]
        },
        specific: {
            dayOfMonth: {
                specificYearForEvent(s): [array containing events for that specific date]
            }
        }
    }
}
*/

function Calendar() {
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const currentYear = new Date().getFullYear();
    let arrayOfYears = [];
    for(let i = 1980; i <= currentYear + 10; i++){
        arrayOfYears.push(i);
    }

    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [events, setEvents] = useState<EventsType>({
        0: {
            yearly: {
                1: ["New Year"]
            },
            specific: {

            },
            monthName: "January",
        },
        1: {
            yearly: {
                14: ["Valentine's Day"]
            },
            specific: {
                
            },
            monthName: "February",
        },
        2: {
            yearly: {
                5: ["Ash Wednesday"],
                8: ["Women's Day"],
            },
            specific: {

            },
            monthName: "March",
        },
        3: {
            yearly: {
                1: ["April Fools"],
                22: ["Earth Day"],
            },
            specific: {

            },
            monthName: "April",
        },
        4: {
            yearly: {
                1: ["Workers Day"],
                27: ["Children's Day"],
            },
            specific: {

            },
            monthName: "May",
        },
        5: {
            yearly: {
                12: ["Democracy Day"],
                15: ["Father's Day"],
            },
            specific: {

            },
            monthName: "June",
        },
        6: {
            yearly: {

            },
            specific: {

            },
            monthName: "July",
        },
        7: {
            yearly: {

            },
            specific: {

            },
            monthName: "August",
        },
        8: {
            yearly: {

            },
            specific: {

            },
            monthName: "September",
        },
        9: {
            yearly: {

            },
            specific: {

            },
            monthName: "October",
        },
        10: {
            yearly: {

            },
            specific: {

            },
            monthName: "November",
        },
        11: {
            yearly: {
                24: ["Christmas Eve"],
                25: ["Christmas Day"],
                26: ["Boxing Day"],
                31: ["New Year's Eve"]
            },
            specific: {

            },
            monthName: "December"
        }
    });
    const [modalOpenDay, setModalOpenDay] = useState(0);
    const [newEventOpen, setNewEventOpen] = useState(false);
    const [newEventText, setNewEventText] = useState("");
    const [frequency, setFrequency] = useState<"Yearly" | "Single">("Yearly");

    function calculateDays(){
        const firstDay = eachDayOfInterval({
            start: new Date(selectedYear, selectedMonth, 1),
            end: new Date(selectedYear, selectedMonth, 2)
        })[0].getDay();
        let finalArray = [];

        if(selectedMonth === 2 && isLeapYear(new Date(selectedYear, 2, 1))){
            let totalDays = 29;
            for(let i = firstDay - 1; i >= 0; i--){
                finalArray.push(totalDays - i);
            }
        }
        else{
            let totalDays = daysInMonth[selectedMonth];
            for(let i = firstDay - 1; i >= 0; i--){
                finalArray.push(totalDays - i);
            }
        }

        if(selectedMonth === 1 && isLeapYear(new Date(selectedYear, 2, 1))){
            for(let i = 1; i <= 29; i++){
                finalArray.push(i);
            }
        }
        else{
            for(let i = 1; i <= daysInMonth[selectedMonth]; i++){
                finalArray.push(i);
            }
        }

        return finalArray;
    }

    function handleSelectChange(e: ChangeEvent<HTMLSelectElement>, toChange: "month" | "year"){
        if(toChange === "month"){
            setSelectedMonth(Number(e.target.value));
        }
        else{
            setSelectedYear(Number(e.target.value));
        }
    }

    function handleTextareaChange(e: ChangeEvent<HTMLTextAreaElement>){
        setNewEventText(e.target.value);
    }

    function collateEvents(){
        let eventsArray: {yearly: string[], specific: string[]} = {yearly: [], specific: []};
        if(events[selectedMonth].yearly[modalOpenDay]){
            eventsArray.yearly = [...events[selectedMonth].yearly[modalOpenDay]]
        }

        //Modify this when you implement the specific year events
        if(events[selectedMonth].specific[modalOpenDay] && events[selectedMonth].specific[modalOpenDay][selectedYear]){
            eventsArray.specific = [...events[selectedMonth].specific[modalOpenDay][selectedYear]];
        }

        return eventsArray;
    }

    function addNewEvent(){
        if(newEventText.trim() === ""){
            return;
        }

        let eventsClone: EventsType = JSON.parse(JSON.stringify(events));
        if(frequency === "Yearly"){
            if(eventsClone[selectedMonth].yearly[modalOpenDay]){
                eventsClone[selectedMonth].yearly[modalOpenDay].push(newEventText);
            }
            else{
                eventsClone[selectedMonth].yearly[modalOpenDay] = [newEventText];
            }
        }
        else{
            if(eventsClone[selectedMonth].specific[modalOpenDay]){
                if(eventsClone[selectedMonth].specific[modalOpenDay][selectedYear]){
                    eventsClone[selectedMonth].specific[modalOpenDay][selectedYear].push(newEventText);
                }
                else{
                    eventsClone[selectedMonth].specific[modalOpenDay][selectedYear] = [newEventText];
                }
            }
            else{
                eventsClone[selectedMonth].specific[modalOpenDay] = {};
                eventsClone[selectedMonth].specific[modalOpenDay][selectedYear] = [newEventText];
            }
        }


        setEvents(eventsClone);
        setNewEventText("");
    }

    function deleteEvent(freq: "Yearly" | "Specific", index: number){
        let eventsClone: EventsType = JSON.parse(JSON.stringify(events));

        if(freq === "Yearly"){
            let tempYearlyEvents = eventsClone[selectedMonth].yearly[modalOpenDay].filter((_, indexNumber) => indexNumber !== index);
            eventsClone[selectedMonth].yearly[modalOpenDay] = tempYearlyEvents;
        }
        else{
            let tempSpecificEvents = eventsClone[selectedMonth].specific[modalOpenDay][selectedYear].filter((_, indexNumber) => indexNumber !== index);
            eventsClone[selectedMonth].specific[modalOpenDay][selectedYear] = tempSpecificEvents;
        }

        setEvents(eventsClone);
    }

    function closeEventsModal(){
        setModalOpenDay(0);
        setNewEventOpen(false)
    }

  return (
    <div className='calendar-comp-cont'>
        <div className="events-modal-cont" style={{display: `${modalOpenDay ? "block" : "none"}`}} onClick={closeEventsModal}>
            <div className="events-modal" onClick={(e) => e.stopPropagation()}>
                <div className='events-cancel'>
                    <button onClick={closeEventsModal}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
                </div>
                <h3>Events for {months[selectedMonth]} {modalOpenDay}</h3>
                {
                    (() => {
                        const eventsData = collateEvents();
                        if((eventsData.yearly.length === 0) && (eventsData.specific.length === 0)){
                            return <p>There are no events for today</p>
                        }

                        return <ul className='events-container'>
                            {
                                eventsData.yearly.map((singleEvent, index) => {
                                    return <li key={index}>
                                        <p>{singleEvent}</p>
                                        <div style={{marginLeft: "auto"}}>
                                            <span className='event-freq'>Yearly</span>
                                            <div onClick={() => deleteEvent("Yearly", index)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></div>
                                        </div>
                                    </li>
                                })
                            }
                            {
                                eventsData.specific.map((singleEvent, index) => {
                                    return <li key={index}>
                                        <p>{singleEvent}</p>
                                        <div style={{marginLeft: "auto"}} onClick={() => deleteEvent("Specific", index)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></div>
                                    </li>
                                })
                            }
                        </ul>
                    })()
                }
                
                <div className="new-event">
                    {newEventOpen && <div>
                        <textarea name="new-event" id="new-event" rows={3} placeholder='Enter new event' value={newEventText} onInput={handleTextareaChange}></textarea>
                        
                        <div className='input-cont'>
                            <input type="radio" name="event-freq" id="event-yearly" onClick={() => setFrequency("Yearly")} checked={frequency === "Yearly"}/>
                            <label htmlFor="event-yearly">Every year</label>
                        </div>

                        <div className='input-cont'>
                            <input type="radio" name="event-freq" id="event-single" onClick={() => setFrequency("Single")} checked={frequency === "Single"}/>
                            <label htmlFor="event-single">This year only</label>
                        </div>

                        </div>}
                    <button onClick={() => {setNewEventOpen(!newEventOpen); if(newEventOpen){addNewEvent()}}}>{newEventOpen ? "Submit New Event" : "Add New Event"}</button>
                </div>
            </div>
        </div>

        <div className="calendar-comp-header">
            <button onClick={() => {
                if(selectedMonth === 0){
                    setSelectedMonth(11);
                    setSelectedYear(selectedYear - 1);
                }
                else{
                    setSelectedMonth(selectedMonth - 1);
                }
            }}>{"<"}</button>
            {/* <Select options={months} setState={setSelectedMonth} currentState={selectedMonth}/> */}
            <div>
                <select name="months" id="calendar-months" value={selectedMonth} defaultValue={months[new Date().getMonth()]} onChange={(e) => handleSelectChange(e, "month")}>
                    {
                        months.map((month, index) => {
                            return <option value={index} key={index}>{month}</option>
                        })
                    }
                </select>

                <select name="years" id="calendar-years" value={selectedYear} defaultValue={currentYear} onChange={(e) => handleSelectChange(e, "year")}>
                    {
                        arrayOfYears.map((year, index) => {
                            return <option value={year} key={index}>{year}</option>
                        })
                    }
                </select>
            </div>
            <button onClick={() => {
                if(selectedMonth === 11){
                    setSelectedMonth(0);
                    setSelectedYear(selectedYear + 1);
                }
                else{
                    setSelectedMonth(selectedMonth + 1);
                }
            }}>{">"}</button>
        </div>

        <div className="calendar-dates-cont">
            {
                days.map((day, index) => {
                    return <div>
                        <span key={index}>{day}</span>
                    </div>
                })
            }

            {
                calculateDays().map((day, index) => {
                    return <div key={index}>
                        <span className={`${(index + 1) < day ? "gray" : "day-date"} ${(events[selectedMonth].yearly[day] || (events[selectedMonth].specific[day] && events[selectedMonth].specific[day][selectedYear]) ? "event-registered" : "")}`} onClick={(e) => {
                            if((index + 1) < day){
                                e.stopPropagation();
                            }
                            else{
                                setModalOpenDay(day);
                            }
                        }}>{day}</span>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Calendar