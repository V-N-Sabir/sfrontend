import React from 'react';
import cl from './Loader.module.css';

const Loader = () => {
    return (
        <div className={cl.load}>
        <p className={cl.loader}></p>
        </div>
    )
}

export default Loader;