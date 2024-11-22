import React from 'react';
import { Iconly } from 'react-iconly';
import Avatar from '../../assets/Avatar.png';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { useState } from "react";
import vector from '../../assets/vector.png'
import Piechart from '../piechart/pie';
import { IoIosClose } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const Header = () => {

  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className='flex flex-row justify-between bg-white w-full'>
       <div className='ml-8  lg:flex hidden justify-center items-center justify-items-center'>
         <div className='flex flex-col'>
             <p className='text-[#111827] text-[24px] font-bold'>Hi Taylor!</p>
            <p className='text-[#718096] text-[14px]'>Lets check your store today</p>
         </div>
         
       </div>
       <div className='md:hidden flex flex-col justify-start items-start justify-items-start pl-3 gap-2 text-bold pt-2'>
            <div className=' bg-[#6C5DD3] rounded-tl-2xl rounded-br-2xl flex items-center justify-center'>
              <img src={vector} alt='vector'/>
            </div>
            <div>
              <p style={{fontFamily: 'Crete Round'}} className='font-bold'>Chucky</p>
              <p className='text-[15px] font-bold' style={{fontFamily: 'Crete Round'}}> Dashboard</p>
            </div>
         </div>
       <div className='flex justify-center items-center justify-items-center md:gap-10 gap-4 pl-3 py-3' >
         <div className='flex flex-row bg-[#FAFAFA] h-5 py-5 px-6 lg:pr-40 md:pr-20 pr-10 justify-center justify-items-center items-center rounded-[12px] border-[1px] border-[#D9D9D9]'>
           <Iconly name='Search' set='bulk' stroke='bold' style={{ stroke: "#111827", color:"#ffff", width: 17.2, height: 17.62 }}/>
           <input type="text" placeholder='Search...' className='w-[100px] h-[32px] text-[14px] bg-[#FAFAFA] border-none focus:outline-none ' />
         </div>
         <div className='flex justify-center items-center justify-items-center gap-1'>
            <div className='relative'>
              <Iconly name='Message' set='bulk' stroke='bold' style={{ stroke: "#111827", color:"#ffff", width: 25, height: 20}}/>
              <div className="bg-[#e92828] absolute top-[-6px] right-[-4px] z-30 py-[1px] px-[5px] rounded-full font-bold text-[10px] text-[#ffff]"><p>5</p></div>
            </div>
            <div className='relative'>
              <Iconly name='Notification' set='bulk' stroke='bold' style={{ stroke: "#111827", color:"#ffff", width: 25, height: 20}}/>
              <div className="bg-[#e92828] absolute top-[-6px] right-[-4px] z-30 py-[1px] px-[5px] rounded-full font-bold text-[10px] text-[#ffff]"><p>4</p></div>
            </div>
         </div>
         <div className='md:flex hidden justify-center items-center justify-items-center gap-4 mr-5'>
            <img src={Avatar} alt="avatar" className='w-[48px] h-[48px]' />
            <p className='text-[700] text-[16px] text-[#111827] font-bold '>Tymisha Obey</p>
         </div>
       </div>

       <div className="flex flex-col md:hidden pr-5 pl-4 pt-6" >
          <div className="z-20">
              {toggleDropdown 
              ? <RiCloseLine color='#808080' size={27} onClick = {() => setToggleDropdown(false)} />
              : <RiMenu3Line color='#808080' size={27} onClick = {() => setToggleDropdown(true) } /> 
            
            }
          </div>
          <div>
                {
                toggleDropdown && (
                  <div className="flex justify-center items-center justify-items-center gap-7  
                          flex-col scale-up-center fixed z-10  right-[10vw] bg-[#ffff] 
                          left-[10vw] bottom-[10vw] top-[50px] border-[#d6d2d2] border-[1px]">
                                   <div className='flex-col'>

          <div className='flex flex-col justify-start items-start justify-items-start ml-[47px] gap-8' >
            <div className='flex justify-center items-center gap-3 bg-[#6C5DD3] rounded-[12px] p-4 ml-[-15px] my-[-4px]'>
              <Iconly name='Activity' set='bulk' stroke='bold' style={{ stroke: "#ffff", color:"#6C5DD3", width: 24, height: 24}}/>
              <div className='text-bold text-[16px] mr-[50px] text-[#fff]'>Dashboard</div>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <div className='flex flex-row justify-between gap-8 '>
                <div className='flex gap-3'>
                    <Iconly name='Bag' set='bulk' stroke='bold' style={{ stroke: "#8F95B2", color:"#ffff", width: 24, height: 24}}/>
                    <div className='text-bold text-[16px] text-[#8F95B2]'>Orders</div>
                </div>
                <IoIosArrowForward color="gray" className="w-[20px] h-[20px] " />
              </div>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <Iconly name='Chart' set='bulk' stroke='bold' style={{ stroke: "#8F95B2", color:"#ffff", width: 24, height: 24}}/>
              <div className='text-bold text-[16px] text-[#8F95B2]'>Analytics</div>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <Iconly name='TwoUsers' set='bulk' stroke='bold' style={{ stroke: "#8F95B2", color:"#ffff", width: 24, height: 24}}/>
              <div className='text-bold text-[16px] text-[#8F95B2]'>Customer</div>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <Iconly name='Document' set='bulk' stroke='bold' style={{ stroke: "#8F95B2", color:"#ffff", width: 24, height: 24}}/>
              <div className='text-bold text-[16px] text-[#8F95B2]'>Menu</div>
            </div>
          </div>
        </div>
        <div className=' p-7 m-5 rounded-md subscription relative'>
          <Piechart />
          <p className='text-[15px] text-[#272D37]'>Subscription Plan</p>
          <p className='text-[14px] text-[#5F6D7E]'>Your Subscription plan will expire soon please upgrade!</p>
          <p className='text-[14px] mt-3 text-[#6353D3]'>Upgrade</p>
          <div className='absolute top-2 right-2 bg-white p-[2px]'>
            <IoIosClose color="gray" className="w-[30px] h-[30px] " />
          </div>
          
        </div>

                  </div>
                )
              }
          </div>
        </div>
    </div>
  )
}

export default Header
