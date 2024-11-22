import React from 'react';
import food1 from '../../assets/food1.png';
import food2 from '../../assets/food2.png';
import food3 from '../../assets/food3.png';
import food4 from '../../assets/food4.png';
import food5 from '../../assets/food5.png';
import food6 from '../../assets/food6.png';


const Menu = () => {
  return (
    <div className='flex flex-col bg-white py-[25px] gap-[15px] rounded-lg'>
      <div className='px-[25px]'>
          <p className='text-[20px] font-bold text-[#000000f5]'>Menu</p>
          <div className='flex flex-row justify-end items-end text-[#5F6D7E] text-[15px] gap-[15px]'>
            <div className='border-b-2 border-[#6C5DD3] text-[#6C5DD3]'><p>All categories</p></div>
            
            <p>Breakfast</p>
            <p>Lunch</p> 
            <p>Dinner</p>
          </div>
      </div>
      <div className='h-0.5  w-full bg-[#E6E8f0]'/>
      <div className='grid lg:grid-cols-3 grid-cols-2 gap-[10px] items-stretch px-[25px]'>
         <div className='relative lg:col-span-2 rounded-lg object-cover w-full h-full'>
            <img 
              src={food1} 
              className='rounded-lg object-cover w-full h-full'
              alt="food" 
            />
            <div className='absolute bottom-[20px] right-[0px] left-[0px] image-shadow border-[1px] border-solid border-[#FFFFFF] rounded-[6px] p-[2px] flex flex-col gap-[2px] md:h-[70px] h-[55px]'>
              <div className='flex flex-row justify-between w-full text-[12px] text-[#1E293B]'>
                <p>Surf & Turf Gift Basket</p>
                <p>$89.24</p>
              </div>
              <p className='text-[12px] text-[#64748b]'>456 Served</p>
            </div>
         </div>
         <div className='relative col-span-1 rounded-lg object-cover w-full h-full'>
            <img 
              src={food3} 
              className='rounded-lg object-cover w-full h-full'
              alt="food" 
            />
              <div className='absolute bottom-[20px] right-[18px] left-[18px] image-shadow border-[1px] border-solid border-[#FFFFFF] rounded-[6px] p-[13px] flex flex-col gap-[5px] md:h-[70px] h-[55px]'>
              <div className='flex flex-row justify-between w-full text-[12px] text-[#1E293B]'>
                <p>BBQ Rib Dinner</p>
                <p>$69.21</p>
              </div>
              <p className='text-[12px] text-[#64748b]'>456 Served</p>
            </div>
         </div>
       
      </div>
      <div className='grid lg:grid-cols-4 grid-cols-2 gap-[10px] px-[25px]'>
        <div className='relative'>
          <img src={food2} alt="food" className='rounded-lg  object-cover w-full h-full' />
          <div className='absolute bottom-[20px] right-[18px] left-[18px] image-shadow border-[1px] border-solid border-[#FFFFFF] rounded-[6px] p-[13px] flex flex-col gap-[5px] md:h-[70px] h-[55px]'>
              <div className='flex flex-row justify-between w-full text-[12px] text-[#1E293B]'>
                <p>Shaking Beef Tri-Tip</p>
                <p>$69.46</p>
              </div>
              <p className='text-[12px] text-[#64748b]'>456 Served</p>
            </div>
        </div>
        <div className='relative'>
          <img src={food4} alt="food" className='rounded-lg object-cover w-full h-full' />
          <div className='absolute bottom-[20px] right-[18px] left-[18px] image-shadow border-[1px] border-solid border-[#FFFFFF] rounded-[6px] p-[13px] flex flex-col gap-[5px] md:h-[70px] h-[55px]'>
              <div className='flex flex-row justify-between w-full text-[12px] text-[#1E293B]'>
                <p>Surf & Turf Gift Basket</p>
                <p>$98.49</p>
              </div>
              <p className='text-[12px] text-[#64748b]'>456 Served</p>
            </div>
        </div>
        <div className='relative'>
          <img src={food5} alt="food" className='rounded-lg object-cover w-full h-full' />
          <div className='absolute bottom-[20px] right-[18px] left-[18px] image-shadow border-[1px] border-solid border-[#FFFFFF] rounded-[6px] p-[13px] flex flex-col gap-[5px] md:h-[70px] h-[55px]'>
              <div className='flex flex-row justify-between w-full text-[12px] text-[#1E293B]'>
                <p>Chicken & Ribs Combo</p>
                <p>$83.56</p>
              </div>
              <p className='text-[12px] text-[#64748b]'>456 Served</p>
            </div>
        </div>
        <div className='relative'>
          <img src={food6} alt="food" className='rounded-lg' />
          <div className='absolute bottom-[20px] right-[18px] left-[18px] image-shadow border-[1px] border-solid border-[#FFFFFF] rounded-[6px] p-[13px] flex flex-col gap-[5px] md:h-[70px] h-[55px] '>
              <div className='flex flex-row justify-between w-full text-[12px] text-[#1E293B]'>
                <p>Dark & Stormy</p>
                <p>$90.58</p>
              </div>
              <p className='text-[12px] text-[#64748b]'>456 Served</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
