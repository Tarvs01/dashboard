import {useState, ChangeEvent, useRef} from 'react'

function Notice() {
  const [messages, setMessages] = useState([
    {
      id: 0,
      msg: "holla",
      sender: "John Bull",
      department: "Marketing",
      timeStamp: new Date()
    },
    {
      id: 1,
      msg: "Sherry Arnold is having her baby shower next week tuesday by 5pm. You are all invited. It will be held at the company's reception. Bring your company ID card as your invitation.",
      sender: "Gherman Sparrow",
      department: "HR",
      timeStamp: new Date()
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

  return (
    <div id='notice'>
      <div className='messages-cont' ref={messagesRef}>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/></svg>
        </button>
      </div>
    </div>
  )
}

export default Notice