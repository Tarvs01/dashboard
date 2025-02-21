import { useState } from "react";

interface UtilityBarType{
  isSearchVisible: true | false,
  titleText: string,
  openSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
}

function UtilityBar({isSearchVisible, titleText, openSidebar, width}: UtilityBarType) {
  const [mode, setMode] = useState<"light" | "dark">("dark")

  function toggleMode(){
    if(mode === "dark"){
      document.documentElement.style.cssText = `
      --svg-icon-color: #7c7d7f;
      --component-bg-color: green;
      --light-gray-text: #000000;
      --dark-gray-text: #8d8b8b;
      --component-border-radius: 20px;
      --primary-font: inter, sans-serif;
      --component-padding: 1.5rem 2rem;
      --primary-font-color: #ffffff;
      --primary-button-bg: #444546;
      --primary-buttom-box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      --fill-one: #ffffff;
      --background-color: #242529;
      `;
      setMode("light")
    }
    else{
      document.documentElement.style.cssText = `
      --svg-icon-color: #7c7d7f;
      --component-bg-color: #2f2f33;
      --light-gray-text: #000000;
      --dark-gray-text: #8d8b8b;
      --component-border-radius: 20px;
      --primary-font: inter, sans-serif;
      --component-padding: 1.5rem 2rem;
      --primary-font-color: #ffffff;
      --primary-button-bg: #444546;
      --primary-buttom-box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      --fill-one: #ffffff;
      --background-color: #242529;
      `;
      setMode("dark")
    }
  }

  return (
    <div className='utility-bar-cont'>
        <div className='nav-hamburger' onClick={() => openSidebar(true)}><svg viewBox="0 0 100 80">
              <rect
                x="0"
                y="20"
                width="80"
                height="8"
                fill="currentColor"
                id="rect1"
                rx="3"
              ></rect>
              <rect
                x="0"
                y="40"
                width="80"
                height="8"
                fill="currentColor"
                id="rect2"
                rx="3"
              ></rect>
              <rect
                x="0"
                y="60"
                width="80"
                height="8"
                fill="currentColor"
                id="rect3"
                rx="3"
              ></rect>
            </svg></div>
        <h1>{titleText}</h1>
        {width}

        <div className="search-bar-cont">
          {isSearchVisible && <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        <input type="text" name="utility-search" id="utility-search" placeholder='Search here...' />
          </>}
        </div>

        <div className="util-square-cont">
            <div className="util-square util-square-search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
            <div className="util-square" onClick={toggleMode}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0l-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/></svg>
            </div>
            <div className="util-square">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/></svg>
            </div>
            <div className="util-square"></div>
        </div>
    </div>
  )
}

export default UtilityBar