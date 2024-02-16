import React, { useEffect } from 'react'
import "./user.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import CompleteProfile from '../components/CompleteProfile';
export default function UserDashboard() {
  const history  = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem('token');
    const verify = async(token) => {
      const response = await axios.get(`http://localhost:8000/user/api/tokenverify`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response)
      if(response.data.message == "Unauthorized"){
        history('/login');
      }
    }
    verify(token)

  }, []);
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col h-screen profile pl-[300px]'>
        <div className='flex justify-between py-4 px-10 border-[#D9D9D9] border-b-4' >
          <button className='p-2 text-white bg-blue-600'>Complete Profile</button>
          <button><img src='./bellbBottom.png' /> </button>
        </div>

        <div className='flex justify-between py-4 px-10 border-[#D9D9D9] border-b-4 '>
          <h1 className='text-[32px] font-bold '>Choose your new site</h1>
          <div className='flex items-center justify-between w-56 content-baseline'>

            <div className='flex items-center gap-1 border-b-4 border-black justify-evenly content-baseline'><span className='w-3 h-3 bg-black rounded-full'></span>1</div>
            <div className='flex items-center gap-1 text-center border-b-4 border-black justify-evenly'><div className='w-3 h-3 bg-black rounded-full'></div>2</div>
            <div className='flex items-center gap-1 text-center border-b-4 border-black justify-evenly'><div className='w-3 h-3 bg-black rounded-full'></div>3</div>
          </div>
        </div>

        <div className='px-10 py-10 '>
          <div>
            <ol class="flex  items-center w-full py-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white  sm:text-base sm:py-4 sm:space-x-4 rtl:space-x-reverse">
              <li class="flex items-center ">
                Market
                <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                </svg>
              </li>
              <li class="flex items-center">
                Category 1
                <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                </svg>
              </li>
              <li class="flex items-center text-blue-600 dark:text-blue-500">
                Theme park site
              </li>
            </ol>
          </div>

          <div>
            <img src="/themepark.png" className="w-full" alt="" />
          </div>

          <div className='flex justify-between p-4 border'>
            <div>
              <h1 className='my-4 text-2xl font-bold'>Theme Park Site</h1>

              <div>
                <p className='flex'><img src="./Iconinteractions.png"/>Address of the site</p>
                <div className='flex flex-wrap gap-3 mt-2 text-sm'>
                  <span className='px-2 text-gray-100 bg-gray-400'>Adult Rides</span>
                  <span className='px-2 text-gray-100 bg-gray-400'>Family Rides</span>
                  <span className='px-2 text-gray-100 bg-gray-400'>Restaurants</span>
                  <span className='px-2 text-gray-100 bg-gray-400'>Premium</span>
                </div>
                <div className='p-2 my-10 border border-blue-500 max-w-[300px] underline text-blue-500'>View opportunity on polygon</div>
              </div>
              <div className='flex gap-10'>
                <div>
                  <h1 className='mb-2 text-xl font-semibold'>200 Acres</h1>
                  <p className='text-sm'>Area</p>
                </div>
                <div>
                  <h1 className='mb-2 text-xl font-semibold'>5 Lacks</h1>
                  <p className='text-sm'>Starting price</p>
                </div>
                <div>
                  <h1 className='mb-2 text-xl font-semibold'>10 days</h1>
                  <p className='text-sm'>Remaining Days</p>
                </div>
                <div>
                  <h1 className='mb-2 text-xl font-semibold'>2.5 years</h1>
                  <p className='text-sm'>Next check</p>
                  <div>

                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col ml-auto '>
              <button className='py-4 m-2 text-white bg-blue-500 w-60'>Complete</button>
              <button className='w-32 py-4 m-2 ml-auto text-blue-500 border border-blue-500'>Site Visit &gt;</button>
              <dl>
                <dt className="text-xl font-bold text-blue-500 ">Rs 20,00,000</dt>
                <dd className="flex items-center mb-3">
                  <div className="w-full h-2.5 bg-[#E2E2E2]   me-2">
                    <div className="h-2.5 bg-blue-600 dark:bg-blue-500" style={{width: '38%'}}></div>
                  </div>
                </dd>
              </dl>
            </div>
          </div>

          <div className='flex'>
            <div className='basis-1/2 border-4 border-[#D9D9D9]'>
              <div className='p-10 border-b-4 border-[#D9D9D9]'>
                <h1 className='mb-5 text-3xl font-medium'>Overview</h1>
                <p>
                  Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.
                </p>
              </div>
              <div className='p-10 border-b-4 border-[#D9D9D9]'>
                <h1 className='mb-5 text-3xl font-medium'>Why ?</h1>
                <p>
                  Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.
                </p>
              </div>

              <div className='p-10 border-b-4 border-[#D9D9D9]'>
                <h1 className='mb-5 text-3xl font-medium'>What ?</h1>
                <p>
                  Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.
                </p>
              </div>

           

              <div className='p-10 border-b-4 border-[#D9D9D9]'>
                <h1 className='mb-5 text-3xl font-medium'>LandMarks</h1>
                <div>
                  <div className='flex justify-between border-b-2 border-[#D9D9D9] p-2' >
                      <div className='flex gap-3 text-xl font-bold text-blue-500'>
                        <span><img  src='./flight.png' /> </span>
                        <h1>Airport</h1>
                      </div>
                      <div className='flex flex-col gap-0'>
                        <h1 className='text-xl'>100 km</h1>
                        <span className='text-sm text-gray-400 text-end'>Airport 1</span>
                      </div>
                  </div>

                  <div className='flex justify-between border-b-2 border-[#D9D9D9] p-2' >
                      <div className='flex gap-3 text-xl font-bold text-blue-500'>
                        <span><img  src='./flight.png' /></span>
                        <h1>Airport</h1>
                      </div>
                      <div className='flex flex-col gap-0'>
                        <h1 className='text-xl'>25 km</h1>
                        <span className='text-sm text-gray-400 text-end'>Airport 1</span>
                      </div>
                  </div>

                  <div className='flex justify-between border-b-2 border-[#D9D9D9] p-2' >
                      <div className='flex gap-3 text-xl font-bold text-blue-500'>
                        <span><img  src='./add_road.png' /></span>
                        <h1>Airport</h1>
                      </div>
                      <div className='flex flex-col gap-0'>
                        <h1 className='text-xl'>100 km</h1>
                        <span className='text-sm text-gray-400 text-end'>Airport 1</span>
                      </div>
                  </div>
                  
                </div>
              </div>

              <div className='p-10 border-b-4 border-[#D9D9D9]'>
                <h1 className='mb-5 text-3xl font-medium'>Map</h1>
                <div>
                  <img src="/map.png" className="w-full" alt="" />
                </div>
              </div>
              

            </div>

            <div  className='basis-1/2 border-4 border-[#D9D9D9]'>
              
              <CompleteProfile/>
              <div className=" opacity-30">

              <CompleteProfile/>
              <CompleteProfile/>
              <CompleteProfile/>
              <CompleteProfile/>
              </div>



              
              

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
