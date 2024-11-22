import React from 'react';
import Barchart from '../barchart/barchart';
import Map from '../../assets/Map.png';
import Ellipse from '../../assets/Ellipse.png';
import Graph from '../graph2/graph'
import Graph3 from '../graph3/graph3'
import Graph4 from '../graph4/graph4';
import vector2 from '../../assets/vector2.png';
import { BsThreeDots } from 'react-icons/bs';
import { CgExport } from 'react-icons/cg';
import { FaEye } from 'react-icons/fa';
import { MdOutlineDeleteForever } from 'react-icons/md';
import Ellipse2 from '../../assets/Ellipse2.png';
import Ellipse3 from '../../assets/Ellipse3.png';
import Ellipse4 from '../../assets/Ellipse4.png';
import Ellipse5 from '../../assets/Ellipse5.png';
import Ellipse6 from '../../assets/Ellipse6.png';
import Ellipse7 from '../../assets/Ellipse7.png';




const Main = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
       <div className='grid lg:grid-cols-2 grid-cols-1  gap-[20px]'>
         <div className='flex flex-col justify-center items-center bg-white py-[25px] gap-[20px] relative'>
           <div className='flex flex-row justify-between w-full px-[25px] '>
             <p className='text-[20px] font-bold text-[#000000f5]'>Revenue</p>
             <BsThreeDots color="gray" className="w-[20px] h-[20px] " />
           </div>
           <div className='h-0.5  w-full bg-[#E6E8f0]'/>
           <div className='flex flex-col'>
            <p className='text-[28px] font-bold pl-[25px] text-[#000000f5]'>$112,340</p>
             <Barchart />
           </div>
           <div className='flex flex-row justify-start items-start w-full pl-[15px] gap-[10px]'>
            <div className='flex flex-row justify-center items-center justify-items-center gap-2'><div className=' h-[12px] gradient w-[12px] rounded-sm' /><p className='text-[12px] text-[#8F95B2]'>Pending(100%)</p></div>
            <div className='flex flex-row justify-center items-center justify-items-center gap-2'><div className=' h-[12px] gradient2 w-[12px] rounded-sm' /><p className='text-[12px] text-[#8F95B2]'>Pending(100%)</p></div>
            <div className='flex flex-row justify-center items-center justify-items-center gap-2'><div className=' h-[12px] gradient3 w-[12px] rounded-sm' /><p className='text-[12px] text-[#8F95B2]'>Pending(100%)</p></div>
           </div>
           <div className='absolute flex flex-col bg-[#ffffff] border-[#E6E8F0] border-solid border-[1px] justify-start items-start p-[12px] top-12 right-5 w-full] pr-[40px] gap-[15px] rounded-[8px]' >
             <div className='flex flex-row gap-[13px] justify-center items-center justify-items-center '> <FaEye color="gray" className="w-[14px] h-[14px] " /><p className='text-[14px] text-[#8F95B2]'>View</p></div>
             <div className='flex flex-row gap-[13px] justify-center items-center  justify-items-center '> <CgExport color="gray" className="w-[14px] h-[14px] " /><p className='text-[14px] text-[#8F95B2]'>Export</p></div>
             <div className='flex flex-row gap-[13px] justify-center items-center justify-items-center '> <MdOutlineDeleteForever color="gray" className="w-[15px] h-[15px] " style={{color: '#FF754C'}} /><p className='text-[14px] text-[#FF754C]'>Remove</p></div>
           </div>
         </div>
         <div className='flex flex-col justify-center items-center bg-white py-[25px] gap-[20px]'>
           <div className='flex flex-row justify-between w-full px-[25px] '>
             <p className='text-[20px] font-bold text-[#000000f5]'>Customers</p>
             <BsThreeDots color="gray" className="w-[20px] h-[20px] " />
           </div>
           <div className='h-0.5  w-full bg-[#E6E8f0]'/>
           <div className='flex flex-row gap-[5px] py-[48px]'>
              <Graph />
                <div className='flex flex-col justify-start items-start'>
                  <div className='flex flex-row  '>
                    <Graph3 />
                    <div>
                      <p className='text-[14px] text-[#081735] font-bold'>+ 18%</p>
                      <p className='text-[12px] text-[#8F95B2]'>Daily Customers</p>
                    </div>
                  </div>
                  <div className='flex flex-row '>
                    <Graph4 />
                    <div className='justify-start w-full'>
                      <p className='text-[14px] text-[#081735] font-bold'>+ 14%</p>
                      <p className='text-[12px] text-[#8F95B2]'>Weekly new Customers</p>
                    </div>
                  </div>
                  
                </div>

           </div>
           
           <div className='flex flex-row justify-center items-center w-full pl-[25px] gap-[20px]'>
            <div className='flex flex-row justify-center items-center justify-items-center gap-2'><div className=' h-[12px] gradient3 w-[12px] rounded-full' /><p className='text-[12px] text-[#000]'>Current customers</p></div>
            <div className='flex flex-row justify-center items-center justify-items-center gap-2'><div className=' h-[12px] gradient4 w-[12px] rounded-full' /><p className='text-[12px] text-[#000]'>New customers</p></div>
           </div>
         </div>

       </div>
       <div className='flex lg:flex-row flex-col gap-[15px]'>
          <div className='flex flex-col  bg-white  gap-[20px] py-[30px] rounded-lg '>
              <p className='pl-[25px] text-[20px] font-bold text-[#000000f5]'>Customer Map</p>
              <div className='h-0.5  w-full bg-[#E6E8f0]' />
              <div className='px-[25px] relative'>
                <img src={Map} alt="map" className='w-full h-full object-contain'/>
               <div className='absolute top-[16%] left-[29%]  bg-white p-0.5 rounded-full'><img src={vector2} alt="vector" className='object-contain w-[12px] h-[12px]'/></div> 
               <div className='absolute top-[63%] left-[27%]  bg-white p-0.5 rounded-full'><img src={vector2} alt="vector" className='object-contain w-[12px] h-[12px]'/></div> 
               <div className='absolute top-[40%] left-[51%]  bg-white p-0.5 rounded-full'><img src={vector2} alt="vector" className='object-contain w-[12px] h-[12px]'/></div>
               <div className='absolute top-[85%] left-[51%]  bg-white p-0.5 rounded-full'><img src={vector2} alt="vector" className='object-contain w-[12px] h-[12px]'/></div>  
               <div className='absolute top-[88%] left-[68%]  bg-white p-0.5 rounded-full'><img src={vector2} alt="vector" className='object-contain w-[12px] h-[12px]'/></div>
               <div className='absolute top-[55%] left-[68%]  bg-white p-0.5 rounded-full'><img src={vector2} alt="vector" className='object-contain w-[12px] h-[12px]'/></div>
               <div className='absolute top-[40%] left-[79%]  bg-white p-0.5 rounded-full'><img src={vector2} alt="vector" className='object-contain w-[12px] h-[12px]'/></div>
               <div className='absolute top-[11%] left-[80%]  bg-white p-0.5 rounded-full'><img src={vector2} alt="vector" className='object-contain w-[12px] h-[12px]'/></div>
               <div className='absolute top-[95%] left-[85%]  bg-white p-0.5 rounded-full'><img src={vector2} alt="vector" className='object-contain w-[12px] h-[12px]'/></div>
              </div>
          </div>
          <div className='border-[2px] border-[#fff] rounded-lg p-4 lg:pr-[67px] bg-white flex flex-col  justify-center items-center gap-4'>
            <p className='text-[20px] font-bold text-[#000000f5]'>Customer List</p>
            <div className='grid grid-cols-1 lg:gap-1 gap-7 mt-2'>
              <div className='flex flex-row gap-1'>
                <img src={Ellipse} alt="ellipse"/>
                <div>
                  <p className='text-[#1E293B] text-[14px] font-bold'>Ana Black</p>
                  <p className='text-[#64748B] text-[14px] mt-[-2px]'>ana@gmail.com</p>
                </div>
              </div>
              <div className='flex flex-row gap-2'>
                <img src={Ellipse2} alt="ellipse"/>
                <div>
                  <p className='text-[#1E293B] text-[14px] font-bold'>Katona Beatrix</p>
                  <p className='text-[#64748B] text-[14px] mt-[-2px]'>brix@gmail.com</p>
                </div>
              </div>
              <div className='flex flex-row gap-2'>
                <img src={Ellipse3} alt="ellipse" />
                <div>
                  <p className='text-[#1E293B] text-[14px] font-bold'>George Litz</p>
                  <p className='text-[#64748B] text-[14px] mt-[-2px]'>georgelitz@gmail.com</p>
                </div>
              </div>
              <div className='flex flex-row gap-2'>
                <img src={Ellipse4} alt="ellipse" />
                <div>
                  <p className='text-[#1E293B] text-[14px] font-bold'>John Miller</p>
                  <p className='text-[#64748B] text-[14px] mt-[-2px]'>jmiller@gmail.com</p>
                </div>
              </div>
              <div className='flex flex-row gap-2'>
                <img src={Ellipse5} alt="ellipse"  />
                <div>
                  <p className='text-[#1E293B] text-[14px] font-bold'>Jane Johnson</p>
                  <p className='text-[#64748B] text-[14px] mt-[-2px]'>jj@gmail.com</p>
                </div>
              </div>
              <div className='flex flex-row gap-2'>
                <img src={Ellipse6} alt="ellipse" />
                <div>
                  <p className='text-[#1E293B] text-[14px] font-bold'>Mezie Agnes</p>
                  <p className='text-[#64748B] text-[14px] mt-[-2px]'>fefekartika@gmail.com</p>
                </div>
              </div>
              <div className='flex flex-row gap-2'>
                <img src={Ellipse7} alt="ellipse"/>
                <div>
                  <p className='text-[#1E293B] text-[14px] font-bold'>Halsz Emerse</p>
                  <p className='text-[#64748B] text-[14px] mt-[-2px]'>jiloputri@yahoo.com</p>
                </div>
              </div>
            </div>
          </div>
        
       </div>
    </div>
  )
}

export default Main
