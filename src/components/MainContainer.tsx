import React from 'react'
import Invoices from './Invoices'
import SalesReport from './SalesReport'
import Activity from './Activity'
import AnalyticalAi from './AnalyticalAi'
import Profit from './Profit'

function MainContainer({width}: {width: number}) {
  return (
    <div className='dashboard-container'>
      <Profit width={width}/>
      <SalesReport />
      <AnalyticalAi />
      <Invoices />
      <Activity />
    </div>
  )
}

export default MainContainer