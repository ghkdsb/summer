import React from 'react';
import {Link} from 'react-router-dom';

const Music = () => {
  const teamLogos = [
    {name: "SummerDaze", url: "SummerDaze", src: "https://musicmeta-phinf.pstatic.net/album/031/635/31635225.jpg?type=r360Fll&v=20240524122228", alt: "수진앨범커버"},
    {name: "Attention", url: "Attention", src: "https://musicmeta-phinf.pstatic.net/album/007/795/7795016.jpg?type=r360Fll&v=20240221013522", alt: "뉴진스앨범커버"},
    {name: "열기", url: "Heat", src: "https://musicmeta-phinf.pstatic.net/album/002/496/2496191.jpg?type=r360Fll&v=20241003050022", alt: "이달소앨범커버"},
    {name: "Jogging", url: "Jogging", src: "https://musicmeta-phinf.pstatic.net/album/004/785/4785607.jpg?type=r360Fll&v=20250205161520", alt: "루시앨범커버"},
    {name: "Summerfesta", url: "Summerfesta", src: "https://musicmeta-phinf.pstatic.net/album/031/883/31883600.jpg?type=r360Fll&v=20240628180827", alt: "아이브앨범커버"},
    {name: "Everblue", url: "Everblue", src: "https://musicmeta-phinf.pstatic.net/album/006/690/6690898.jpg?type=r360Fll&v=20250109104007", alt: "오모이노타케앨범커버"},
    {name: "야간비행", url: "MATWF", src: "https://musicmeta-phinf.pstatic.net/album/002/938/2938375.jpg?type=r360Fll&v=20230331162814", alt: "백예린앨범커버"},
    {name: "Drive", url: "Drive", src: "https://musicmeta-phinf.pstatic.net/album/005/770/5770460.jpg?type=r360Fll&v=20230331131210", alt: "김아름앨범커버"},
    
  ];

  return (
    <>
    <style>
      {`
        .team-box {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          background: white;
          box-shadow: 0 0.25rem 0.75rem rgb(147, 192, 169, 0.605);
          transition: 0.3s;
          padding: 1.2rem;
          max-width: 20rem;
          margin: 0 auto;
        }

        .team-box img {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          transition: 0.3s ease;
        }

        .team-box .overlay {
          position: absolute;
          inset: 0;
          background: rgb(59, 216, 59, 0.605);
          backdrop-filter: blur(3px);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: bold;
          font-size: 1.2rem;
          opacity: 0;
          transition: 0.3s ease;
          z-index: 1;
          border-radius: 1rem;
        }

        .team-box:hover .overlay {
          opacity: 1;
        }
      `}
    </style>

      <p style={styles.subtitle}>플레이리스트</p>
      <section style={styles.teamSection}>
        {teamLogos.map((team, i) => (
          <Link
            to={`/MusicPlayer/${team.url}`}
            key={i}
            className="team-box"
            style={{ textDecoration: 'none'}}>
            <div className="overlay">음악 듣기</div>
          <img src={team.src} alt={team.alt} style={styles.teamLogo} />
          </Link>
        ))}
      </section>
    </>
  );
};

const styles = {
  teamSection: {
    textAlign: 'center',
    padding: '4rem 23.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5rem 3rem',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: '200',
    color: '#008024',
    marginTop: '40px',
    marginBottom: '80px',
    textAlign: 'center',
  },
  teamLogo: {
    width: '10rem',
    height: 'auto',
    display: 'block',
  }
};

export default Music;