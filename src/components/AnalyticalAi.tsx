function AnalyticalAi() {
  const monthMap = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div id="analytical-ai-container">
      <div className="analytical-header">
        <h2>Analytical AI</h2>
        <p>
          {monthMap[new Date().getUTCMonth()]}, {new Date().getFullYear()}
        </p>
      </div>
      <div id="analytical-chart-container">
        <div className="analytical-prices">
          <span>0</span>
          <span>$15k</span>
          <span>$30k</span>
          <span>$45k</span>
          <span>$60k</span>
        </div>

        <div id="analytical-chart">
          <div className="analytical-lines-cont">
            <div className="analytical-line"></div>
            <div className="analytical-line"></div>
            <div className="analytical-line"></div>
            <div className="analytical-line"></div>
            <div className="analytical-line"></div>
          </div>

          <div className="analytical-graph">
            <svg
              viewBox="0 0 1000 500"
              xmlns="http://www.w3.org/2000/svg"
              id="analy-graph"
            >
              <path
                d="
                M9,483 C210,484 148,56 285,41
                S403,465 588,309
                S798,-6 881,150
                S997,179 993,-4"
                fill="none"
                stroke="inherit"
                stroke-width="8"
                stroke-linecap="round"
              />
              <defs>
                    <linearGradient id="lineGradient" x1={0} x2={0} y1={0} y2={1}>
                        <stop offset={`0%`} id="stop-top"/>
                        <stop offset={`91%`} id="stop-bottom"/>
                    </linearGradient>
                </defs>
              <rect width={30} height={500} x={270} y={41} fill="url(#lineGradient)" stroke="transparent"/>
              <circle cx={285} cy={41} r={25} fill="#ffffff" />
              <circle cx={285} cy={41} r={10} fill="orange" />
            </svg>
          </div>
        </div>

        <div className="analytical-numbers">
          <span>0</span>
          <span>5</span>
          <span>10</span>
          <span>15</span>
          <span>20</span>
          <span>25</span>
          <span>30</span>
        </div>
      </div>
    </div>
  );
}

export default AnalyticalAi;


/* 
M9,483 C210,484 148,56 285,41
M276,41 C400,27 403,465 588,309
M588,309 C692,207 798,-6 881,150
M881,150 C938,279 997,179 993,-4

Above are the four paths that make up the line graph
I shortened it for the sake of the animation
Refer to this if you need the full path
*/