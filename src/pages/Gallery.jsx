import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { useNavigate } from 'react-router-dom';

// 나갔다 들어와도 저장될 수 있도록.
const Gallery = () => {
  const { images, removeImage } = useGallery();
  const navigate = useNavigate();

  return (
    <div>
    <style>
        {`
          .drawingBtn {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }

          .drawingBtn button {
            font-family: 'NanumSquareNeo', sans-serif;
            margin: 0 0.5rem;
            padding: 0.625rem 1rem;
            border: none;
            border-radius: 50%;
            box-shadow: 3px 4px 10px rgba(147, 222, 61, 0.605);
            background-color: rgb(255, 255, 255);
            color: black;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
          }

          .drawingBtn button:hover {
            background-color: #8bec238a;
          }
        `}
      </style>

    <div style={styles.galleryContainer}>
      <h1 style={styles.galleryTitle}>내 그림 갤러리</h1>
      <div className='drawingBtn'>
      <button onClick={() => navigate('/Drawing')}>그림판으로 돌아가기</button>
      </div>
      <div style={styles.galleryGrid}>
        {images.map((img, i) => (
          <div key={i} style={styles.imageWrapper}>
            <img
              src={img}
              alt={`그림 ${i}`}
              width={700}
              height={400}
              style={styles.image}
            />
            <button style={styles.deleteButton} onClick={() => removeImage(i)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

const styles = {
  galleryContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0.625rem',
  },
  galleryTitle: {
    fontSize: '24px',
    fontWeight: '200',
    color: '#008024',
    marginBottom: '3.125rem',
    textAlign: 'center',
  },
  galleryGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.25rem',
    marginTop: '1.875rem',
    maxWidth: '1500px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  imageWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  image: {
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(138, 224, 84, 0.454)',
  },
  deleteButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '0.31rem 0.625rem',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  drawingBtn: {
    fontFamily: 'NanumSquareNeo',
    margin: '0 0.625rem',
    padding: '0.625rem 1.25rem',
    backgroundColor: 'rgba(147, 222, 61, 0.605)',
    color: 'rgb(48, 120, 0)',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }
};

export default Gallery;