"use client"
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import data from "@/utils/Raw"
import SubjectCard from '@/components/SubjectCard'
export default function Home() {
  const [branch,setBranch]=useState("");
  const [semester,setSemester]=useState("");
  const [sum,setSum]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  let filteredData=data[0]
  useEffect(()=>{
    if(branch && semester){
      setSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
      const code=branch.slice(0, 2)+semester.slice(0,1);
      [filteredData]=data.filter(item=>item.id==code);
    }
  },[branch,semester])
  const [sgpa,setSgpa]=useState(0);
  const buttonHandler=()=>{
    let superSum=0;
    sum.map((val)=>{
      superSum+=val;
    })
    setSgpa(superSum/filteredData.total_credits);
    
  }
  return (
    <main className='bg-gray-400   h-screen flex flex-col justify-between'>
      <Footer setBranch={setBranch} setSemester={setSemester} branch={branch} semester={semester}/>
      <div className='pr-5 pl-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-20'>
        {
          semester.length>1 && branch.length>1 &&
            filteredData.subjects.map((sub)=>(
              <SubjectCard id={sub.id} key={sub.id} name={sub.name} credit={sub.credits} sum={sum} setSum={setSum} />
            ))
        }
      </div>
      {
          semester.length>1 && branch.length>1 &&
            <div className='flex justify-around pb-6'>
              <button onClick={()=>buttonHandler()} className="bg-gray-500 hover:bg-gray-700 p-10 text-white font-bold py-2 px-4 rounded">{sgpa?sgpa.toFixed(2):"Get SPGA"}</button>
            </div>
      }
    </main>
  )
}
