import React, { useEffect } from 'react';
import Banner from './Banner';
import { useApiContext } from '../context/ApiContext'; // Hook'u içe aktar
import classNames from 'classnames'
import BannerBeogs2 from './BannerBeogs2';
export default function ApiShow() {
    // ApiContext'ten gerekli değerleri al
    const { responses, addResponseToResponses, apiShowActive, resetResponse } = useApiContext();
   
    // Komponent yüklendiğinde ve apiShowActive durumu değiştiğinde çalışacak işlev
    useEffect(() => {
      // apiShowActive durumu true ise
      if (apiShowActive) {
        // API'den veri çekme işlevi
        const fetchData = () => {
          fetch('http://localhost:3000/respons1')
            .then((res) => res.json())
            .then((result) => {
              addResponseToResponses(result); // Yeni cevapları cevaplar dizisine ekle
            });
        };
  
        fetchData(); // İlk veri çekme işlemi

        // Komponent temizlendiğinde yapılacak temizlik işlemleri
        return () => {
            // İhtiyaca göre temizlik işlemleri burada yapılabilir
          };
        }
      }, [apiShowActive]); // apiShowActive durumu değiştiğinde işlemin tekrarlanmasını sağlar



      
    // Ekranda hep en güncel 4 lüyü göstermek için
    const lastFourResponses = responses.slice(0, 4);
  console.log(lastFourResponses)
    return (
      //     apiden gelenleri mapleyip bannera prop geçme
      <>  
        <div className='border flex-row border-black '>
          <button className='border border-gray-300 rounded-full' onClick={resetResponse}>Reset Button</button>
          <ul className="grid grid-cols-5 gap-y-6 border border-red">
            
            {lastFourResponses.map((responseList, index) => (
              <li className="post" key={index}>
                {responseList.map((post) => (
                  <Banner
                    key={post.id}
                    post_images={post.images}
                    post_imagesdef={post.imagesdef}
                    post_passStatus={post.passStatus}
                    post_egmStatus={post.egmStatus}
                    post_fingerPrintStatus={post.fingerPrintStatus}
                    post_succesStatus={post.succesStatus}
                  />
                ))}
              </li>
            ))}

            
            <span className='justify-center items-center flex'>
          
          {lastFourResponses.length > 0 && lastFourResponses[0].map((post) => (
           <span className='grid grid-cols-2 gap-2' key={post.id}>
           <span className={classNames({
             'text-green-500': post.passStatus && post.egmStatus,
             'text-red-500': !(post.passStatus && post.egmStatus),
           })}>
             {post.passStatus && post.egmStatus ? 'Beogs Step1 ' : 'Beogs Step1'}
           </span>
           <span className={classNames({
             'text-green-500': post.fingerPrintStatus && post.succesStatus,
             'text-red-500': !(post.fingerPrintStatus && post.succesStatus),
           })}>
             {post.fingerPrintStatus && post.succesStatus ? 'Beogs Step2' : 'Beogs Step2'}
           </span>
         </span>
         
          ))}
        </span>
          </ul>
          
        </div>
      </>
    );
}
