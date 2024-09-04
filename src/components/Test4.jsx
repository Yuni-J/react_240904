import React from 'react';

// const Test4 = (props) => {
//     return (
//         <div className='test4'>
//             <h1 style={{color: props.color}}>Hello~~! {props.name}</h1>
//         </div>
//     );
// };


const Test4 = ({name, color}) => {
    return (
        <div className='test4'>
            <h1 style={{color: color}}>Hello~~! {name}</h1>
        </div>
    );
};

// props 를 지정하고 값이 들어오지 않은 경우 빈 값으로 처리

// defaultProps 로 기본값 설정
Test4.defaultProps = {
    name: 'Hi'
}

export default Test4;