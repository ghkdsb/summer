import React from 'react'

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>와!!!! 여름이다!!!!!!!!</p>
            <p>Hwang yu jin | 22461121</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>© 2025 여름 | 이 웹사이트는 냉면 4개 분량의 열정으로 만들어졌습니다.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: 'rgb(81, 211, 120)',
        color: '#fff',
        padding: '3rem',
        textAling: 'center',
        marginTop: '10rem',
        height: '15rem',
    },
};

export default Footer;