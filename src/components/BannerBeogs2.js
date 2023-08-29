//prop olarak gelen kullanıcı bilgilerine göre yerleştirme yap

import React from 'react'
import classNames from 'classnames'
// import { useState } from 'react'
//  import { BiRectangle } from 'react-icons/bi';


export default function BannerBeogs2(props) {
  
    const show = props.show
    //console.log({ show })
    return (

        <div className=''>

            <div className='border border-gray-300 md:p-4 p-1 justify-center items-center'>


                <div className=''>
                    {/* Rectangel yerine base64 gelecek ve konumu ayarlanacak*/ }
                    


                    <div className=''>
                    
                        {show === true ? (
                            <img className='scale-75 border  ' src={props.post_imagesdef} alt="" />
                        ) : (
                            <img className='scale-75 border  ' src={props.post_images} alt="" />

                        )}
                    </div>
                </div>

                <ul className='grid grid-cols-4   md:text-base text-xs'>


                    <li className={classNames({
                        "rounded-full inline-flex items-center justify-center  text-white": true,
                        "bg-white": props.post_passStatus === 'default:',
                        "bg-green-500": props.post_passStatus === true,
                        "bg-red-500": props.post_passStatus === false
                    })}> 
                        PAS
                    </li>

                    <li className={classNames({
                        "rounded-full inline-flex items-center justify-center  text-white": true,
                        "bg-white": props.post_egmStatus === 'default:',
                        "bg-green-500": props.post_egmStatus === true,
                        "bg-red-500": props.post_egmStatus === false
                    })}>
                        EGM
                    </li>



                    <li className={classNames({
                        "rounded-full inline-flex items-center justify-center  text-white": true,
                        "bg-white": props.post_fingerPrintStatus === 'default:',
                        "bg-green-500": props.post_fingerPrintStatus === true,
                        "bg-red-500": props.post_fingerPrintStatus === false
                    })}> 
                        FNGR
                    </li>

                    <li className={classNames({
                        "rounded-full inline-flex items-center justify-center  text-white": true,
                        "bg-white": props.post_succesStatus === 'default:',
                        "bg-green-500": props.post_succesStatus === true,
                        "bg-red-500": props.post_succesStatus === false
                    })}>
                        SCS
                    </li>
                 

                </ul>
           
                <div className="flex flex-col md:flex-row gap-2 py-2">
   <div className={`bg-${props.post_passStatus && props.post_egmStatus ? 'green' : 'red'}-500 text-white `}>
       <span>Beogs1(step1) {props.post_passStatus && props.post_egmStatus ? '' : ''}</span>
   </div>

   <div className={`bg-${props.post_fingerPrintStatus && props.post_succesStatus ? 'green' : 'red'}-500 text-white `}>
       <span>Beogs1(step2) {props.post_fingerPrintStatus && props.post_succesStatus ? '' : ''}</span>
   </div>
</div>



            </div>


        </div>
    )
}