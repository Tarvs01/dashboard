import Invoices from '../components/Invoices'
import SalesReport from '../components/SalesReport'
import Activity from '../components/Activity'
import AnalyticalAi from '../components/AnalyticalAi'
import Profit from '../components/Profit'

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