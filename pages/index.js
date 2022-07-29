// Framer motion
import { motion } from "framer-motion"

// React-fade-in
import FadeIn from 'react-fade-in';

import Head from 'next/head'
import Image from 'next/image'
import NotionLogo from '../assets/NotionLogo.svg'
import TitleImageOne from '../assets/TitleImageOne.png'

// Checkbox
import ActiveCheckbox from '../assets/Check=Active.svg'
import DeactiveCheckbox from '../assets/Check=Deactive.svg'
import Script from 'next/script'
import ProgressRing from '../static/progressRing'

// Function to get the First Hour Progress Ring
function firstHourProps(firstHour) {
  
  let checks = 0
  for (let i = 0; i < firstHour.length; i++) {
    let obj = firstHour[i]
    if (obj.chekced == true) {
      checks += 1
    } 
  }
  return Math.floor((checks/3)*100)
}

// Function to get the Five Goals Progress Ring
function fiveGoalsProps(fiveGoals) {
  let checks = 0
  for (let i = 0; i < fiveGoals.length; i++) {
    let obj = fiveGoals[i]
    if (obj.chekced == true) {
      checks += 1
    } 
  }
  return (checks/5)*100
}

// START: index
const index = ({ firstHourData, fiveGoalsData, firstChecks, fiveChecks}) => {
  // Motion consts
  const svgVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { duration: 1 }
    }
  }

  const yellowVariants = {
    hidden: {
      rotate: 0,
      opacity: 1,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: firstChecks/100,
      transition: {
        duration: 5,
        ease: "easeInOut"
      }
    }
  }

  const pinkVariants = {
    hidden: {
      rotate: 0,
      opacity: 1,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: fiveChecks/100,
      transition: {
        duration: 5,
        ease: "easeInOut"
      }
    }
  }
  
  return (
    <div>
      <Head>
        <meta httpEquiv="refresh" content="3600" />
        <title>5AM Club Planner</title>
      </Head>
      <div className="bg-[#1B1F24] h-screen p-8 w-screen">
        <FadeIn transitionDuration={1000}>
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

            <div name="first-hour-progress" className="p-4 basis-1/4 relative flex flex-col items-center">
              <motion.svg variants={svgVariants} initial="hidden" animate="visible" width="172" height="172" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">i
                <path opacity="0.4" d="M86.5 21C122.675 21 152 50.3253 152 86.5C152 122.675 122.675 152 86.5 152C50.3253 152 21 122.675 21 86.5C21 50.3253 50.3253 21 86.5 21ZM86.5 138.9C115.44 138.9 138.9 115.44 138.9 86.5C138.9 57.5603 115.44 34.1 86.5 34.1C57.5603 34.1 34.1 57.5603 34.1 86.5C34.1 115.44 57.5603 138.9 86.5 138.9Z" fill="#FBB907"/>
                <g opacity="0.4" filter="url(#filter0_d_35_32)">
                <path d="M86 7C129.63 6.99999 165 42.3695 165 86C165 129.63 129.63 165 86 165C42.3695 165 7 129.63 7 86C6.99999 42.3695 42.3695 7 86 7ZM86 149.2C120.904 149.2 149.2 120.904 149.2 86C149.2 51.0956 120.904 22.8 86 22.8C51.0956 22.8 22.8 51.0956 22.8 86C22.8 120.904 51.0956 149.2 86 149.2Z" fill="#FFD155"/>
                </g>
                <g filter="url(#filter1_d_35_32)">
                <motion.path variants={yellowVariants}  d="M86 157C125.212 157 157 125.212 157 86C157 46.7878 125.212 15 86 15C46.7878 15 15 46.7878 15 86C15 125.212 46.7878 157 86 157Z" stroke="#FFD155" strokeWidth="16" shape-rendering="crispEdges"/>
                </g>
                <g filter="url(#filter2_i_35_32)">
                <motion.path variants={yellowVariants}  d="M86.5 145C118.809 145 145 118.809 145 86.5C145 54.1913 118.809 28 86.5 28C54.1913 28 28 54.1913 28 86.5C28 118.809 54.1913 145 86.5 145Z" stroke="#FBB907" strokeWidth="13"/>
                </g>
                <defs>
                <filter id="filter0_d_35_32" x="0" y="0" width="172" height="172" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="3.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_32"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_35_32" result="shape"/>
                </filter>
                <filter id="filter1_d_35_32" x="0" y="0" width="172" height="172" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="3.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_32"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_35_32" result="shape"/>
                </filter>
                <filter id="filter2_i_35_32" x="21.5" y="21.5" width="130" height="130" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="3.5"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_35_32"/>
                </filter>
                </defs>
              </motion.svg>
              <h1 className="text-center"><span className="font-bold">{firstChecks}% </span>of first hour task completed</h1>
            </div>

            <div name="task-progress" className="p-4 basis-1/4 relative flex flex-col items-center">
              <motion.svg variants={svgVariants} initial="hidden" animate="visible" width="172" height="172" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M86.5 21C122.675 21 152 50.3253 152 86.5C152 122.675 122.675 152 86.5 152C50.3253 152 21 122.675 21 86.5C21 50.3253 50.3253 21 86.5 21ZM86.5 138.9C115.44 138.9 138.9 115.44 138.9 86.5C138.9 57.5603 115.44 34.1 86.5 34.1C57.5603 34.1 34.1 57.5603 34.1 86.5C34.1 115.44 57.5603 138.9 86.5 138.9Z" fill="#FF8289"/>
                <g opacity="0.4" filter="url(#filter0_d_35_37)">
                <path d="M86 7C129.63 6.99999 165 42.3695 165 86C165 129.63 129.63 165 86 165C42.3695 165 7 129.63 7 86C6.99999 42.3695 42.3695 7 86 7ZM86 149.2C120.904 149.2 149.2 120.904 149.2 86C149.2 51.0956 120.904 22.8 86 22.8C51.0956 22.8 22.8 51.0956 22.8 86C22.8 120.904 51.0956 149.2 86 149.2Z" fill="#FFA5AA"/>
                </g>
                <g filter="url(#filter1_d_35_37)">
                <motion.path variants={pinkVariants} d="M86 157C125.212 157 157 125.212 157 86C157 46.7878 125.212 15 86 15C46.7878 15 15 46.7878 15 86C15 125.212 46.7878 157 86 157Z" stroke="#FFA5AA" strokeWidth="16" shape-rendering="crispEdges"/>
                </g>
                <g filter="url(#filter2_i_35_37)">
                <motion.path variants={pinkVariants} d="M86.5 145C118.809 145 145 118.809 145 86.5C145 54.1913 118.809 28 86.5 28C54.1913 28 28 54.1913 28 86.5C28 118.809 54.1913 145 86.5 145Z" stroke="#FB8087" strokeWidth="13"/>
                </g>
                <defs>
                <filter id="filter0_d_35_37" x="0" y="0" width="172" height="172" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="3.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_37"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_35_37" result="shape"/>
                </filter>
                <filter id="filter1_d_35_37" x="0" y="0" width="172" height="172" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="3.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_37"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_35_37" result="shape"/>
                </filter>
                <filter id="filter2_i_35_37" x="21.5" y="21.5" width="130" height="130" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="3.5"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_35_37"/>
                </filter>
                </defs>
              </motion.svg>
              <h1 className="text-center"><span className="font-bold">{fiveChecks}% </span>of today&#x27;s task completed</h1>
            </div>        
          </div>
        </FadeIn>
        <FadeIn transitionDuration={1000} delay={1000}>
          <div className="grid grid-cols-2 gap-4 h-auto mb-2">
            <h2 className="text-white font-bold text-2xl">First Hour Task</h2>
            <h2 className="text-white font-bold text-2xl">Today's Task</h2>
          </div>
        </FadeIn>
        
        <FadeIn transitionDuration={1000} delay={2000}>
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
        </FadeIn>
        <Script src={ProgressRing} />
      </div>
    </div>
  )
  
}

export default index
// END: index

// Exporting staticProps to fetch API's
export async function getServerSideProps(){
  let firstHour = await fetch("https://fiveamclub-backend.herokuapp.com/firstHour")
  let fiveGoals = await fetch("https://fiveamclub-backend.herokuapp.com/fiveGoals")
  firstHour = await firstHour.json()
  fiveGoals = await fiveGoals.json()
  const firstHourChecks = firstHourProps(firstHour)
  const fiveGoalsChecks = fiveGoalsProps(fiveGoals)
  return {
    props: {
      firstHourData: firstHour,
      fiveGoalsData: fiveGoals,
      firstChecks: firstHourChecks,
      fiveChecks: fiveGoalsChecks
    }
  }
}
