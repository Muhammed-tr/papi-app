//prop olarak gelen kullanıcı bilgilerine göre yerleştirme yap
// görselin sayfa ilk render edildiğinde default olarak ayarlanan görsel olarak ayarla daha
 //sornasında butona ekledğinde kişini bilgileri gelecek şekilde güncellle
 import React from 'react'
 import classNames from 'classnames'
 // import { useState } from 'react'
//  import { BiRectangle } from 'react-icons/bi';
 
 
 export default function Banner(props) {
 
     const show = props.show
     //console.log({ show })
     return (
 
         <div className=''>
 
             <div className='border border-red-500 md:p-4 p-1 justify-center items-center'>
 
 
                 <div className=''>
                     {/* Rectangel yerine base64 gelecek ve konumu ayarlanacak*/ }
                     
 
 
                     <div className=''>
                     
                         {show === false ? (
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
 
 
             </div>
 
 
         </div>
     )
 }