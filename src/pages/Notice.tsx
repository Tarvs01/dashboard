import {useState, ChangeEvent, useRef} from 'react'
import {debounce} from "lodash"

function Notice() {
  let currentDate = new Date();
  const [messages, setMessages] = useState([
    {
      id: 0,
      msg: "We have marketing fliers available. Do ensure to come over and grab a bunch to spread the word about our geat company.",
      sender: "John Bull",
      department: "Marketing",
      timeStamp: new Date(currentDate.getUTCFullYear(), currentDate.getMonth(), currentDate.getDate() - 3, 5, 25, 1),
    },
    {
      id: 1,
      msg: "Sherry Arnold is having her baby shower next week tuesday by 5pm. You are all invited. It will be held at the company's reception. Bring your company ID card as your invitation.",
      sender: "Katie Woods",
      department: "HR",
      timeStamp: new Date(currentDate.getUTCFullYear(), currentDate.getMonth(), currentDate.getDate() - 3, 16, 39, 51)
    },
    {
      id: 2,
      msg: "Due to the carelessness of Pete, our systems got compromised. We have since revamped it and changed somethings. As a consequence of this, everyone will need new logins. The logins will need to be activated in person so drop by the IT room as soon as possible",
      sender: "you",
      department: "Information Tech",
      timeStamp: new Date(currentDate.getUTCFullYear(), currentDate.getMonth(), currentDate.getDate() - 2, 9, 5, 24)
    },
    {
      id: 3,
      msg: "The first batch of premium surprise boxes is ready. Employees get a 10% discount on every box bought. This offer lasts until next month so hurry down to the workshop to get yours.",
      sender: "Gherman Sparrow",
      department: "Manufacturing",
      timeStamp: new Date(currentDate.getUTCFullYear(), currentDate.getMonth(), currentDate.getDate() - 2, 13, 47, 0)
    },
    {
      id: 4,
      msg: "The toilets on the second floor are currently blocked. Please DO NOT USE THEM. If you need to use the restroom, use the ones on the other floors. Sorry for the inconvenience.",
      sender: "Sharon Shutterlid",
      department: "Health and Safety",
      timeStamp: new Date(currentDate.getUTCFullYear(), currentDate.getMonth(), currentDate.getDate() - 1, 15, 15, 10)
    }
  ])
  const [newMessage, setNewMessage] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  function addNewMessage(){
    if(newMessage.trim() === ""){
      return;
    }

    let tempMessage = {
      id: messages[messages.length - 1].id + 1,
      msg: newMessage.trim(),
      sender: "you",
      department: "Information Tech",
      timeStamp: new Date()
    }

    console.log("textarea message is");
    console.log(newMessage);
    setMessages([...messages, tempMessage]);
    setNewMessage("");

    if(textareaRef.current){
      textareaRef.current.style.height = "37px"
    }

    setTimeout(() => {
      if(messagesRef.current){
        messagesRef.current.scrollTo({
          top: messagesRef.current.scrollHeight,
          behavior: "smooth"
        })
      }
    }, 100);
  }

  function handleScrollEnter(){
    if(messagesRef.current){
      messagesRef.current.classList.add("scroll-enter");
    }

    handleScrollEnd();
  }

  const handleScrollEnd = debounce(() => {
    if(messagesRef.current){
      messagesRef.current.classList.remove("scroll-enter");
    }
  }, 1000);

  return (
    <div id='notice'>
      <div className='messages-cont' ref={messagesRef} onScroll={handleScrollEnter}>
      {
        messages.map((message) => {
          return <div className={`message-cont ${message.sender === "you" ? "yours" : ""}`}>
            <p className="name">{message.sender}</p>
            <p className="dept">{message.department}</p>
            <p className="message">{message.msg}</p>
            <p className="time">{message.timeStamp.toLocaleString()}</p>
          </div>
        })
      }
      </div>

      <div className="message-input-cont">
        <textarea name="message" id="message" placeholder='Enter Notice' ref={textareaRef} value={newMessage} onInput={(e: ChangeEvent<HTMLTextAreaElement>) => {
          e.target.style.height = "1px";
          e.target.style.height = `${5 + e.target.scrollHeight}px`;
          setNewMessage(e.target.value);
        }}></textarea>
        <button className='send-button' onClick={addNewMessage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
        </button>
      </div>
    </div>
  )
}

export default Notice