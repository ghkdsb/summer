import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGallery } from '../context/GalleryContext';
import './Drawing.css';
//import {Link} from 'react-router-dom';

const colors = [
  { name: '검정' ,value: 'black'},
  { name: '하늘' ,value: 'deepskyblue'},
  { name: '초록' ,value: 'green'},
  { name: '노랑' ,value: 'gold'},
  { name: '빨강' ,value: 'orangered'},
  { name: '지우개' ,value: 'white'}
];

const Drawing = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('검정');
  const isDrawing = useRef(false);
  const { addImage } = useGallery();
  const navigate = useNavigate();

// 캔버스 제작
  const startDrawing = (e) => {
    isDrawing.current = true;
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!isDrawing.current) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };
  
  const saveImage = () => {
    const dataUrl = canvasRef.current.toDataURL();
    addImage(dataUrl);
    alert('갤러리에 저장됐습니다!');
  };

  return (
    <div className="drawing-container">
      <h1 className="drawing-title">여름의 풍경을 그려보세요!</h1>
      <div className="color-buttons">
        {colors.map((c) => (
          <button key={c.name} onClick={() => setColor(c.value)} style={{ color: c.value }}>
            {c.name}
          </button>
        ))}
      </div>
      <canvas
        ref={canvasRef}
        width={900}
        height={500}
        style={{ border: '1px solid black' }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <div className="drawing-buttons">
        <button onClick={saveImage}>갤러리에 저장</button>
        <button onClick={() => navigate('/Gallery')}>갤러리 보러가기</button>
      </div>
    </div>
  );
};

export default Drawing;