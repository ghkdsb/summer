import React, { createContext, useContext, useEffect, useState } from 'react';

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [images, setImages] = useState(() => {
    // 로컬스토리지에서 불러오기
    const saved = localStorage.getItem('galleryImages');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // 저장될 때마다 localStorage에 반영
    localStorage.setItem('galleryImages', JSON.stringify(images));
  }, [images]);
  

  const addImage = (newImage) => {
    setImages((prev) => [...prev, newImage]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <GalleryContext.Provider value={{ images, addImage, removeImage }}>
      {children}
    </GalleryContext.Provider>
  );

};


export const useGallery = () => useContext(GalleryContext);