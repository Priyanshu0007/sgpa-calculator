import { Dropdown } from 'flowbite-react'
import React, { useState } from 'react'
interface props{
    id:number,
    name:string,
    credit:number,
    sum:number[]
    setSum:any
}
const SubjectCard = ({id,name,credit,sum,setSum}:props) => {
    const [grade,setGrade]=useState("");
    const grades=[
        {grade:"A++",value:10},
        {grade:"A+",value:9},
        {grade:"A",value:8.5},
        {grade:"B+",value:8},
        {grade:"B",value:7.5},
        {grade:"C+",value:7},
        {grade:"C",value:6.5},
        {grade:"D+",value:6},
        {grade:"D",value:5.5},
        {grade:"E+",value:5},
        {grade:"E",value:4},
    ]
  return (
    <div className='flex justify-between h-full bg-slate-600 pl-2  p-1 md:p-2 rounded-lg'>
        <p className='flex flex-col justify-around'>{name}</p>
        <Dropdown className='text-gray-700 bg-slate-300' label={grade.length>0 ? grade : "Grade"} dismissOnClick={true}>
            {
                grades.map((it)=>
                    <Dropdown.Item key={it.value} onClick={()=>{
                        setGrade(it.grade);
                        const newState=sum.map((obj,val )=> {
                            if (val === id) {return (credit * it.value);}
                            return obj;
                          });
                        setSum(newState);
                    }}>{it.grade}</Dropdown.Item>
                )
            }
        </Dropdown>
    </div>
  )
}

export default SubjectCard