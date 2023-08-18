import React from 'react';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx'
import { brand_logo } from '../../public/assets/icons';
import { UserProfile, SubNav } from '@/app/api/data/nav.data';

const NavBar = () => {
  return (
    <nav className='w-full border'>
        <section className='max-w-[1440px] mx-auto w-[90%]'>
            <div className='flex justify-between items-center py-[22px]'>

            
                <div className='flex-1 '>
                    <Image src={brand_logo} className='w-fit' />
                </div>

                <div className='border-2 border-[#0D6EFD] h-[40px] rounded-[5px] flex flex-2 items-center justify-between w-[50%]'>
                    <input type="text" placeholder='Search' className='h-[100%]  px-[5px] ml-1 outline-0' />

                    <div className='flex flex-row  self-end content-end'>
                        <select name="" id="" className=' border-t-2 border-t-[#0D6EFD] border-l-[2px] border-l-[#0D6EFD] px-[5px] outline-0 ' >
                            <option value=""> All Category </option>
                            <option value=""> Clothing and wear </option>
                            <option value=""> Home interiors </option>
                        </select>

                        <button className='bg-primary px-[23px] py-[px] h-[38px] rounded-r-[5px] text-white'>
                            Search
                        </button>
                    </div>
                
                </div>

                <div className='flex ml-[80px] flex-1 justify-between flex-row '>
                    {
                        UserProfile?.map((items, idx) => {
                            return (
                                <ul key={idx} className='w-fit '>
                                    <li className=' flex flex-col items-center'>
                                        <Image src={items.icon} alt={items.text} height={'20px'} width={'20px'} />
                                        <p className='text-[12px] text-main'>{items.text}</p>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>

            </div>

            
        </section>

        <section className='max-w-[1440px] w-[90%] mx-auto border'>
            <div className=' flex py-[17px] justify-between'>
                    <ul className='flex w-[50%] justify-between'>
                        {
                            SubNav.map((item, idx) => {
                                return (
                                    <li key={idx} className='font-[500] '>
                                        {item.text}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className=''>
                        <select name="" id="">
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="EUR">Pounds</option>
                        </select>
                    </div>
            </div>
        </section>
        
    </nav>
  )
}

export default NavBar