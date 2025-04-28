//Fixed the bug. It was the state that was causing the issue.
//It retained it value and did not reinitialize. So When the new values were calculated, the state was not updated.
//Could have used a useEffect to fix that but no.
//Will remove above comments after this commit.
function Activity() {
  //this sets the start point for the circle. middle left.
  //It should be the same value as the start value for the first object (transactions in this case)
  //It should also be the end value for the last object
  computeAxialPoints.lastComputed = [40, 22];
  computeAxialPoints.lastAngle = 0;

  //Angle difference is what enables the space between each arc.
  //If you want to modify the stroke-width, you will most likely need to modify the angle difference to account for the space.
  //If you do, the space between the arcs for reports and transactions will most likely have issues. 
  //You can modify then modify number at the start or end points of the arcs. e.g activityData.transactions.start[1] + 1.8. It is the 1.8 you will modify. Something similar is in reports.
  let angleDifference = 10;
  const radius = 18;

  function computeAxialPoints(angle: number) {
    const circleCenter = 22;
    //The angle parameter is simply how much angle each that data is going to use in the chart
    //circle angle is the additive angle. so if angle of first is 60, its circleAngle is 60. if angle of second is 100, its circleAngle is 160
    //But since the circle is to start from middle left, the start angle will be 270 instead of 0.
    const circleAngle = (computeAxialPoints.lastAngle + angle) % 360;
    const radianAngle = (circleAngle * Math.PI) / 180;

    let x = circleCenter + radius * Math.cos(radianAngle);
    let y = circleCenter + radius * Math.sin(radianAngle);

    computeAxialPoints.lastAngle += angle + angleDifference;

    let xNew =
      circleCenter +
      radius * Math.cos(radianAngle + (angleDifference * Math.PI) / 180);
    let yNew =
      circleCenter +
      radius * Math.sin(radianAngle + (angleDifference * Math.PI) / 180);
    computeAxialPoints.lastComputed = [xNew, yNew];

    return [x, y];
  }

  //This function generates the activity data by first randomly dividing 360 into 4 for the angles
  //It then chooses a random total. It then splits the total into appropriate percentages based on the angles
  function generateDataPercentages() {
    let a = Math.floor(Math.random() * 20) + 50;
    let b = Math.floor(Math.random() * 20) + 50;
    let c = Math.floor(Math.random() * 20) + 160;
    let d = 360 - (a + b + c);
    /* let c = Math.floor(Math.random() * 20) + 50;
    let d = 360 - (a + b + c); */
    console.log(`${a} ${b} ${c} ${d}. total sum is ${a + b + c + d}`);

    const totalActivity = Math.floor(Math.random() * 500) + 500;

    let finalData = {
      transactions: {
        angle: a,
        value: Math.floor((a / 360) * totalActivity),
        start: [40, 22],
        end: computeAxialPoints(a),
        color: "#fd9d71"
      },
      payouts: {
        angle: b,
        value: Math.floor((b / 360) * totalActivity),
        start: computeAxialPoints.lastComputed,
        end: computeAxialPoints(b - angleDifference),
        color: "#dddddd"
      },
      sales: {
        angle: c,
        value: Math.floor((c / 360) * totalActivity),
        start: computeAxialPoints.lastComputed,
        end: computeAxialPoints(c - angleDifference),
        color: "#a6acff"
      },
      reports: {
        angle: d,
        value: Math.floor((d / 360) * totalActivity),
        start: computeAxialPoints.lastComputed,
        end: [40, 22],
        color: "#b0725c"
      },
    };

    console.log(finalData);
    return finalData;
  }

  const activityData = generateDataPercentages();
  const circumference = 2 * Math.PI * radius;
  let pathLengths = {
    transactions: activityData.transactions.angle / 360 * circumference,
    payouts: (activityData.payouts.angle - angleDifference) / 360 * circumference,
    sales: (activityData.sales.angle - angleDifference) / 360 * circumference,
    reports: (activityData.reports.angle - angleDifference) / 360 * circumference
  }

  return (
    <div className="activity-container">
      <div className="activity-header">
        <h2>Activity</h2>
      </div>

      <div className="activity-chart-container">
        <div className="activity-chart-inner-text">
          <h3>+{Math.floor(Math.random() * 10) + 10}%</h3>
          <p>Since last week</p>
        </div>
        <svg
          viewBox="0 0 44 44"
          xmlns="http://www.w3.org/2000/svg"
          id="activi-chart"
        >
          <path
            d={`M${activityData.transactions.start[0]} 
            ${activityData.transactions.start[1] + 1.8}   
            A18 18 0 0 1 
            ${activityData.transactions.end[0]} 
            ${activityData.transactions.end[1]}`}
            fill="none"
            stroke={`${activityData.transactions.color}`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={pathLengths.transactions}
            strokeDashoffset={pathLengths.transactions}
            style={{animation: `drawGraphLine 0.2s linear 0s 1 forwards`}}
          />
          
          <path
            d={`M${activityData.payouts.start[0]} 
            ${activityData.payouts.start[1]}   
            A18 18 0 0 1 
            ${activityData.payouts.end[0]} 
            ${activityData.payouts.end[1]}`}
            fill="none"
            stroke={`${activityData.payouts.color}`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={pathLengths.payouts}
            strokeDashoffset={pathLengths.payouts}
            style={{animation: `drawGraphLine 0.2s linear 0.2s 1 forwards`}}
          />

          <path
            d={`M${activityData.sales.start[0]} 
            ${activityData.sales.start[1]}   
            A18 18 0 0 1 
            ${activityData.sales.end[0]} 
            ${activityData.sales.end[1]}`}
            fill="none"
            stroke={`${activityData.sales.color}`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={pathLengths.sales}
            strokeDashoffset={pathLengths.sales}
            style={{animation: `drawGraphLine 0.3s linear 0.4s 1 forwards`}}
          />

          <path
            d={`M${activityData.reports.start[0]} 
            ${activityData.reports.start[1]}   
            A18 18 0 ${activityData.reports.angle <= 180 ? 0 : 1} 1 
            ${activityData.reports.end[0]} 
            ${activityData.reports.end[1] - 1.2}`}
            fill="none"
            stroke={`${activityData.reports.color}`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={pathLengths.reports}
            strokeDashoffset={pathLengths.reports}
            style={{animation: `drawGraphLine 0.25s linear 0.7s 1 forwards`}}
          />
        </svg>
      </div>

      <div className="activity-legend-cont">
        <div>
          <div style={{backgroundColor: activityData.transactions.color}}></div>
          <span>Transactions</span>
          <span>{activityData.transactions.value}</span>
        </div>
        <div className="legend-r-item">
          <div style={{backgroundColor: activityData.payouts.color}}></div>
          <span>Payouts</span>
          <span>{activityData.payouts.value}</span>
        </div>
        <div>
          <div style={{backgroundColor: activityData.sales.color}}></div>
          <span>Sales</span>
          <span>{activityData.sales.value}</span>
        </div>
        <div className="legend-r-item">
          <div style={{backgroundColor: activityData.reports.color}}></div>
          <span>Reports</span>
          <span>{activityData.reports.value}</span>
        </div>
      </div>
    </div>
  );
}
//d="M413,180 C293,33 219,239 132,333"
export default Activity;





//Random split circle svg
{/* <svg
          width="200"
          height="200"
          viewBox="0 0 44 44"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 4
       A18 18 0 0 1 40 21"
            fill="none"
            stroke="#0000FF"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M40 23.5
       A18 18 0 0 1 23.5 40"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M21 40
       A18 18 0 0 1 4 23.5"
            fill="none"
            stroke="#FFff00"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M4 21
       A18 18 0 0 1 21 4"
            fill="none"
            stroke="#90CAF9"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg> */}

//Random arc svg
{/* <svg
        width="200"
        height="200"
        viewBox="0 0 44 44"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", border: "2px solid yellow" }}
      >
        <path
          d="M4.697 26.961
       A18 18 0 1 1 40 22"
          fill="none"
          stroke="#90CAF9"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg> */}

//Random wave svg
{/* <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 300"
        opacity="1"
        style={{display: "block", border: "2px solid yellow"}}
      >
        <defs>
          <linearGradient
            gradientTransform="rotate(270)"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="sssquiggly-grad"
          >
            <stop
              stop-color="hsl(206, 75%, 49%)"
              stop-opacity="1"
              offset="0%"
            ></stop>
            <stop
              stop-color="hsl(331, 90%, 56%)"
              stop-opacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g
          strokeWidth="7.5"
          stroke="url(#sssquiggly-grad)"
          fill="none"
          strokeLinecap="round"
          transform="matrix(1,0,0,1,-5,135.21688842773438)"
        >
          <path d="M10,10C35.69444444444444,21.25,79.86111111111111,78.375,133.33333333333334,64C186.80555555555557,49.625,211.11111111111114,-64,266.6666666666667,-59C322.22222222222223,-54,344.44444444444446,78.625,400,88C455.55555555555554,97.375,477.7777777777778,-12.75,533.3333333333334,-14C588.8888888888889,-15.25,611.1111111111112,92.20833333333333,666.6666666666667,82C722.2222222222223,71.79166666666667,772.2222222222223,-32.791666666666664,800,-63"></path>
        </g>
      </svg> */}