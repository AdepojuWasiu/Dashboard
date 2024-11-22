import React from 'react';
import { Iconly } from 'react-iconly';

const Total = () => {
  return (
    <div className='grid lg:grid-cols-4 grid-cols-2 gap-[16px]'>
       <div className='shadow border-[1px] border-[#FFFF] h-[182px] rounded-[6px] py-[24px] pl-[24px] flex flex-col gap-[25px]' >
         <div className='bg-[#fff] rounded-xl flex justify-center items-center w-[45px] py-2'>
           <Iconly name='Paper' set='bulk' stroke='bold' style={{ stroke: "#111827", color:"#130F26", width: 24, height: 24}}/>
         </div>
         <div className='flex flex-col'>
           <p className='text-[14px] text-[#64748B]'>Total Menu</p>
           <p className='text-[30px] font-bold text-[#1E293B]'>345</p>
         </div>
      
       </div>
       <div className='shadow border-[1px] border-[#FFFF] h-[182px] rounded-[6px] py-[24px] pl-[24px] flex flex-col gap-[25px]' >
         <div className='bg-[#fff] rounded-xl flex justify-center items-center w-[45px] py-2'>
           <Iconly name='Activity' set='bulk' stroke='bold' style={{ stroke: "#111827", color:"#130F26", width: 24, height: 24}}/>
         </div>
         <div className='flex flex-col'>
           <p className='text-[14px] text-[#64748B]'>Total Revenue</p>
           <p className='text-[30px] font-bold text-[#1E293B]'>$37,193.00</p>
         </div>
       </div>
       <div className='shadow border-[1px] border-[#FFFF] h-[182px] rounded-[6px] py-[24px] pl-[24px] flex flex-col gap-[25px]' >
         <div className='bg-[#fff] rounded-xl flex justify-center items-center w-[45px] py-2'>
           <Iconly name='TwoUsers' set='bulk' stroke='bold' style={{ stroke: "#111827", color:"#130F26", width: 24, height: 24}}/>
         </div>
         <div className='flex flex-col'>
           <p className='text-[14px] text-[#64748B]'>Total Customer</p>
           <p className='text-[30px] font-bold text-[#1E293B]'>1349</p>
         </div>
       </div>
       <div className='shadow border-[1px] border-[#FFFF] h-[182px] rounded-[6px] py-[24px] pl-[24px] flex flex-col gap-[25px]' >
         <div className='bg-[#fff] rounded-xl flex justify-center items-center w-[45px] py-2'>
           <Iconly name='Bag' set='bulk' stroke='bold' style={{ stroke: "#111827", color:"#130F26", width: 24, height: 24}}/>
         </div>
         <div className='flex flex-col'>
           <p className='text-[14px] text-[#64748B]'>Total Orders</p>
           <p className='text-[30px] font-bold text-[#1E293B]'>3,500</p>
         </div>
       </div>
       
      
    </div>
  )
}

export default Total
