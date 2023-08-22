import React, { useEffect, useState } from 'react';
import Banner from './Banner';

export default function ApiShow() {
    const [responses, setResponses] = useState([]);
    const [currentResponse, setCurrentResponse] = useState(null); // Son alınan cevabı saklamak için

    const fetchData = () => {
        fetch('http://localhost:3000/respons1')
            .then((res) => res.json())
            .then((result) => {
                setCurrentResponse(result); // Yeni çıktıyı güncelle
            });
    };

    useEffect(() => {
        fetchData(); // İlk çağrıyı yap
        const interval = setInterval(() => {
            fetchData(); // Her 3 saniyede bir çağrıyı tekrarla
        }, 3000);

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
                </ul>
            </div>
            <div className='flex p-6 justify-center items-center'>
             
            </div>
        </>
    );
}
