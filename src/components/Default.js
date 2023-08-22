import React from 'react'
import classNames from 'classnames'
import userData from '../User.json';
import { useState } from 'react';
export default function Default

() {

    let imgDefObj = {
        imgUrl:"https://media.istockphoto.com/id/1298261537/tr/vekt%C3%B6r/bo%C5%9F-adam-profil-kafas%C4%B1-simge-yer-tutucu.jpg?s=612x612&w=0&k=20&c=RM2Xo5rrLY3c_mWdZUx-JoDeKHr3j5KrueZPjvscQjI="
      };
      let imgObj = {
        imgUrl: "https://media.istockphoto.com/id/1142192548/tr/vekt%C3%B6r/adam-avatar-profili-erkek-y%C3%BCz-siluet-veya-simge-beyaz-arka-planda-izole-vekt%C3%B6r-illustration.jpg?s=612x612&w=0&k=20&c=-halrTQu_4WSXzF4qREPLl9KWRi7RG5X6Du_isNY7vc="
      };


      const [currentIndex, setCurrentIndex] = useState(0);
   
      const nextPerson = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % userData.length);
      };
    
      const person = userData[currentIndex];
    console.log(currentIndex%2)
 
 
                return (
    <div className='inline-flex w-52'>
      <div className='border border-red-500 md:p-4 p-1 justify-center items-center'>
        <div className=''>
        <div className=''>
                                      
                         <img className='scale-75 border  ' src={imgDefObj.imgUrl} alt="" />
                                         
                 </div>
        </div>
        <ul className='grid grid-cols-4 md:text-base text-xs'>
          <li className={classNames({
            "rounded-full w-10 inline-flex items-center justify-center  text-white": true,
            "bg-white": person.passStatus,
            
          })}>
            PAS
          </li>
          <li className={classNames({
            "rounded-full w-10 inline-flex items-center justify-center  text-white": true,
            "bg-white": person.egmStatus
           
          })}>
            EGM
          </li>
          <li className={classNames({
            "rounded-full w-10 inline-flex items-center justify-center  text-white": true,
            "bg-white": person.fingerPrintStatus,
            
          })}>
            FNGR
          </li>
          <li className={classNames({
            "rounded-full w-10 inline-flex items-center justify-center  text-white": true,
            "bg-white": person.succesStatus
          
          })}>
            SCS
          </li>
        </ul>
                 <button className='bg-blue-500 hover:bg-blue-700 
                   text-white font-bold  rounded text-sm md:text-base ' onClick={nextPerson}>Next</button>
 
             </div>
            
 
         </div>
  );
}
