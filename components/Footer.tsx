"use client"

import { Dropdown } from 'flowbite-react'
import React from 'react'

interface prop{
    branch:string,
    semester:string,
    setBranch:any,
    setSemester:any
}
const Footer = ({branch,semester,setBranch,setSemester}:prop) => {
  return (
    <div className='flex justify-around pt-5 pb-3 pr-1 pl-1 bg-gray-500 '>
        <div className='text-blue-900 text-lg flex flex-col justify-around'>SGPA Calculator</div>
        <div>
            <Dropdown label={branch.length > 1 ? branch : "Branch"} dismissOnClick={true} className='text-white bg-slate-300'>
                <Dropdown.Item onClick={()=>setBranch("CSE") }>CSE</Dropdown.Item>
                <Dropdown.Item onClick={()=>setBranch("IT")}>IT</Dropdown.Item>
                <Dropdown.Item onClick={()=>setBranch("AI")}>AI</Dropdown.Item>
                <Dropdown.Item onClick={()=>setBranch("ME")}>ME</Dropdown.Item>
                <Dropdown.Item onClick={()=>setBranch("ECE")}>ECE</Dropdown.Item>
                <Dropdown.Item onClick={()=>setBranch("EE")}>EE</Dropdown.Item>
                <Dropdown.Item onClick={()=>setBranch("CE")}>CE</Dropdown.Item>
            </Dropdown>
        </div>
        <div>
            <Dropdown label={semester.length>1?semester:"Semester"} dismissOnClick={true} className='text-white bg-slate-300'>
                <Dropdown.Item onClick={()=>setSemester("1st") }>1st</Dropdown.Item>
                <Dropdown.Item onClick={()=>setSemester("2nd") }>2nd</Dropdown.Item>
                <Dropdown.Item onClick={()=>setSemester("3rd") }>3rd</Dropdown.Item>
                <Dropdown.Item onClick={()=>setSemester("4th") }>4th</Dropdown.Item>
                <Dropdown.Item onClick={()=>setSemester("5th") }>5th</Dropdown.Item>
                <Dropdown.Item onClick={()=>setSemester("6th") }>6th</Dropdown.Item>
                <Dropdown.Item onClick={()=>setSemester("7th") }>7th</Dropdown.Item>
                <Dropdown.Item onClick={()=>setSemester("8th") }>8th</Dropdown.Item>
            </Dropdown>
        </div>
    </div>
  )
}

export default Footer