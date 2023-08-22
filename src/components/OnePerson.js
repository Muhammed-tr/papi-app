import React from 'react'
import classNames from 'classnames'
import userData from '../User.json';
import { useState,useEffect } from 'react';
export default function OnePerson

() {

    let imgDefObj = {
        imgUrl:"https://media.istockphoto.com/id/1298261537/tr/vekt%C3%B6r/bo%C5%9F-adam-profil-kafas%C4%B1-simge-yer-tutucu.jpg?s=612x612&w=0&k=20&c=RM2Xo5rrLY3c_mWdZUx-JoDeKHr3j5KrueZPjvscQjI="
      };
      let imgObj = {
        imgUrl: "https://media.istockphoto.com/id/1142192548/tr/vekt%C3%B6r/adam-avatar-profili-erkek-y%C3%BCz-siluet-veya-simge-beyaz-arka-planda-izole-vekt%C3%B6r-illustration.jpg?s=612x612&w=0&k=20&c=-halrTQu_4WSXzF4qREPLl9KWRi7RG5X6Du_isNY7vc="
      };


 
                return (
    <div className='inline-flex w-52'>
      <div className='border border-red-500 md:p-4 p-1 justify-center items-center'>
        <div className=''>
        <div className=''>
                     
                     {currentIndex%2 === 0 ? (
                         <img className='scale-75 border  ' src={imgDefObj.imgUrl} alt="" />
                     ) :  (
                         <img className='scale-75 border  ' src={imgObj.imgUrl} alt="" />

                     )}
                 </div>
        </div>
        <ul className='grid grid-cols-4 md:text-base text-xs'>
          <li className={classNames({
            "rounded-full w-10 inline-flex items-center justify-center  text-white": true,
            "bg-green-500": person.passStatus,
            "bg-red-500": !person.passStatus
          })}>
            PAS
          </li>
          <li className={classNames({
            "rounded-full w-10 inline-flex items-center justify-center  text-white": true,
            "bg-green-500": person.egmStatus,
            "bg-red-500": !person.egmStatus
          })}>
            EGM
          </li>
          <li className={classNames({
            "rounded-full w-10 inline-flex items-center justify-center  text-white": true,
            "bg-green-500": person.fingerPrintStatus,
            "bg-red-500": !person.fingerPrintStatus
          })}>
            FNGR
          </li>
          <li className={classNames({
            "rounded-full w-10 inline-flex items-center justify-center  text-white": true,
            "bg-green-500": person.succesStatus,
            "bg-red-500": !person.succesStatus
          })}>
            SCS
          </li>
        </ul>
                 
 
             </div>
            
 
         </div>
  );
}
