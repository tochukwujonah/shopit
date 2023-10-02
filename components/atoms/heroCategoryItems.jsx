"use client"
import React, { useState } from 'react'

const HeroCategoryItems = () => {
  const CategoryListData = [
    {
      name:"Automobiles"
    },
    {
      name: "Clothes and wears"
    },
    {
      name: "Home interiors"
    },
    {
      name: "Computers and tech"
    },
    {
      name: "Tools, equipments"
    },
    {
      name: "Sports and outdoor"
    },
    {
      name: "Animals and pets"
    },
    {
      name: "Machinery and tools"
    },
    {
      name: "Accessories"
    },

  ]

  return (
    <div className='flex justify-between'>
        <ul className='border border-blue-500 flex-[1] '>

          {
            CategoryListData.map((item, idx) => {
              return(
                <li key={idx} className='p-[10px] cursor-pointer hover:bg-[#E5F1FF] hover:rounded-md '
                // onClick={}
                > {item.name} </li>
              )
            })
          }

        </ul>

        <div className='border border-red-500 flex-[2] '>

        </div>
    </div>
  )
}

export default HeroCategoryItems