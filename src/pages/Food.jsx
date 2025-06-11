import React from 'react';
import { Link } from 'react-router-dom';
import food1 from '../img/greengrapeade.png';
import food2 from '../img/tomato.png';
import food3 from '../img/watermelon.png';
import food4 from '../img/cucumber.png';
import food5 from '../img/mango.png';

const Food = () => {
  const foodImages = [
    { name: '청포도에이드', url: 'food1', src: food1, alt: '청포도에이드' },
    { name: '토마토마리네이드', url: 'food2', src: food2, alt: '토마토마리네이드' },
    { name: '화채', url: 'food3', src: food3, alt: '화채' },
    { name: '오이냉국', url: 'food4', src: food4, alt: '오이냉국' },
    { name: '망고아이스크림', url: 'food5', src: food5, alt: '망고아이스크림' },
  ];


  return (
    <>
      <style>
        {`
          .image {
            position: relative;
            overflow: hidden;
          }

          .image img {
            width: 400px;
            height: 360px;
            object-fit: cover;
            display: block;
            transition: filter 0.3s ease;
          }

          .image img:hover {
            filter: brightness(1.2) saturate(90%);
          }
        `}
      </style>


      <p style={styles.subtitle}>음식을 골라 보세요.</p>
      <section style={styles.foodSection}>
        {foodImages.map((item, i) => (
          <Link to={`/Food/${item.url}`} key={i} style={styles.imageLink}>
            <div className="image">
              <img src={item.src} alt={item.alt} style={styles.image} />
              <div className="overlay"></div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

const styles = {
  foodSection: {
    textAlign: 'center',
    padding: '0 10vw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem 4rem',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: '200',
    color: '#008024',
    marginTop: '40px',
    marginBottom: '80px',
    textAlign: 'center',
  },
  imageLink: {
    textDecoration: 'none',
  },
  image: {
    objectFit: 'cover',
    transition: 'transform 0.3s',
  },
};

export default Food;