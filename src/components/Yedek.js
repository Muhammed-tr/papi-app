APİSHOW

import React, { useEffect, useState } from 'react';
import Banner from './Banner';

export default function ApiShow() {
    const [responses, setResponses] = useState([]);//Api çağrısı
    const [currentResponse, setCurrentResponse] = useState(null); // Son alınan cevabı saklamak için
    const [doorStatuses, setDoorStatuses] = useState({});

  
    const fetchData = () => {
        fetch('http://localhost:3000/respons1')
            .then((res) => res.json())
            .then((result) => {
                setCurrentResponse(result);
                
                 // Kapı durumlarını güncelle
                const newDoorStatuses = result.map(person => ({
                    passStatus: person.passStatus,
                    egmStatus: person.egmStatus,
                    fingerPrintStatus: person.fingerPrintStatus,
                    succesStatus: person.succesStatus
                }));
                setDoorStatuses(newDoorStatuses);
                console.log(newDoorStatuses)
            });
    };
    
console.log(responses)
    useEffect(() => {
         // İlk çağrıyı yap
        const interval = setInterval(() => {
            //fetchData(); // Her 3 saniyede bir yeni api çağrısı 
        }, 10000);

        return () => {
            clearInterval(interval); // Komponent çözüldüğünde interval'i temizle
        };
    }, []);

    useEffect(() => {
        if (currentResponse) {
            setResponses((prevResponses) => [currentResponse, ...prevResponses]);
        }
    }, [currentResponse]);

    return (
        <>
            <div className='border flex-row border-black '>
                <ul className="grid grid-cols-4 gap-y-6 border border-red">
                    {responses.map((responseList, index) => (
                        <li className="post" key={index}>
                            {responseList.map((post, subIndex) => (
                                <Banner
                                    key={post.id}
                                    post_images={post.images}
                                    post_imagesdef={post.imagesdef}
                                    doorStatus={doorStatuses[subIndex]} 
                                    post_passStatus={post.passStatus}
                                    post_egmStatus={post.egmStatus}
                                    post_fingerPrintStatus={post.fingerPrintStatus}
                                    post_succesStatus={post.succesStatus}
                                />
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex p-6 justify-center items-center'>
             
            </div>
        </>
    );
}


BANNER

//prop olarak gelen kullanıcı bilgilerine göre yerleştirme yap
// görselin sayfa ilk render edildiğinde default olarak ayarlanan görsel olarak ayarla daha
 //sornasında butona ekledğinde kişini bilgileri gelecek şekilde güncellle
 import React from 'react'
 import classNames from 'classnames'
 // import { useState } from 'react'
//  import { BiRectangle } from 'react-icons/bi';
 
 
 export default function Banner(props) {
    const doorStatus = props.doorStatus;
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
            
                 <div className="flex flex-col md:flex-row gap-2 py-2">
    <div className={`bg-${doorStatus.passStatus && doorStatus.egmStatus ? 'green' : 'red'}-500 text-white `}>
        <span>Beogs1(step1) {doorStatus.passStatus && doorStatus.egmStatus ? '' : ''}</span>
    </div>

    <div className={`bg-${doorStatus.fingerPrintStatus && doorStatus.successStatus ? 'green' : 'red'}-500 text-white `}>
        <span>Beogs1(step2) {doorStatus.fingerPrintStatus && doorStatus.successStatus ? '' : ''}</span>
    </div>
</div>



             </div>
 
 
         </div>
     )
 }


