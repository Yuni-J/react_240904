import React from 'react';

const Friend2 = (props) => {

    const {name, phone, addr, job} = props.fr;

    return (
        <div className='friend2'>
              <h3>{name}({phone}) {addr} / {job}</h3>
        </div>
    );
};

export default Friend2;