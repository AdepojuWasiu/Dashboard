import React from 'react'
import vector from '../../assets/vector.png'
import { Iconly } from 'react-iconly';
import Piechart from '../piechart/pie';
import { IoIosClose } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const  Navbar = () => {
  return (
    <div className='bg-white w-[330px] h-[850px] sm:flex hidden flex-col gap-[170px]'>
        <div className='flex-col'>
          <div className='flex justify-start items-start justify-items-start ml-[47px] gap-4 text-bold mt-[35px] mb-[50px]'>
            <div className='w-[45px] h-[45px] bg-[#6C5DD3] rounded-tl-2xl rounded-br-2xl flex items-center justify-center'>
              <img src={vector} alt='vector'/>
            </div>
            <div>
              <p style={{fontFamily: 'Crete Round'}}>Chucky</p>
              <p className='text-[10px]' style={{fontFamily: 'Crete Round'}}> Admin Dashboard</p>
            </div>
         </div>
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

export default  Navbar
