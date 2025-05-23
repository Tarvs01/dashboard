
function Profit({width}: {width:number}) {
  return (
    <div className='profit-container'>
      {width}
        <div className="profit-header">
            <div className="money-cont">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path d="M0 112.5L0 422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4l0-309.9c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64l-64 0 0-64zm64-208c0 35.3-28.7 64-64 64l0-64 64 0zM512 304l0 64-64 0c0-35.3 28.7-64 64-64zM448 96l64 0 0 64c-35.3 0-64-28.7-64-64z" fill='inherit'/></svg>
            </div>
            <h3>Profit</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" fill='inherit' /></svg>
        </div>
        <img src="../assets/images/profit-bg-4.webp" alt="" />

        <div className="profit-profits">
            <h3>+14% <span>Since last week</span></h3>
            <h1>$12 895.05</h1>
        </div>
    </div>
  )
}

export default Profit