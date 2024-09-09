import React from 'react';
import { friends } from '../data/data';

const Friend = () => {

    return (
        <div className='friend'>
           {
                friends.map(f => (
                    <h3>{f.name}({f.phone}) {f.addr} / {f.job}</h3>
                ))
           }

        </div>
    );
};

export default Friend;