import React from 'react';


const Student2 = (props) => {
    
    // 구조 분해 할당 방식
    // props : 객체
    // 부모 컴포넌트 : Home.jsx
    // 부모 컴포넌트의 std 값을 자식 컴포넌트에 가지고 옴
    
    const {name, age, addr} = props.std;

    
    return (
        <div className='student2'>
            <h3>{name}({age}) : {addr}</h3>  
        </div>
    );
};

export default Student2;