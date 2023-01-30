import React from 'react'
import './LoaderLoading.css'

//https://blog.hubspot.com/website/css-loading-animation
//LoaderTest
//https://codepen.io/domsammut/pen/kQjQvq
const LoaderTest = () => {
    //console.log("cl",`${cl.load} generalstyle`);
    return (
    <div className='loading-container'>
        <div className='loading'></div>
        <div id='loading-text'>loading</div>
    </div>
    
    )
}


export default LoaderTest