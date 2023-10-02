import React from 'react'
import {
    HeroCategoryItems
} from '../atoms'

const HeroSection = () => {



  return (
    <section className='my-[30px] p-[14px] border-[1px] border-[#DEE2E7] rounded-lg flex justify-between'>
        <div className='border border-green-500 flex-[2] '>
            <HeroCategoryItems />
        </div>

        <div className='border border-blue-500 flex-[0.7]' >
            test3
        </div>
    </section>
  )
}

export default HeroSection