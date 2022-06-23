import Head from 'next/head'
import Image from 'next/image'
import NotionLogo from '../assets/NotionLogo.svg'
import TitleImageOne from '../assets/TitleImageOne.png'

// Pink Ellipse Ring Progress Bar
import PinkEllipse0 from '../assets/PinkEllipse=0.svg'
import PinkEllipse20 from '../assets/PinkEllipse=20.svg'
import PinkEllipse40 from '../assets/PinkEllipse=40.svg'
import PinkEllipse60 from '../assets/PinkEllipse=60.svg'
import PinkEllipse80 from '../assets/PinkEllipse=80.svg'
import PinkEllipse100 from '../assets/PinkEllipse=100.svg'

// Yellow Ellipse Ring Progress Bar
import YellowEllipse0 from '../assets/YellowEllipse=0.svg'
import YellowEllipse33 from '../assets/YellowEllipse=33.svg'
import YellowEllipse66 from '../assets/YellowEllipse=66.svg'
import YellowEllipse100 from '../assets/YellowEllipse=100.svg'

// Checkbox
import ActiveCheckbox from '../assets/Check=Active.svg'
import DeactiveCheckbox from '../assets/Check=Deactive.svg'
import Script from 'next/script'
import ProgressRing from '../static/progressRing'

// green: #00C39A, yellow: #FFD155, pink: #FFA5AA
const index = ({ firstHourData, fiveGoalsData }) => {
  return (
    <div className="bg-[#1B1F24] h-screen p-8 w-screen">
      <div className="flex flex-row bg-[#00C39A] rounded-md w-full h-52 mb-6">
        <div name="title" className="p-4 basis-1/4 flex flex-col justify-center">
          <h1 className="text-3xl font-bold sm:text-xl">The 5AM Club Dashboard</h1>
          <h2 className="text-xl font-semibold sm:text-base">by Setasena Randata</h2>
          <h2 className="text-l font-medium flex items-center sm:text-s">
            <div className="relative w-4 h-4 mr-1">
              <Image src={NotionLogo} layout="fill" objectFit="contain"/>
            </div> Integrated with Notion
          </h2>
        </div>

        <div name="image" className="p-4 basis-1/4 relative">
          <Image src={TitleImageOne} layout="fill" objectFit="contain"/>
        </div>

        <div name="first-hour-progress" className="p-4 basis-1/4 relative">
          <Image id="id-yellow" src={YellowEllipse33} layout="fill" objectFit="contain" />
        </div>

        <div name="task-progress" className="p-4 basis-1/4 relative">
          <Image src={PinkEllipse80} layout="fill" objectFit="contain" />
        </div>        
      </div>
      <div className="grid grid-cols-2 gap-4 h-auto mb-2">
        <h2 className="text-white font-bold text-2xl">First Hour Task</h2>
        <h2 className="text-white font-bold text-2xl">Today's Task</h2>
      </div>
      
      
      <div className="grid grid-cols-2 gap-4 h-64">
        <div className="bg-[#FFD155] rounded-md w-full h-full p-2 flex flex-col justify-between">
        {firstHourData.map((data) => (
          <div key={data.id}>
            <h1 key={data.id} className="text-l font-bold">{ data.counter } 20 Minutes</h1>
            <h1 className="text-base font-medium flex items-center">
              <div className="relative h-18px w-18px mr-1">
                <Image src={DeactiveCheckbox} layout="fill" objectFit="contain" />
              </div>
              { data.content }
            </h1>
          </div>
          ))
        }
        </div>
        <div className="bg-[#FFA5AA] rounded-md w-full h-full p-2 flex flex-col justify-between">
        {fiveGoalsData.map(data => (
          <div key={data.id}>
            <h1 className="text-base font-medium flex items-center">
              <div className="relative h-18px w-18px mr-1">
                <Image src={DeactiveCheckbox} layout="fill" objectFit="contain" />
              </div>
              { data.content }
            </h1>
          </div>
          ))
        }
        </div>
      </div>
      <Script src={ProgressRing} />
    </div>
  )
  
}

export default index

index.getInitialProps = async (ctx) => {
  let firstHour = await fetch("http://localhost:2500/firstHour")
  let fiveGoals = await fetch("http://localhost:2500/fiveGoals")
  firstHour = await firstHour.json()
  fiveGoals = await fiveGoals.json()

  return {
    firstHourData: firstHour,
    fiveGoalsData: fiveGoals
  }
}