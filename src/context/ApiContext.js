// ApiProvider.js

import React, { createContext, useContext, useState, useEffect } from 'react';

// Bir bağlam (context) oluştur
const ApiContext = createContext();

// Özel bir kanca (hook) oluştur
export function useApiContext() {
  return useContext(ApiContext);
}

// ApiProvider bileşeni
export function ApiProvider({ children }) {
  // Durumları oluştur ve başlangıç değerleri ata
  const [responses, setResponses] = useState([]); // Cevaplar dizisi ve güncelleme işlevi
  const [currentResponse, setCurrentResponse] = useState(null); // Şu anki cevap ve güncelleme işlevi
  const [apiShowActive, setApiShowActive] = useState(false); // API'nin gösterimi aktif mi, pasif mi?
    

  
  // Şu anki cevabı güncelleme işlevi
  const updateCurrentResponse = (newResponse) => {
    setCurrentResponse(newResponse);
  };

  // Yeni bir cevabı cevaplar dizisine ekleyen işlev
  const addResponseToResponses = (newResponse) => {
    setResponses((prevResponses) => [newResponse, ...prevResponses]);
  };

  // API'den veri almak için işlev
  const fetchData = () => {
    fetch('http://localhost:3000/respons1')
      .then((res) => res.json())
      .then((result) => {
        addResponseToResponses(result); // Cevapları güncelle
      });
  };

  const resetResponse = () => {
    setResponses([]); // Assuming you want to reset the responses 
    
  };


  
  // apiShowActive durumu değiştiğinde çalışan  işlev
  useEffect(() => {
    if (apiShowActive) {
      // Belirli bir aralıkta fetchData işlevini çağır
      const interval = setInterval(() => {
        fetchData();
      }, 1000);

      // Component unmount olduğunda interval temizle
      return () => {
        clearInterval(interval);
      };
    }
  }, [apiShowActive]);
  

  // Bağlamın değerini oluştur
  const contextValue = {
    responses, // Cevaplar dizisi
    currentResponse, // Şu anki cevap
    updateCurrentResponse, // Şu anki cevabı güncelleme işlevi
    addResponseToResponses,// Yeni cevabı cevaplar dizisine ekleyen işlev
    resetResponse, // Resetleme işlevi
    apiShowActive, // API gösteriminin aktif/pasif durumu
    setApiShowActive, // API gösterimini değiştiren işlev
  };

  // Context sağlamak için ApiContext.Provider bileşeni
  return (
    <ApiContext.Provider value={contextValue}>
      {children} {/* İçerik bileşenlerini içe aktar */}
    </ApiContext.Provider>
  );
}
