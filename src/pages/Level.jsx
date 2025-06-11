import React from 'react';
import { useNavigate } from 'react-router-dom';

const Level = () => {
  const navigate = useNavigate();

  return (
    <div>
      <style>
        {`
          .level-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 13rem;
            margin-bottom: 16rem;
          }

          .level-buttons button {
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
            width: 70px;
            height: 60px;
          }

          .level-buttons button:hover {
            background-color: #8bec238a;
          }
        `}
      </style>

      <p style={styles.subtitle}>단계를 선택하세요</p>
      <div className="level-buttons">
        {[1, 2, 3, 4, 5].map((level) => (
          <button key={level} onClick={() => navigate(`/Game/${level}`)}>
            {level}단계
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  subtitle: {
    fontSize: '24px',
    fontWeight: '200',
    color: '#008024',
    marginTop: '2.5rem',
    marginBottom: '5rem',
    textAlign: 'center',
  },
};

export default Level;