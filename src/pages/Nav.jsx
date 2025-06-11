import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.png';

const Nav = () => {
    return (
        <>
            <style>
                {`
          .navMein {
            text-decoration: none;
            color: black;
            transition: color 0.1s ease;
          }
          .navMein:hover {
            color:rgb(0, 205, 7);
          }
        `}
            </style>

            <nav style={styles.nav}>
                <Link to="/">
                    <img
                        src={Logo}
                        alt="로고"
                        style={styles.logo}
                    />
                </Link>
                <div style={styles.menuContainer}>
                    <ul style={styles.menu}>
                        <li><Link to="/Food" className="navMein">여름의 맛</Link></li>
                        <li><Link to="/Music" className="navMein">여름의 소리</Link></li>
                        <li><Link to="/CalendarPage" className="navMein">여름의 순간</Link></li>
                        <li><Link to="/Drawing" className="navMein">여름의 풍경</Link></li>
                        <li><Link to="/Level" className="navMein">여름의 말</Link></li>
                    </ul>
                </div>
                <div style={styles.navLine}></div>
            </nav>
            <div style={{ height: '9.5rem' }}></div>
        </>
    );
};


const styles = {
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        color: '#000',
        zIndex: '500',
        boxShadow: '0 0.5rem 3.75rem rgb(59, 216, 59)'
    },
    logo: {
        display: 'flex',
        width: '100%',
        maxWidth: '3.75rem',
        margin: '0.8rem',
        padding: '0.5rem 2rem'
    },
    menuContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    menu: {
        padding: '0',
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '13.5rem',
        margin: '1.8rem',
        fontSize: '1.2rem'
    }
};

export default Nav;