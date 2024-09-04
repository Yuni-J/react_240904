import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div>Header.jsx Area</div>
            {/* 네비게이션 바 처럼 a태그 링크를 설정하면 해당 컴포넌트로 이동 */}
            {/* npm i react-router-dom 설치 */}
            {/* <Link to='컴포넌트명'>test</Link> */}     {/* 해당글자를 선택하면 저 컴포넌트로 이동해주세요 */}
            <Link to='/home'>Home</Link>
            <Link to='/test'>Test</Link>
            <Link to='/test2'>Test2</Link>
            <Link to='/test3'>Test3</Link>
            <Link to='/test4'>Test4</Link>
        </div>
    );
};

export default Header;