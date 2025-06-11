import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const wordList = {
  1: ['해', '빛', '땀', '물', '밤', '열', '산', '비', '꽃', '풀', '별', '강', '흙', '연', '불'],
  2: ['여름', '태양', '수박', '냉면', '휴가', '폭염', '계곡', '장마', '모래', '바다', '습도', '얼음', '모자', '햇빛', '쨍쨍'],
  3: ['물놀이', '초여름', '여름밤', '선풍기', '모래밭', '빗방울', '더운날', '해수욕', '바닷물', '모기향', '놀이터', '선크림', '열사병', '에어컨', '팥빙수'],
  4: ['여름휴가', '수박화채', '파도소리', '한낮더위', '피부탄다', '너무더워', '시원하다', '씻고싶다', '해가길다', '땀이나요', '덥다더워', '수영모자', '선글라스', '양산쓰자', '너무습해'],
  5: ['여름이 왔도다', '너무 더워 진짜 더워', '가만히 있으면 안 더워', '겨울 언제 오냐', '아이스크림 먹을 사람', '오늘은 별로 안 덥네']
};

const Game = () => {
  const { level } = useParams();
  const canvasRef = useRef(null);
  const [words, setWords] = useState([]);
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const wordId = useRef(0);

  // 단어 추가
  useEffect(() => {
    const interval = setInterval(() => {
      const levelWords = wordList[level] || [];
      const newWords = levelWords[Math.floor(Math.random() * levelWords.length)];
      setWords((prev) => [
        ...prev,
        {
          id: wordId.current++,
          text: newWords,
          x: Math.random() * 700,
          y: 0
        }
      ]);
    }, 1500 - level * 200); // 속도차

    return () => clearInterval(interval);
  }, [level]);

  // 단어 떨어지기
  useEffect(() => {
    const falling = setInterval(() => {
      setWords((prev) => {
        const updated = prev.map((w) => ({ ...w, y: w.y + 5 + Number(level) * 1.5 }));
        const lost = updated.some((w) => w.y > 500);
        if (lost) {
          setGameOver(true);
          clearInterval(falling);
        }
        return updated.filter((w) => w.y <= 500);
      });
    }, 100);

    return () => clearInterval(falling);
  }, [level]);

  // 엔터키를 눌렀을 때, 단어가 맞으면 사라짐
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setWords((prev) => {
        const found = prev.find((w) => w.text === input.trim());
        if (found) {
          setScore((s) => s + 1);
          return prev.filter((w) => w.id !== found.id);
        }
        return prev;
      });
      setInput('');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={styles.subtitle}>{level}단계 - 여름 타자 게임</p>
      <h3 style={styles.scoreText}>점수: {score}</h3>
      {gameOver ? (
        <h2 style={styles.hot}>아 덥다 더워!</h2>
      ) : (
        <>
          <canvas ref={canvasRef} width={800} height={500} style={{ border: '1px solid black', background: '#fff' }}>
          </canvas>
          <div style={{ position: 'relative', top: '-500px', width: 800, margin: '0 auto' }}>
            {words.map((w) => (
              <div
                key={w.id}
                style={{
                  position: 'absolute',
                  left: w.x,
                  top: w.y,
                  fontSize: '20px',
                  color: '#008024',
                  fontWeight: 'bold'
                }}>
                {w.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ padding: '10px', marginTop: '20px', fontSize: '18px' }}
            disabled={gameOver}
          />
        </>
      )}
    </div>
  );
};

const styles = {
  subtitle: {
    fontSize: '24px',
    fontWeight: '200',
    color: '#008024',
    marginTop: '40px',
    marginBottom: '40px',
    textAlign: 'center',
  },
  hot: {
    color: 'red',
    margin: '21rem 1rem 28rem 1rem',
  },
  scoreText: {
    color: '#008024',
    marginTop: '60px',
    marginBottom: '40px'
  },
};

export default Game;