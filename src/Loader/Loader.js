import React from 'react';
import cl from './Loader.module.css';

const Loader = ({loader}) => {
    //console.log("cl",`${cl.load} generalstyle`);
    return (
        <div className={cl.load}>
        <p className={loader ? cl.loader : cl.loaderSmall}></p>
        </div>
    )
}

export default Loader